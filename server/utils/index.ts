import crypto from 'node:crypto'

type StringType = 'numeric' | 'num' | 'alphabetic' | 'alpha' | 'alphanumeric' | 'alphanum'

export function randomString(lengthOrPattern?: number | string, type?: StringType): string {
  const DEFAULT_STR_LENGTH = 16
  // Define character sets
  const charSets = {
    numeric: '0123456789',
    num: '0123456789',
    alphabetic: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    alpha: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    alphanumeric: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    alphanum: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  }

  // Function to get unbiased random character from a charset
  const getUnbiasedRandomChar = (charset: string): string => {
    const charsetLength = charset.length
    // Calculate how many bytes we need for the desired range
    // We need the smallest n such that 256^n > charsetLength
    // For practical purposes, 1 or 2 bytes are usually enough
    const bytesNeeded = Math.ceil(Math.log(charsetLength) / Math.log(256))
    
    // Calculate maximum valid value to avoid modulo bias
    // This is the largest multiple of charsetLength that fits in the bytes
    const maxValidValue = Math.floor((256 ** bytesNeeded) / charsetLength) * charsetLength
    
    while (true) {
      // Get random bytes
      const randomBytes = crypto.randomBytes(bytesNeeded)
      
      // Convert bytes to an integer
      let randomValue = 0
      for (let i = 0; i < bytesNeeded; i++) {
        randomValue = (randomValue * 256) + randomBytes[i]
      }
      
      // If the value is within our valid range, use it
      if (randomValue < maxValidValue) {
        return charset[randomValue % charsetLength]
      }
      // Otherwise try again to avoid bias
    }
  }

  // Handle numeric length parameter
  if (lengthOrPattern === undefined || lengthOrPattern === null || typeof lengthOrPattern === 'number') {
    const length = lengthOrPattern || DEFAULT_STR_LENGTH
    const charset = type ? charSets[type] : charSets['alphanumeric']
    
    // Generate token of specified length
    let token = ''
    for (let i = 0; i < length; i++) {
      token += getUnbiasedRandomChar(charset)
    }
    
    return token
  }

  // Handle pattern string
  const pattern = lengthOrPattern
  return pattern.replace(/[9aA]/g, (match) => {
    let charset: string = ''
    
    if (match === '9') charset = charSets.numeric
    else if (match === 'A') charset = charSets.uppercase
    else if (match === 'a') charset = charSets.alphabetic
    
    return getUnbiasedRandomChar(charset)
  })
}

/* 
export function handleApiError(error: unknown | Error) {
  let message: string = ''
  if (error instanceOf Error) {
    message = error.message
  } else if (typeof error === 'string') {
    message = error
  } else {
    message = error.toString()
  }

} */