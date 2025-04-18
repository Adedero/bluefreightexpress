import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { createTransport } from 'nodemailer';
import crypto, { createHash } from 'node:crypto';
import http from 'node:http';
import https from 'node:https';
import { EventEmitter } from 'node:events';
import { Buffer as Buffer$1 } from 'node:buffer';
import BaseStyle from '@primevue/core/base/style';
import BaseComponentStyle from '@primevue/core/basecomponent/style';
import { style } from '@primeuix/styles/autocomplete';
import { isNotEmpty, isEmpty } from '@primeuix/utils/object';
import { style as style$1 } from '@primeuix/styles/cascadeselect';
import { style as style$2 } from '@primeuix/styles/checkbox';
import { style as style$3 } from '@primeuix/styles/checkboxgroup';
import { style as style$4 } from '@primeuix/styles/colorpicker';
import { style as style$5 } from '@primeuix/styles/datepicker';
import { style as style$6 } from '@primeuix/styles/floatlabel';
import { style as style$7 } from '@primeuix/styles/iconfield';
import { style as style$8 } from '@primeuix/styles/iftalabel';
import { style as style$9 } from '@primeuix/styles/inputchips';
import { style as style$a } from '@primeuix/styles/inputgroup';
import { style as style$b } from '@primeuix/styles/inputnumber';
import { style as style$c } from '@primeuix/styles/inputotp';
import { style as style$d } from '@primeuix/styles/inputtext';
import { style as style$e } from '@primeuix/styles/knob';
import { style as style$f } from '@primeuix/styles/listbox';
import { style as style$g } from '@primeuix/styles/multiselect';
import { style as style$h } from '@primeuix/styles/password';
import { style as style$i } from '@primeuix/styles/radiobutton';
import { style as style$j } from '@primeuix/styles/radiobuttongroup';
import { style as style$k } from '@primeuix/styles/rating';
import { style as style$l } from '@primeuix/styles/select';
import { style as style$m } from '@primeuix/styles/selectbutton';
import { style as style$n } from '@primeuix/styles/slider';
import { style as style$o } from '@primeuix/styles/textarea';
import { style as style$p } from '@primeuix/styles/togglebutton';
import { style as style$q } from '@primeuix/styles/toggleswitch';
import { style as style$r } from '@primeuix/styles/treeselect';
import { style as style$s } from '@primeuix/styles/button';
import { style as style$t } from '@primeuix/styles/buttongroup';
import { style as style$u } from '@primeuix/styles/speeddial';
import { style as style$v } from '@primeuix/styles/splitbutton';
import { style as style$w } from '@primeuix/styles/datatable';
import { style as style$x } from '@primeuix/styles/dataview';
import { style as style$y } from '@primeuix/styles/orderlist';
import { style as style$z } from '@primeuix/styles/organizationchart';
import { style as style$A } from '@primeuix/styles/paginator';
import { style as style$B } from '@primeuix/styles/picklist';
import { style as style$C } from '@primeuix/styles/tree';
import { style as style$D } from '@primeuix/styles/treetable';
import { style as style$E } from '@primeuix/styles/timeline';
import { style as style$F } from '@primeuix/styles/virtualscroller';
import { style as style$G } from '@primeuix/styles/accordion';
import { style as style$H } from '@primeuix/styles/card';
import { style as style$I } from '@primeuix/styles/divider';
import { style as style$J } from '@primeuix/styles/fieldset';
import { style as style$K } from '@primeuix/styles/panel';
import { style as style$L } from '@primeuix/styles/scrollpanel';
import { style as style$M } from '@primeuix/styles/splitter';
import { style as style$N } from '@primeuix/styles/stepper';
import { style as style$O } from '@primeuix/styles/tabview';
import { style as style$P } from '@primeuix/styles/tabs';
import { style as style$Q } from '@primeuix/styles/toolbar';
import { style as style$R } from '@primeuix/styles/confirmdialog';
import { style as style$S } from '@primeuix/styles/confirmpopup';
import { style as style$T } from '@primeuix/styles/dialog';
import { style as style$U } from '@primeuix/styles/drawer';
import { style as style$V } from '@primeuix/styles/popover';
import { style as style$W } from '@primeuix/styles/fileupload';
import { style as style$X } from '@primeuix/styles/breadcrumb';
import { style as style$Y } from '@primeuix/styles/contextmenu';
import { style as style$Z } from '@primeuix/styles/dock';
import { style as style$_ } from '@primeuix/styles/menu';
import { style as style$$ } from '@primeuix/styles/menubar';
import { style as style$10 } from '@primeuix/styles/megamenu';
import { style as style$11 } from '@primeuix/styles/panelmenu';
import { style as style$12 } from '@primeuix/styles/steps';
import { style as style$13 } from '@primeuix/styles/tabmenu';
import { style as style$14 } from '@primeuix/styles/tieredmenu';
import { style as style$15 } from '@primeuix/styles/message';
import { style as style$16 } from '@primeuix/styles/inlinemessage';
import { style as style$17 } from '@primeuix/styles/toast';
import { style as style$18 } from '@primeuix/styles/carousel';
import { style as style$19 } from '@primeuix/styles/galleria';
import { style as style$1a } from '@primeuix/styles/image';
import { style as style$1b } from '@primeuix/styles/imagecompare';
import { style as style$1c } from '@primeuix/styles/avatar';
import { style as style$1d } from '@primeuix/styles/badge';
import { style as style$1e } from '@primeuix/styles/blockui';
import { style as style$1f } from '@primeuix/styles/chip';
import { style as style$1g } from '@primeuix/styles/inplace';
import { style as style$1h } from '@primeuix/styles/metergroup';
import { style as style$1i } from '@primeuix/styles/overlaybadge';
import { style as style$1j } from '@primeuix/styles/scrolltop';
import { style as style$1k } from '@primeuix/styles/skeleton';
import { style as style$1l } from '@primeuix/styles/progressbar';
import { style as style$1m } from '@primeuix/styles/progressspinner';
import { style as style$1n } from '@primeuix/styles/tag';
import { style as style$1o } from '@primeuix/styles/terminal';
import FormStyle from '@primevue/forms/form/style';
import FormFieldStyle from '@primevue/forms/formfield/style';
import { style as style$1p } from '@primeuix/styles/tooltip';
import { style as style$1q } from '@primeuix/styles/ripple';
import { Theme } from '@primeuix/styled';
import { promises, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { getIcons } from '@iconify/utils';
import { consola } from 'consola';
import { resolve as resolve$1, dirname as dirname$1, join } from 'node:path';
import { ipxFSStorage, ipxHttpStorage, createIPX, createIPXH3Handler } from 'ipx';

const subtle = crypto.webcrypto?.subtle || {};
const randomUUID = () => {
  return crypto.randomUUID();
};
const getRandomValues = (array) => {
  return crypto.webcrypto.getRandomValues(array);
};
const _crypto = {
  randomUUID,
  getRandomValues,
  subtle
};

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const PROTOCOL_SCRIPT_RE = /^[\s\0]*(blob|data|javascript|vbscript):$/i;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function isScriptProtocol(protocol) {
  return !!protocol && PROTOCOL_SCRIPT_RE.test(protocol);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  const cleanPath = s0.endsWith("/") ? s0.slice(0, -1) : s0;
  return (cleanPath || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function serialize$2(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low": {
        str += "; Priority=Low";
        break;
      }
      case "medium": {
        str += "; Priority=Medium";
        break;
      }
      case "high": {
        str += "; Priority=High";
        break;
      }
      default: {
        throw new TypeError("option priority is invalid");
      }
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true: {
        str += "; SameSite=Strict";
        break;
      }
      case "lax": {
        str += "; SameSite=Lax";
        break;
      }
      case "strict": {
        str += "; SameSite=Strict";
        break;
      }
      case "none": {
        str += "; SameSite=None";
        break;
      }
      default: {
        throw new TypeError("option sameSite is invalid");
      }
    }
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}

function parseSetCookie(setCookieValue, options) {
  const parts = (setCookieValue || "").split(";").filter((str) => typeof str === "string" && !!str.trim());
  const nameValuePairStr = parts.shift() || "";
  const parsed = _parseNameValuePair(nameValuePairStr);
  const name = parsed.name;
  let value = parsed.value;
  try {
    value = options?.decode === false ? value : (options?.decode || decodeURIComponent)(value);
  } catch {
  }
  const cookie = {
    name,
    value
  };
  for (const part of parts) {
    const sides = part.split("=");
    const partKey = (sides.shift() || "").trimStart().toLowerCase();
    const partValue = sides.join("=");
    switch (partKey) {
      case "expires": {
        cookie.expires = new Date(partValue);
        break;
      }
      case "max-age": {
        cookie.maxAge = Number.parseInt(partValue, 10);
        break;
      }
      case "secure": {
        cookie.secure = true;
        break;
      }
      case "httponly": {
        cookie.httpOnly = true;
        break;
      }
      case "samesite": {
        cookie.sameSite = partValue;
        break;
      }
      default: {
        cookie[partKey] = partValue;
      }
    }
  }
  return cookie;
}
function _parseNameValuePair(nameValuePairStr) {
  let name = "";
  let value = "";
  const nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

// src/utils.ts
var alphabetByEncoding = {};
var alphabetByValue = Array.from({ length: 64 });
for (let i = 0, start = "A".charCodeAt(0), limit = "Z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  alphabetByEncoding[char] = i;
  alphabetByValue[i] = char;
}
for (let i = 0, start = "a".charCodeAt(0), limit = "z".charCodeAt(0); i + start <= limit; i++) {
  const char = String.fromCharCode(i + start);
  const index = i + 26;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
for (let i = 0; i < 10; i++) {
  alphabetByEncoding[i.toString(10)] = i + 52;
  const char = i.toString(10);
  const index = i + 52;
  alphabetByEncoding[char] = index;
  alphabetByValue[index] = char;
}
alphabetByEncoding["-"] = 62;
alphabetByValue[62] = "-";
alphabetByEncoding["_"] = 63;
alphabetByValue[63] = "_";
var bitsPerLetter = 6;
var bitsPerByte = 8;
var maxLetterValue = 63;
var stringToBuffer = (value) => {
  return new TextEncoder().encode(value);
};
var bufferToString = (value) => {
  return new TextDecoder().decode(value);
};
var base64urlDecode = (_input) => {
  const input = _input + "=".repeat((4 - _input.length % 4) % 4);
  let totalByteLength = input.length / 4 * 3;
  if (input.endsWith("==")) {
    totalByteLength -= 2;
  } else if (input.endsWith("=")) {
    totalByteLength--;
  }
  const out = new ArrayBuffer(totalByteLength);
  const dataView = new DataView(out);
  for (let i = 0; i < input.length; i += 4) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = i + 3; j <= limit; j++) {
      if (input[j] === "=") {
        bits >>= bitsPerLetter;
      } else {
        if (!(input[j] in alphabetByEncoding)) {
          throw new TypeError(`Invalid character ${input[j]} in base64 string.`);
        }
        bits |= alphabetByEncoding[input[j]] << (limit - j) * bitsPerLetter;
        bitLength += bitsPerLetter;
      }
    }
    const chunkOffset = i / 4 * 3;
    bits >>= bitLength % bitsPerByte;
    const byteLength = Math.floor(bitLength / bitsPerByte);
    for (let k = 0; k < byteLength; k++) {
      const offset = (byteLength - k - 1) * bitsPerByte;
      dataView.setUint8(chunkOffset + k, (bits & 255 << offset) >> offset);
    }
  }
  return new Uint8Array(out);
};
var base64urlEncode = (_input) => {
  const input = typeof _input === "string" ? stringToBuffer(_input) : _input;
  let str = "";
  for (let i = 0; i < input.length; i += 3) {
    let bits = 0;
    let bitLength = 0;
    for (let j = i, limit = Math.min(i + 3, input.length); j < limit; j++) {
      bits |= input[j] << (limit - j - 1) * bitsPerByte;
      bitLength += bitsPerByte;
    }
    const bitClusterCount = Math.ceil(bitLength / bitsPerLetter);
    bits <<= bitClusterCount * bitsPerLetter - bitLength;
    for (let k = 1; k <= bitClusterCount; k++) {
      const offset = (bitClusterCount - k) * bitsPerLetter;
      str += alphabetByValue[(bits & maxLetterValue << offset) >> offset];
    }
  }
  return str;
};

// src/index.ts
var defaults = {
  encryption: { saltBits: 256, algorithm: "aes-256-cbc", iterations: 1, minPasswordlength: 32 },
  integrity: { saltBits: 256, algorithm: "sha256", iterations: 1, minPasswordlength: 32 },
  ttl: 0,
  timestampSkewSec: 60,
  localtimeOffsetMsec: 0
};
var clone = (options) => ({
  ...options,
  encryption: { ...options.encryption },
  integrity: { ...options.integrity }
});
var algorithms = {
  "aes-128-ctr": { keyBits: 128, ivBits: 128, name: "AES-CTR" },
  "aes-256-cbc": { keyBits: 256, ivBits: 128, name: "AES-CBC" },
  sha256: { keyBits: 256, name: "SHA-256" }
};
var macPrefix = "Fe26.2";
var randomBytes = (_crypto, size) => {
  const bytes = new Uint8Array(size);
  _crypto.getRandomValues(bytes);
  return bytes;
};
var randomBits = (_crypto, bits) => {
  if (bits < 1)
    throw new Error("Invalid random bits count");
  const bytes = Math.ceil(bits / 8);
  return randomBytes(_crypto, bytes);
};
var pbkdf2 = async (_crypto, password, salt, iterations, keyLength, hash) => {
  const passwordBuffer = stringToBuffer(password);
  const importedKey = await _crypto.subtle.importKey(
    "raw",
    passwordBuffer,
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  );
  const saltBuffer = stringToBuffer(salt);
  const params = { name: "PBKDF2", hash, salt: saltBuffer, iterations };
  const derivation = await _crypto.subtle.deriveBits(params, importedKey, keyLength * 8);
  return derivation;
};
var generateKey = async (_crypto, password, options) => {
  var _a;
  if (!(password == null ? void 0 : password.length))
    throw new Error("Empty password");
  if (options == null || typeof options !== "object")
    throw new Error("Bad options");
  if (!(options.algorithm in algorithms))
    throw new Error(`Unknown algorithm: ${options.algorithm}`);
  const algorithm = algorithms[options.algorithm];
  const result = {};
  const hmac = (_a = options.hmac) != null ? _a : false;
  const id = hmac ? { name: "HMAC", hash: algorithm.name } : { name: algorithm.name };
  const usage = hmac ? ["sign", "verify"] : ["encrypt", "decrypt"];
  if (typeof password === "string") {
    if (password.length < options.minPasswordlength)
      throw new Error(
        `Password string too short (min ${options.minPasswordlength} characters required)`
      );
    let { salt = "" } = options;
    if (!salt) {
      const { saltBits = 0 } = options;
      if (!saltBits)
        throw new Error("Missing salt and saltBits options");
      const randomSalt = randomBits(_crypto, saltBits);
      salt = [...new Uint8Array(randomSalt)].map((x) => x.toString(16).padStart(2, "0")).join("");
    }
    const derivedKey = await pbkdf2(
      _crypto,
      password,
      salt,
      options.iterations,
      algorithm.keyBits / 8,
      "SHA-1"
    );
    const importedEncryptionKey = await _crypto.subtle.importKey(
      "raw",
      derivedKey,
      id,
      false,
      usage
    );
    result.key = importedEncryptionKey;
    result.salt = salt;
  } else {
    if (password.length < algorithm.keyBits / 8)
      throw new Error("Key buffer (password) too small");
    result.key = await _crypto.subtle.importKey("raw", password, id, false, usage);
    result.salt = "";
  }
  if (options.iv)
    result.iv = options.iv;
  else if ("ivBits" in algorithm)
    result.iv = randomBits(_crypto, algorithm.ivBits);
  return result;
};
var getEncryptParams = (algorithm, key, data) => {
  return [
    algorithm === "aes-128-ctr" ? { name: "AES-CTR", counter: key.iv, length: 128 } : { name: "AES-CBC", iv: key.iv },
    key.key,
    typeof data === "string" ? stringToBuffer(data) : data
  ];
};
var encrypt = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, options);
  const encrypted = await _crypto.subtle.encrypt(...getEncryptParams(options.algorithm, key, data));
  return { encrypted: new Uint8Array(encrypted), key };
};
var decrypt = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, options);
  const decrypted = await _crypto.subtle.decrypt(...getEncryptParams(options.algorithm, key, data));
  return bufferToString(new Uint8Array(decrypted));
};
var hmacWithPassword = async (_crypto, password, options, data) => {
  const key = await generateKey(_crypto, password, { ...options, hmac: true });
  const textBuffer = stringToBuffer(data);
  const signed = await _crypto.subtle.sign({ name: "HMAC" }, key.key, textBuffer);
  const digest = base64urlEncode(new Uint8Array(signed));
  return { digest, salt: key.salt };
};
var normalizePassword = (password) => {
  if (typeof password === "string" || password instanceof Uint8Array)
    return { encryption: password, integrity: password };
  if ("secret" in password)
    return { id: password.id, encryption: password.secret, integrity: password.secret };
  return { id: password.id, encryption: password.encryption, integrity: password.integrity };
};
var seal = async (_crypto, object, password, options) => {
  if (!password)
    throw new Error("Empty password");
  const opts = clone(options);
  const now = Date.now() + (opts.localtimeOffsetMsec || 0);
  const objectString = JSON.stringify(object);
  const pass = normalizePassword(password);
  const { id = "", encryption, integrity } = pass;
  if (id && !/^\w+$/.test(id))
    throw new Error("Invalid password id");
  const { encrypted, key } = await encrypt(_crypto, encryption, opts.encryption, objectString);
  const encryptedB64 = base64urlEncode(new Uint8Array(encrypted));
  const iv = base64urlEncode(key.iv);
  const expiration = opts.ttl ? now + opts.ttl : "";
  const macBaseString = `${macPrefix}*${id}*${key.salt}*${iv}*${encryptedB64}*${expiration}`;
  const mac = await hmacWithPassword(_crypto, integrity, opts.integrity, macBaseString);
  const sealed = `${macBaseString}*${mac.salt}*${mac.digest}`;
  return sealed;
};
var fixedTimeComparison = (a, b) => {
  let mismatch = a.length === b.length ? 0 : 1;
  if (mismatch)
    b = a;
  for (let i = 0; i < a.length; i += 1)
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
};
var unseal = async (_crypto, sealed, password, options) => {
  if (!password)
    throw new Error("Empty password");
  const opts = clone(options);
  const now = Date.now() + (opts.localtimeOffsetMsec || 0);
  const parts = sealed.split("*");
  if (parts.length !== 8)
    throw new Error("Incorrect number of sealed components");
  const prefix = parts[0];
  let passwordId = parts[1];
  const encryptionSalt = parts[2];
  const encryptionIv = parts[3];
  const encryptedB64 = parts[4];
  const expiration = parts[5];
  const hmacSalt = parts[6];
  const hmac = parts[7];
  const macBaseString = `${prefix}*${passwordId}*${encryptionSalt}*${encryptionIv}*${encryptedB64}*${expiration}`;
  if (macPrefix !== prefix)
    throw new Error("Wrong mac prefix");
  if (expiration) {
    if (!/^\d+$/.test(expiration))
      throw new Error("Invalid expiration");
    const exp = Number.parseInt(expiration, 10);
    if (exp <= now - opts.timestampSkewSec * 1e3)
      throw new Error("Expired seal");
  }
  let pass = "";
  passwordId = passwordId || "default";
  if (typeof password === "string" || password instanceof Uint8Array)
    pass = password;
  else if (passwordId in password) {
    pass = password[passwordId];
  } else {
    throw new Error(`Cannot find password: ${passwordId}`);
  }
  pass = normalizePassword(pass);
  const macOptions = opts.integrity;
  macOptions.salt = hmacSalt;
  const mac = await hmacWithPassword(_crypto, pass.integrity, macOptions, macBaseString);
  if (!fixedTimeComparison(mac.digest, hmac))
    throw new Error("Bad hmac value");
  const encrypted = base64urlDecode(encryptedB64);
  const decryptOptions = opts.encryption;
  decryptOptions.salt = encryptionSalt;
  decryptOptions.iv = base64urlDecode(encryptionIv);
  const decrypted = await decrypt(_crypto, pass.encryption, decryptOptions, encrypted);
  if (decrypted)
    return JSON.parse(decrypted);
  return null;
};

function o(n){throw new Error(`${n} is not implemented yet!`)}let i$1 = class i extends EventEmitter{__unenv__={};readableEncoding=null;readableEnded=true;readableFlowing=false;readableHighWaterMark=0;readableLength=0;readableObjectMode=false;readableAborted=false;readableDidRead=false;closed=false;errored=null;readable=false;destroyed=false;static from(e,t){return new i(t)}constructor(e){super();}_read(e){}read(e){}setEncoding(e){return this}pause(){return this}resume(){return this}isPaused(){return  true}unpipe(e){return this}unshift(e,t){}wrap(e){return this}push(e,t){return  false}_destroy(e,t){this.removeAllListeners();}destroy(e){return this.destroyed=true,this._destroy(e),this}pipe(e,t){return {}}compose(e,t){throw new Error("Method not implemented.")}[Symbol.asyncDispose](){return this.destroy(),Promise.resolve()}async*[Symbol.asyncIterator](){throw o("Readable.asyncIterator")}iterator(e){throw o("Readable.iterator")}map(e,t){throw o("Readable.map")}filter(e,t){throw o("Readable.filter")}forEach(e,t){throw o("Readable.forEach")}reduce(e,t,r){throw o("Readable.reduce")}find(e,t){throw o("Readable.find")}findIndex(e,t){throw o("Readable.findIndex")}some(e,t){throw o("Readable.some")}toArray(e){throw o("Readable.toArray")}every(e,t){throw o("Readable.every")}flatMap(e,t){throw o("Readable.flatMap")}drop(e,t){throw o("Readable.drop")}take(e,t){throw o("Readable.take")}asIndexedPairs(e){throw o("Readable.asIndexedPairs")}};let l$1 = class l extends EventEmitter{__unenv__={};writable=true;writableEnded=false;writableFinished=false;writableHighWaterMark=0;writableLength=0;writableObjectMode=false;writableCorked=0;closed=false;errored=null;writableNeedDrain=false;destroyed=false;_data;_encoding="utf8";constructor(e){super();}pipe(e,t){return {}}_write(e,t,r){if(this.writableEnded){r&&r();return}if(this._data===void 0)this._data=e;else {const s=typeof this._data=="string"?Buffer$1.from(this._data,this._encoding||t||"utf8"):this._data,a=typeof e=="string"?Buffer$1.from(e,t||this._encoding||"utf8"):e;this._data=Buffer$1.concat([s,a]);}this._encoding=t,r&&r();}_writev(e,t){}_destroy(e,t){}_final(e){}write(e,t,r){const s=typeof t=="string"?this._encoding:"utf8",a=typeof t=="function"?t:typeof r=="function"?r:void 0;return this._write(e,s,a),true}setDefaultEncoding(e){return this}end(e,t,r){const s=typeof e=="function"?e:typeof t=="function"?t:typeof r=="function"?r:void 0;if(this.writableEnded)return s&&s(),this;const a=e===s?void 0:e;if(a){const u=t===s?void 0:t;this.write(a,u,s);}return this.writableEnded=true,this.writableFinished=true,this.emit("close"),this.emit("finish"),this}cork(){}uncork(){}destroy(e){return this.destroyed=true,delete this._data,this.removeAllListeners(),this}compose(e,t){throw new Error("Method not implemented.")}};const c$1=class c{allowHalfOpen=true;_destroy;constructor(e=new i$1,t=new l$1){Object.assign(this,e),Object.assign(this,t),this._destroy=g(e._destroy,t._destroy);}};function _(){return Object.assign(c$1.prototype,i$1.prototype),Object.assign(c$1.prototype,l$1.prototype),c$1}function g(...n){return function(...e){for(const t of n)t(...e);}}const m=_();class A extends m{__unenv__={};bufferSize=0;bytesRead=0;bytesWritten=0;connecting=false;destroyed=false;pending=false;localAddress="";localPort=0;remoteAddress="";remoteFamily="";remotePort=0;autoSelectFamilyAttemptedAddresses=[];readyState="readOnly";constructor(e){super();}write(e,t,r){return  false}connect(e,t,r){return this}end(e,t,r){return this}setEncoding(e){return this}pause(){return this}resume(){return this}setTimeout(e,t){return this}setNoDelay(e){return this}setKeepAlive(e,t){return this}address(){return {}}unref(){return this}ref(){return this}destroySoon(){this.destroy();}resetAndDestroy(){const e=new Error("ERR_SOCKET_CLOSED");return e.code="ERR_SOCKET_CLOSED",this.destroy(e),this}}class y extends i$1{aborted=false;httpVersion="1.1";httpVersionMajor=1;httpVersionMinor=1;complete=true;connection;socket;headers={};trailers={};method="GET";url="/";statusCode=200;statusMessage="";closed=false;errored=null;readable=false;constructor(e){super(),this.socket=this.connection=e||new A;}get rawHeaders(){const e=this.headers,t=[];for(const r in e)if(Array.isArray(e[r]))for(const s of e[r])t.push(r,s);else t.push(r,e[r]);return t}get rawTrailers(){return []}setTimeout(e,t){return this}get headersDistinct(){return p(this.headers)}get trailersDistinct(){return p(this.trailers)}}function p(n){const e={};for(const[t,r]of Object.entries(n))t&&(e[t]=(Array.isArray(r)?r:[r]).filter(Boolean));return e}class w extends l$1{statusCode=200;statusMessage="";upgrading=false;chunkedEncoding=false;shouldKeepAlive=false;useChunkedEncodingByDefault=false;sendDate=false;finished=false;headersSent=false;strictContentLength=false;connection=null;socket=null;req;_headers={};constructor(e){super(),this.req=e;}assignSocket(e){e._httpMessage=this,this.socket=e,this.connection=e,this.emit("socket",e),this._flush();}_flush(){this.flushHeaders();}detachSocket(e){}writeContinue(e){}writeHead(e,t,r){e&&(this.statusCode=e),typeof t=="string"&&(this.statusMessage=t,t=void 0);const s=r||t;if(s&&!Array.isArray(s))for(const a in s)this.setHeader(a,s[a]);return this.headersSent=true,this}writeProcessing(){}setTimeout(e,t){return this}appendHeader(e,t){e=e.toLowerCase();const r=this._headers[e],s=[...Array.isArray(r)?r:[r],...Array.isArray(t)?t:[t]].filter(Boolean);return this._headers[e]=s.length>1?s:s[0],this}setHeader(e,t){return this._headers[e.toLowerCase()]=t,this}setHeaders(e){for(const[t,r]of Object.entries(e))this.setHeader(t,r);return this}getHeader(e){return this._headers[e.toLowerCase()]}getHeaders(){return this._headers}getHeaderNames(){return Object.keys(this._headers)}hasHeader(e){return e.toLowerCase()in this._headers}removeHeader(e){delete this._headers[e.toLowerCase()];}addTrailers(e){}flushHeaders(){}writeEarlyHints(e,t){typeof t=="function"&&t();}}const E=(()=>{const n=function(){};return n.prototype=Object.create(null),n})();function R(n={}){const e=new E,t=Array.isArray(n)||H(n)?n:Object.entries(n);for(const[r,s]of t)if(s){if(e[r]===void 0){e[r]=s;continue}e[r]=[...Array.isArray(e[r])?e[r]:[e[r]],...Array.isArray(s)?s:[s]];}return e}function H(n){return typeof n?.entries=="function"}function S(n={}){if(n instanceof Headers)return n;const e=new Headers;for(const[t,r]of Object.entries(n))if(r!==void 0){if(Array.isArray(r)){for(const s of r)e.append(t,String(s));continue}e.set(t,String(r));}return e}const C=new Set([101,204,205,304]);async function b(n,e){const t=new y,r=new w(t);t.url=e.url?.toString()||"/";let s;if(!t.url.startsWith("/")){const d=new URL(t.url);s=d.host,t.url=d.pathname+d.search+d.hash;}t.method=e.method||"GET",t.headers=R(e.headers||{}),t.headers.host||(t.headers.host=e.host||s||"localhost"),t.connection.encrypted=t.connection.encrypted||e.protocol==="https",t.body=e.body||null,t.__unenv__=e.context,await n(t,r);let a=r._data;(C.has(r.statusCode)||t.method.toUpperCase()==="HEAD")&&(a=null,delete r._headers["content-length"]);const u={status:r.statusCode,statusText:r.statusMessage,headers:r._headers,body:a};return t.destroy(),r.destroy(),u}async function O(n,e,t={}){try{const r=await b(n,{url:e,...t});return new Response(r.body,{status:r.status,statusText:r.statusText,headers:S(r.headers)})}catch(r){return new Response(r.toString(),{status:Number.parseInt(r.statusCode||r.code)||500,statusText:r.statusText})}}

function useBase(base, handler) {
  base = withoutTrailingSlash(base);
  if (!base || base === "/") {
    return handler;
  }
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _path = event._path || event.node.req.url || "/";
    event._path = withoutBase(event.path || "/", base);
    event.node.req.url = event._path;
    try {
      return await handler(event);
    } finally {
      event._path = event.node.req.url = _path;
    }
  });
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

class H3Error extends Error {
  static __h3_error__ = true;
  statusCode = 500;
  fatal = false;
  unhandled = false;
  statusMessage;
  data;
  cause;
  constructor(message, opts = {}) {
    super(message, opts);
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== undefined) {
      obj.data = this.data;
    }
    return obj;
  }
}
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== undefined) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== undefined) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, undefined, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

async function validateData(data, fn) {
  try {
    const res = await fn(data);
    if (res === false) {
      throw createValidationError();
    }
    if (res === true) {
      return data;
    }
    return res ?? data;
  } catch (error) {
    throw createValidationError(error);
  }
}
function createValidationError(validateError) {
  throw createError$1({
    status: 400,
    statusMessage: "Validation Error",
    message: validateError?.message || "Validation Error",
    data: validateError
  });
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function getRouterParams(event, opts = {}) {
  let params = event.context.params || {};
  if (opts.decode) {
    params = { ...params };
    for (const key in params) {
      params[key] = decode$1(params[key]);
    }
  }
  return params;
}
function getRouterParam(event, name, opts = {}) {
  const params = getRouterParams(event, opts);
  return params[name];
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const ParsedBodySymbol = Symbol.for("h3ParsedBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(undefined);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
async function readBody(event, options = {}) {
  const request = event.node.req;
  if (hasProp(request, ParsedBodySymbol)) {
    return request[ParsedBodySymbol];
  }
  const contentType = request.headers["content-type"] || "";
  const body = await readRawBody(event);
  let parsed;
  if (contentType === "application/json") {
    parsed = _parseJSON(body, options.strict ?? true);
  } else if (contentType.startsWith("application/x-www-form-urlencoded")) {
    parsed = _parseURLEncodedBody(body);
  } else if (contentType.startsWith("text/")) {
    parsed = body;
  } else {
    parsed = _parseJSON(body, options.strict ?? false);
  }
  request[ParsedBodySymbol] = parsed;
  return parsed;
}
async function readValidatedBody(event, validate) {
  const _body = await readBody(event, { strict: true });
  return validateData(_body, validate);
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}
function _parseJSON(body = "", strict) {
  if (!body) {
    return undefined;
  }
  try {
    return destr(body, { strict });
  } catch {
    throw createError$1({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Invalid JSON body"
    });
  }
}
function _parseURLEncodedBody(body) {
  const form = new URLSearchParams(body);
  const parsedForm = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of form.entries()) {
    if (hasProp(parsedForm, key)) {
      if (!Array.isArray(parsedForm[key])) {
        parsedForm[key] = [parsedForm[key]];
      }
      parsedForm[key].push(value);
    } else {
      parsedForm[key] = value;
    }
  }
  return parsedForm;
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== undefined) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function getDistinctCookieKey(name, opts) {
  return [
    name,
    opts.domain || "",
    opts.path || "/",
    Boolean(opts.secure),
    Boolean(opts.httpOnly),
    Boolean(opts.sameSite)
  ].join(";");
}
function setCookie(event, name, value, serializeOptions = {}) {
  if (!serializeOptions.path) {
    serializeOptions = { path: "/", ...serializeOptions };
  }
  const newCookie = serialize$2(name, value, serializeOptions);
  const currentCookies = splitCookiesString(
    event.node.res.getHeader("set-cookie")
  );
  if (currentCookies.length === 0) {
    event.node.res.setHeader("set-cookie", newCookie);
    return;
  }
  const newCookieKey = getDistinctCookieKey(name, serializeOptions);
  event.node.res.removeHeader("set-cookie");
  for (const cookie of currentCookies) {
    const parsed = parseSetCookie(cookie);
    const key = getDistinctCookieKey(parsed.name, parsed);
    if (key === newCookieKey) {
      continue;
    }
    event.node.res.appendHeader("set-cookie", cookie);
  }
  event.node.res.appendHeader("set-cookie", newCookie);
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "accept-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => undefined);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event, { host: target.startsWith("/") }),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== undefined) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event, opts) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name) || name === "host" && opts?.host) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event, {
        host: typeof req === "string" && req.startsWith("/")
      }),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== undefined) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

const getSessionPromise = Symbol("getSession");
const DEFAULT_NAME = "h3";
const DEFAULT_COOKIE = {
  path: "/",
  secure: true,
  httpOnly: true
};
async function useSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  await getSession(event, config);
  const sessionManager = {
    get id() {
      return event.context.sessions?.[sessionName]?.id;
    },
    get data() {
      return event.context.sessions?.[sessionName]?.data || {};
    },
    update: async (update) => {
      if (!isEvent(event)) {
        throw new Error("[h3] Cannot update read-only session.");
      }
      await updateSession(event, config, update);
      return sessionManager;
    },
    clear: () => {
      if (!isEvent(event)) {
        throw new Error("[h3] Cannot clear read-only session.");
      }
      clearSession(event, config);
      return Promise.resolve(sessionManager);
    }
  };
  return sessionManager;
}
async function getSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  if (!event.context.sessions) {
    event.context.sessions = /* @__PURE__ */ Object.create(null);
  }
  const existingSession = event.context.sessions[sessionName];
  if (existingSession) {
    return existingSession[getSessionPromise] || existingSession;
  }
  const session = {
    id: "",
    createdAt: 0,
    data: /* @__PURE__ */ Object.create(null)
  };
  event.context.sessions[sessionName] = session;
  let sealedSession;
  if (config.sessionHeader !== false) {
    const headerName = typeof config.sessionHeader === "string" ? config.sessionHeader.toLowerCase() : `x-${sessionName.toLowerCase()}-session`;
    const headerValue = _getReqHeader(event, headerName);
    if (typeof headerValue === "string") {
      sealedSession = headerValue;
    }
  }
  if (!sealedSession) {
    const cookieHeader = _getReqHeader(event, "cookie");
    if (cookieHeader) {
      sealedSession = parse(cookieHeader + "")[sessionName];
    }
  }
  if (sealedSession) {
    const promise = unsealSession(event, config, sealedSession).catch(() => {
    }).then((unsealed) => {
      Object.assign(session, unsealed);
      delete event.context.sessions[sessionName][getSessionPromise];
      return session;
    });
    event.context.sessions[sessionName][getSessionPromise] = promise;
    await promise;
  }
  if (!session.id) {
    if (!isEvent(event)) {
      throw new Error(
        "Cannot initialize a new session. Make sure using `useSession(event)` in main handler."
      );
    }
    session.id = config.generateId?.() ?? (config.crypto || _crypto).randomUUID();
    session.createdAt = Date.now();
    await updateSession(event, config);
  }
  return session;
}
function _getReqHeader(event, name) {
  if (event.node) {
    return event.node?.req.headers[name];
  }
  if (event.request) {
    return event.request.headers?.get(name);
  }
  if (event.headers) {
    return event.headers.get(name);
  }
}
async function updateSession(event, config, update) {
  const sessionName = config.name || DEFAULT_NAME;
  const session = event.context.sessions?.[sessionName] || await getSession(event, config);
  if (typeof update === "function") {
    update = update(session.data);
  }
  if (update) {
    Object.assign(session.data, update);
  }
  if (config.cookie !== false) {
    const sealed = await sealSession(event, config);
    setCookie(event, sessionName, sealed, {
      ...DEFAULT_COOKIE,
      expires: config.maxAge ? new Date(session.createdAt + config.maxAge * 1e3) : undefined,
      ...config.cookie
    });
  }
  return session;
}
async function sealSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  const session = event.context.sessions?.[sessionName] || await getSession(event, config);
  const sealed = await seal(config.crypto || _crypto, session, config.password, {
    ...defaults,
    ttl: config.maxAge ? config.maxAge * 1e3 : 0,
    ...config.seal
  });
  return sealed;
}
async function unsealSession(_event, config, sealed) {
  const unsealed = await unseal(
    config.crypto || _crypto,
    sealed,
    config.password,
    {
      ...defaults,
      ttl: config.maxAge ? config.maxAge * 1e3 : 0,
      ...config.seal
    }
  );
  if (config.maxAge) {
    const age = Date.now() - (unsealed.createdAt || Number.NEGATIVE_INFINITY);
    if (age > config.maxAge * 1e3) {
      throw new Error("Session expired!");
    }
  }
  return unsealed;
}
function clearSession(event, config) {
  const sessionName = config.name || DEFAULT_NAME;
  if (event.context.sessions?.[sessionName]) {
    delete event.context.sessions[sessionName];
  }
  setCookie(event, sessionName, "", {
    ...DEFAULT_COOKIE,
    ...config.cookie
  });
  return Promise.resolve();
}

class H3Event {
  "__is_event__" = true;
  // Context
  node;
  // Node
  web;
  // Web
  context = {};
  // Shared
  // Request
  _method;
  _path;
  _headers;
  _requestBody;
  // Response
  _handled = false;
  // Hooks
  _onBeforeResponseCalled;
  _onAfterResponseCalled;
  constructor(req, res) {
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : undefined;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : undefined;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === undefined ? undefined : await val;
      if (_body !== undefined) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, undefined);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, undefined);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, undefined)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, undefined, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, undefined, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, undefined, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === undefined && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

const s$1=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http.Agent(agentOptions);
  const httpsAgent = new https.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch ? (...args) => globalThis.fetch(...args) : createNodeFetch();
const Headers$1 = globalThis.Headers || s$1;
const AbortController = globalThis.AbortController || i;
createFetch({ fetch, Headers: Headers$1, AbortController });

function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}

const errorHandler$0 = (async function errorhandler(error, event, { defaultHandler }) {
  if (isJsonRequest(event)) {
    return;
  }
  const defaultRes = await defaultHandler(error, event, { json: true });
  const statusCode = error.statusCode || 500;
  if (statusCode === 404 && defaultRes.status === 302) {
    setResponseHeaders(event, defaultRes.headers);
    setResponseStatus(event, defaultRes.status, defaultRes.statusText);
    return send(event, JSON.stringify(defaultRes.body, null, 2));
  }
  const errorObject = defaultRes.body;
  const url = new URL(errorObject.url);
  errorObject.url = url.pathname + url.search + url.hash;
  errorObject.message ||= "Server Error";
  delete defaultRes.headers["content-type"];
  delete defaultRes.headers["content-security-policy"];
  setResponseHeaders(event, defaultRes.headers);
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (event.handled) {
    return;
  }
  if (!res) {
    const { template } = await import('./error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : defaultRes.status, res.statusText || defaultRes.statusText);
  return send(event, html);
});

function defineNitroErrorHandler(handler) {
  return handler;
}

const errorHandler$1 = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const res = defaultHandler(error, event);
    setResponseHeaders(event, res.headers);
    setResponseStatus(event, res.status, res.statusText);
    return send(event, JSON.stringify(res.body, null, 2));
  }
);
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled || error.fatal;
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Server Error";
  const url = getRequestURL(event, { xForwardedHost: true, xForwardedProto: true });
  if (statusCode === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]", error.fatal && "[fatal]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.method}] ${url}
`, error);
  }
  const headers = {
    "content-type": "application/json",
    // Prevent browser from guessing the MIME types of resources.
    "x-content-type-options": "nosniff",
    // Prevent error page from being embedded in an iframe
    "x-frame-options": "DENY",
    // Prevent browsers from sending the Referer header
    "referrer-policy": "no-referrer",
    // Disable the execution of any js
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  setResponseStatus(event, statusCode, statusMessage);
  if (statusCode === 404 || !getResponseHeader(event, "cache-control")) {
    headers["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    statusCode,
    statusMessage,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status: statusCode,
    statusText: statusMessage,
    headers,
    body
  };
}

const errorHandlers = [errorHandler$0, errorHandler$1];

async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      await handler(error, event, { defaultHandler });
      if (event.handled) {
        return; // Response handled
      }
    } catch(error) {
      // Handler itself thrown, log and continue
      console.error(error);
    }
  }
  // H3 will handle fallback
}

const _s14Swj5WnfUC8gRIih9bsPfujB855hAsdxlz6vIHco = defineNitroPlugin$1((nitroApp) => {
  if (process.env.NUXT_OAUTH_FACEBOOK_CLIENT_ID && process.env.NUXT_OAUTH_FACEBOOK_CLIENT_SECRET || process.env.NUXT_OAUTH_INSTAGRAM_CLIENT_ID && process.env.NUXT_OAUTH_INSTAGRAM_CLIENT_SECRET) {
    nitroApp.hooks.hook("render:html", (html) => {
      html.head.unshift(`
      <script>
        if (window.location.hash === "#_=_"){
          history.replaceState
              ? history.replaceState(null, null, window.location.href.split("#")[0])
              : window.location.hash = "";
        }
      <\/script>
    `);
    });
  }
});

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {
  "nuxt": {},
  "icon": {
    "provider": "server",
    "class": "",
    "aliases": {},
    "iconifyApiEndpoint": "https://api.iconify.design",
    "localApiEndpoint": "/api/_nuxt_icon",
    "fallbackToApi": true,
    "cssSelectorPrefix": "i-",
    "cssWherePseudo": true,
    "mode": "css",
    "attrs": {
      "aria-hidden": true
    },
    "collections": [
      "academicons",
      "akar-icons",
      "ant-design",
      "arcticons",
      "basil",
      "bi",
      "bitcoin-icons",
      "bpmn",
      "brandico",
      "bx",
      "bxl",
      "bxs",
      "bytesize",
      "carbon",
      "catppuccin",
      "cbi",
      "charm",
      "ci",
      "cib",
      "cif",
      "cil",
      "circle-flags",
      "circum",
      "clarity",
      "codicon",
      "covid",
      "cryptocurrency",
      "cryptocurrency-color",
      "dashicons",
      "devicon",
      "devicon-plain",
      "ei",
      "el",
      "emojione",
      "emojione-monotone",
      "emojione-v1",
      "entypo",
      "entypo-social",
      "eos-icons",
      "ep",
      "et",
      "eva",
      "f7",
      "fa",
      "fa-brands",
      "fa-regular",
      "fa-solid",
      "fa6-brands",
      "fa6-regular",
      "fa6-solid",
      "fad",
      "fe",
      "feather",
      "file-icons",
      "flag",
      "flagpack",
      "flat-color-icons",
      "flat-ui",
      "flowbite",
      "fluent",
      "fluent-emoji",
      "fluent-emoji-flat",
      "fluent-emoji-high-contrast",
      "fluent-mdl2",
      "fontelico",
      "fontisto",
      "formkit",
      "foundation",
      "fxemoji",
      "gala",
      "game-icons",
      "geo",
      "gg",
      "gis",
      "gravity-ui",
      "gridicons",
      "grommet-icons",
      "guidance",
      "healthicons",
      "heroicons",
      "heroicons-outline",
      "heroicons-solid",
      "hugeicons",
      "humbleicons",
      "ic",
      "icomoon-free",
      "icon-park",
      "icon-park-outline",
      "icon-park-solid",
      "icon-park-twotone",
      "iconamoon",
      "iconoir",
      "icons8",
      "il",
      "ion",
      "iwwa",
      "jam",
      "la",
      "lets-icons",
      "line-md",
      "logos",
      "ls",
      "lucide",
      "lucide-lab",
      "mage",
      "majesticons",
      "maki",
      "map",
      "marketeq",
      "material-symbols",
      "material-symbols-light",
      "mdi",
      "mdi-light",
      "medical-icon",
      "memory",
      "meteocons",
      "mi",
      "mingcute",
      "mono-icons",
      "mynaui",
      "nimbus",
      "nonicons",
      "noto",
      "noto-v1",
      "octicon",
      "oi",
      "ooui",
      "openmoji",
      "oui",
      "pajamas",
      "pepicons",
      "pepicons-pencil",
      "pepicons-pop",
      "pepicons-print",
      "ph",
      "pixelarticons",
      "prime",
      "ps",
      "quill",
      "radix-icons",
      "raphael",
      "ri",
      "rivet-icons",
      "si-glyph",
      "simple-icons",
      "simple-line-icons",
      "skill-icons",
      "solar",
      "streamline",
      "streamline-emojis",
      "subway",
      "svg-spinners",
      "system-uicons",
      "tabler",
      "tdesign",
      "teenyicons",
      "token",
      "token-branded",
      "topcoat",
      "twemoji",
      "typcn",
      "uil",
      "uim",
      "uis",
      "uit",
      "uiw",
      "unjs",
      "vaadin",
      "vs",
      "vscode-icons",
      "websymbol",
      "weui",
      "whh",
      "wi",
      "wpf",
      "zmdi",
      "zondicons",
      "my-icon"
    ],
    "fetchTimeout": 1500,
    "customCollections": [
      "my-icon"
    ]
  }
};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /\{\{([^{}]*)\}\}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildId": "6f52418f-669a-4b08-a6c4-33489fa7f57b",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "primevue": {
      "usePrimeVue": true,
      "autoImport": true,
      "resolvePath": "",
      "importPT": "",
      "importTheme": "",
      "loadStyles": true,
      "options": {
        "ripple": true,
        "theme": {
          "preset": {
            "primitive": {
              "borderRadius": {
                "none": "0",
                "xs": "2px",
                "sm": "4px",
                "md": "6px",
                "lg": "8px",
                "xl": "12px"
              },
              "emerald": {
                "50": "#ecfdf5",
                "100": "#d1fae5",
                "200": "#a7f3d0",
                "300": "#6ee7b7",
                "400": "#34d399",
                "500": "#10b981",
                "600": "#059669",
                "700": "#047857",
                "800": "#065f46",
                "900": "#064e3b",
                "950": "#022c22"
              },
              "green": {
                "50": "#f0fdf4",
                "100": "#dcfce7",
                "200": "#bbf7d0",
                "300": "#86efac",
                "400": "#4ade80",
                "500": "#22c55e",
                "600": "#16a34a",
                "700": "#15803d",
                "800": "#166534",
                "900": "#14532d",
                "950": "#052e16"
              },
              "lime": {
                "50": "#f7fee7",
                "100": "#ecfccb",
                "200": "#d9f99d",
                "300": "#bef264",
                "400": "#a3e635",
                "500": "#84cc16",
                "600": "#65a30d",
                "700": "#4d7c0f",
                "800": "#3f6212",
                "900": "#365314",
                "950": "#1a2e05"
              },
              "red": {
                "50": "#fef2f2",
                "100": "#fee2e2",
                "200": "#fecaca",
                "300": "#fca5a5",
                "400": "#f87171",
                "500": "#ef4444",
                "600": "#dc2626",
                "700": "#b91c1c",
                "800": "#991b1b",
                "900": "#7f1d1d",
                "950": "#450a0a"
              },
              "orange": {
                "50": "#fff7ed",
                "100": "#ffedd5",
                "200": "#fed7aa",
                "300": "#fdba74",
                "400": "#fb923c",
                "500": "#f97316",
                "600": "#ea580c",
                "700": "#c2410c",
                "800": "#9a3412",
                "900": "#7c2d12",
                "950": "#431407"
              },
              "amber": {
                "50": "#fffbeb",
                "100": "#fef3c7",
                "200": "#fde68a",
                "300": "#fcd34d",
                "400": "#fbbf24",
                "500": "#f59e0b",
                "600": "#d97706",
                "700": "#b45309",
                "800": "#92400e",
                "900": "#78350f",
                "950": "#451a03"
              },
              "yellow": {
                "50": "#fefce8",
                "100": "#fef9c3",
                "200": "#fef08a",
                "300": "#fde047",
                "400": "#facc15",
                "500": "#eab308",
                "600": "#ca8a04",
                "700": "#a16207",
                "800": "#854d0e",
                "900": "#713f12",
                "950": "#422006"
              },
              "teal": {
                "50": "#f0fdfa",
                "100": "#ccfbf1",
                "200": "#99f6e4",
                "300": "#5eead4",
                "400": "#2dd4bf",
                "500": "#14b8a6",
                "600": "#0d9488",
                "700": "#0f766e",
                "800": "#115e59",
                "900": "#134e4a",
                "950": "#042f2e"
              },
              "cyan": {
                "50": "#ecfeff",
                "100": "#cffafe",
                "200": "#a5f3fc",
                "300": "#67e8f9",
                "400": "#22d3ee",
                "500": "#06b6d4",
                "600": "#0891b2",
                "700": "#0e7490",
                "800": "#155e75",
                "900": "#164e63",
                "950": "#083344"
              },
              "sky": {
                "50": "#f0f9ff",
                "100": "#e0f2fe",
                "200": "#bae6fd",
                "300": "#7dd3fc",
                "400": "#38bdf8",
                "500": "#0ea5e9",
                "600": "#0284c7",
                "700": "#0369a1",
                "800": "#075985",
                "900": "#0c4a6e",
                "950": "#082f49"
              },
              "blue": {
                "50": "#eff6ff",
                "100": "#dbeafe",
                "200": "#bfdbfe",
                "300": "#93c5fd",
                "400": "#60a5fa",
                "500": "#3b82f6",
                "600": "#2563eb",
                "700": "#1d4ed8",
                "800": "#1e40af",
                "900": "#1e3a8a",
                "950": "#172554"
              },
              "indigo": {
                "50": "#eef2ff",
                "100": "#e0e7ff",
                "200": "#c7d2fe",
                "300": "#a5b4fc",
                "400": "#818cf8",
                "500": "#6366f1",
                "600": "#4f46e5",
                "700": "#4338ca",
                "800": "#3730a3",
                "900": "#312e81",
                "950": "#1e1b4b"
              },
              "violet": {
                "50": "#f5f3ff",
                "100": "#ede9fe",
                "200": "#ddd6fe",
                "300": "#c4b5fd",
                "400": "#a78bfa",
                "500": "#8b5cf6",
                "600": "#7c3aed",
                "700": "#6d28d9",
                "800": "#5b21b6",
                "900": "#4c1d95",
                "950": "#2e1065"
              },
              "purple": {
                "50": "#faf5ff",
                "100": "#f3e8ff",
                "200": "#e9d5ff",
                "300": "#d8b4fe",
                "400": "#c084fc",
                "500": "#a855f7",
                "600": "#9333ea",
                "700": "#7e22ce",
                "800": "#6b21a8",
                "900": "#581c87",
                "950": "#3b0764"
              },
              "fuchsia": {
                "50": "#fdf4ff",
                "100": "#fae8ff",
                "200": "#f5d0fe",
                "300": "#f0abfc",
                "400": "#e879f9",
                "500": "#d946ef",
                "600": "#c026d3",
                "700": "#a21caf",
                "800": "#86198f",
                "900": "#701a75",
                "950": "#4a044e"
              },
              "pink": {
                "50": "#fdf2f8",
                "100": "#fce7f3",
                "200": "#fbcfe8",
                "300": "#f9a8d4",
                "400": "#f472b6",
                "500": "#ec4899",
                "600": "#db2777",
                "700": "#be185d",
                "800": "#9d174d",
                "900": "#831843",
                "950": "#500724"
              },
              "rose": {
                "50": "#fff1f2",
                "100": "#ffe4e6",
                "200": "#fecdd3",
                "300": "#fda4af",
                "400": "#fb7185",
                "500": "#f43f5e",
                "600": "#e11d48",
                "700": "#be123c",
                "800": "#9f1239",
                "900": "#881337",
                "950": "#4c0519"
              },
              "slate": {
                "50": "#f8fafc",
                "100": "#f1f5f9",
                "200": "#e2e8f0",
                "300": "#cbd5e1",
                "400": "#94a3b8",
                "500": "#64748b",
                "600": "#475569",
                "700": "#334155",
                "800": "#1e293b",
                "900": "#0f172a",
                "950": "#020617"
              },
              "gray": {
                "50": "#f9fafb",
                "100": "#f3f4f6",
                "200": "#e5e7eb",
                "300": "#d1d5db",
                "400": "#9ca3af",
                "500": "#6b7280",
                "600": "#4b5563",
                "700": "#374151",
                "800": "#1f2937",
                "900": "#111827",
                "950": "#030712"
              },
              "zinc": {
                "50": "#fafafa",
                "100": "#f4f4f5",
                "200": "#e4e4e7",
                "300": "#d4d4d8",
                "400": "#a1a1aa",
                "500": "#71717a",
                "600": "#52525b",
                "700": "#3f3f46",
                "800": "#27272a",
                "900": "#18181b",
                "950": "#09090b"
              },
              "neutral": {
                "50": "#fafafa",
                "100": "#f5f5f5",
                "200": "#e5e5e5",
                "300": "#d4d4d4",
                "400": "#a3a3a3",
                "500": "#737373",
                "600": "#525252",
                "700": "#404040",
                "800": "#262626",
                "900": "#171717",
                "950": "#0a0a0a"
              },
              "stone": {
                "50": "#fafaf9",
                "100": "#f5f5f4",
                "200": "#e7e5e4",
                "300": "#d6d3d1",
                "400": "#a8a29e",
                "500": "#78716c",
                "600": "#57534e",
                "700": "#44403c",
                "800": "#292524",
                "900": "#1c1917",
                "950": "#0c0a09"
              }
            },
            "semantic": {
              "transitionDuration": "0.2s",
              "focusRing": {
                "width": "1px",
                "style": "solid",
                "color": "{primary.color}",
                "offset": "2px",
                "shadow": "none"
              },
              "disabledOpacity": "0.6",
              "iconSize": "1rem",
              "anchorGutter": "2px",
              "primary": {
                "50": "{indigo.50}",
                "100": "{indigo.100}",
                "200": "{indigo.200}",
                "300": "{indigo.300}",
                "400": "{indigo.400}",
                "500": "{indigo.500}",
                "600": "{indigo.600}",
                "700": "{indigo.700}",
                "800": "{indigo.800}",
                "900": "{indigo.900}",
                "950": "{indigo.950}"
              },
              "formField": {
                "paddingX": "0.75rem",
                "paddingY": "0.5rem",
                "sm": {
                  "fontSize": "0.875rem",
                  "paddingX": "0.625rem",
                  "paddingY": "0.375rem"
                },
                "lg": {
                  "fontSize": "1.125rem",
                  "paddingX": "0.875rem",
                  "paddingY": "0.625rem"
                },
                "borderRadius": "{border.radius.md}",
                "focusRing": {
                  "width": "0",
                  "style": "none",
                  "color": "transparent",
                  "offset": "0",
                  "shadow": "none"
                },
                "transitionDuration": "{transition.duration}"
              },
              "list": {
                "padding": "0.25rem 0.25rem",
                "gap": "2px",
                "header": {
                  "padding": "0.5rem 1rem 0.25rem 1rem"
                },
                "option": {
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{border.radius.sm}"
                },
                "optionGroup": {
                  "padding": "0.5rem 0.75rem",
                  "fontWeight": "600"
                }
              },
              "content": {
                "borderRadius": "{border.radius.md}"
              },
              "mask": {
                "transitionDuration": "0.15s"
              },
              "navigation": {
                "list": {
                  "padding": "0.25rem 0.25rem",
                  "gap": "2px"
                },
                "item": {
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{border.radius.sm}",
                  "gap": "0.5rem"
                },
                "submenuLabel": {
                  "padding": "0.5rem 0.75rem",
                  "fontWeight": "600"
                },
                "submenuIcon": {
                  "size": "0.875rem"
                }
              },
              "overlay": {
                "select": {
                  "borderRadius": "{border.radius.md}",
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                },
                "popover": {
                  "borderRadius": "{border.radius.md}",
                  "padding": "0.75rem",
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                },
                "modal": {
                  "borderRadius": "{border.radius.xl}",
                  "padding": "1.25rem",
                  "shadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                },
                "navigation": {
                  "shadow": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
                }
              },
              "colorScheme": {
                "light": {
                  "surface": {
                    "0": "#ffffff",
                    "50": "{slate.50}",
                    "100": "{slate.100}",
                    "200": "{slate.200}",
                    "300": "{slate.300}",
                    "400": "{slate.400}",
                    "500": "{slate.500}",
                    "600": "{slate.600}",
                    "700": "{slate.700}",
                    "800": "{slate.800}",
                    "900": "{slate.900}",
                    "950": "{slate.950}"
                  },
                  "primary": {
                    "color": "{primary.500}",
                    "contrastColor": "#ffffff",
                    "hoverColor": "{primary.600}",
                    "activeColor": "{primary.700}"
                  },
                  "highlight": {
                    "background": "{primary.50}",
                    "focusBackground": "{primary.100}",
                    "color": "{primary.700}",
                    "focusColor": "{primary.800}"
                  },
                  "mask": {
                    "background": "rgba(0,0,0,0.4)",
                    "color": "{surface.200}"
                  },
                  "formField": {
                    "background": "{surface.0}",
                    "disabledBackground": "{surface.200}",
                    "filledBackground": "{surface.50}",
                    "filledHoverBackground": "{surface.50}",
                    "filledFocusBackground": "{surface.50}",
                    "borderColor": "{surface.300}",
                    "hoverBorderColor": "{surface.400}",
                    "focusBorderColor": "{primary.color}",
                    "invalidBorderColor": "{red.400}",
                    "color": "{surface.700}",
                    "disabledColor": "{surface.500}",
                    "placeholderColor": "{surface.500}",
                    "invalidPlaceholderColor": "{red.600}",
                    "floatLabelColor": "{surface.500}",
                    "floatLabelFocusColor": "{primary.600}",
                    "floatLabelActiveColor": "{surface.500}",
                    "floatLabelInvalidColor": "{form.field.invalid.placeholder.color}",
                    "iconColor": "{surface.400}",
                    "shadow": "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
                  },
                  "text": {
                    "color": "{surface.700}",
                    "hoverColor": "{surface.800}",
                    "mutedColor": "{surface.500}",
                    "hoverMutedColor": "{surface.600}"
                  },
                  "content": {
                    "background": "{surface.0}",
                    "hoverBackground": "{surface.100}",
                    "borderColor": "{surface.200}",
                    "color": "{text.color}",
                    "hoverColor": "{text.hover.color}"
                  },
                  "overlay": {
                    "select": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.200}",
                      "color": "{text.color}"
                    },
                    "popover": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.200}",
                      "color": "{text.color}"
                    },
                    "modal": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.200}",
                      "color": "{text.color}"
                    }
                  },
                  "list": {
                    "option": {
                      "focusBackground": "{surface.100}",
                      "selectedBackground": "{highlight.background}",
                      "selectedFocusBackground": "{highlight.focus.background}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "selectedColor": "{highlight.color}",
                      "selectedFocusColor": "{highlight.focus.color}",
                      "icon": {
                        "color": "{surface.400}",
                        "focusColor": "{surface.500}"
                      }
                    },
                    "optionGroup": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    }
                  },
                  "navigation": {
                    "item": {
                      "focusBackground": "{surface.100}",
                      "activeBackground": "{surface.100}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "activeColor": "{text.hover.color}",
                      "icon": {
                        "color": "{surface.400}",
                        "focusColor": "{surface.500}",
                        "activeColor": "{surface.500}"
                      }
                    },
                    "submenuLabel": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    },
                    "submenuIcon": {
                      "color": "{surface.400}",
                      "focusColor": "{surface.500}",
                      "activeColor": "{surface.500}"
                    }
                  }
                },
                "dark": {
                  "surface": {
                    "0": "#ffffff",
                    "50": "{zinc.50}",
                    "100": "{zinc.100}",
                    "200": "{zinc.200}",
                    "300": "{zinc.300}",
                    "400": "{zinc.400}",
                    "500": "{zinc.500}",
                    "600": "{zinc.600}",
                    "700": "{zinc.700}",
                    "800": "{zinc.800}",
                    "900": "{zinc.900}",
                    "950": "{zinc.950}"
                  },
                  "primary": {
                    "color": "{primary.400}",
                    "contrastColor": "{surface.900}",
                    "hoverColor": "{primary.300}",
                    "activeColor": "{primary.200}"
                  },
                  "highlight": {
                    "background": "color-mix(in srgb, {primary.400}, transparent 84%)",
                    "focusBackground": "color-mix(in srgb, {primary.400}, transparent 76%)",
                    "color": "rgba(255,255,255,.87)",
                    "focusColor": "rgba(255,255,255,.87)"
                  },
                  "mask": {
                    "background": "rgba(0,0,0,0.6)",
                    "color": "{surface.200}"
                  },
                  "formField": {
                    "background": "{surface.950}",
                    "disabledBackground": "{surface.700}",
                    "filledBackground": "{surface.800}",
                    "filledHoverBackground": "{surface.800}",
                    "filledFocusBackground": "{surface.800}",
                    "borderColor": "{surface.600}",
                    "hoverBorderColor": "{surface.500}",
                    "focusBorderColor": "{primary.color}",
                    "invalidBorderColor": "{red.300}",
                    "color": "{surface.0}",
                    "disabledColor": "{surface.400}",
                    "placeholderColor": "{surface.400}",
                    "invalidPlaceholderColor": "{red.400}",
                    "floatLabelColor": "{surface.400}",
                    "floatLabelFocusColor": "{primary.color}",
                    "floatLabelActiveColor": "{surface.400}",
                    "floatLabelInvalidColor": "{form.field.invalid.placeholder.color}",
                    "iconColor": "{surface.400}",
                    "shadow": "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
                  },
                  "text": {
                    "color": "{surface.0}",
                    "hoverColor": "{surface.0}",
                    "mutedColor": "{surface.400}",
                    "hoverMutedColor": "{surface.300}"
                  },
                  "content": {
                    "background": "{surface.900}",
                    "hoverBackground": "{surface.800}",
                    "borderColor": "{surface.700}",
                    "color": "{text.color}",
                    "hoverColor": "{text.hover.color}"
                  },
                  "overlay": {
                    "select": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}",
                      "color": "{text.color}"
                    },
                    "popover": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}",
                      "color": "{text.color}"
                    },
                    "modal": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}",
                      "color": "{text.color}"
                    }
                  },
                  "list": {
                    "option": {
                      "focusBackground": "{surface.800}",
                      "selectedBackground": "{highlight.background}",
                      "selectedFocusBackground": "{highlight.focus.background}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "selectedColor": "{highlight.color}",
                      "selectedFocusColor": "{highlight.focus.color}",
                      "icon": {
                        "color": "{surface.500}",
                        "focusColor": "{surface.400}"
                      }
                    },
                    "optionGroup": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    }
                  },
                  "navigation": {
                    "item": {
                      "focusBackground": "{surface.800}",
                      "activeBackground": "{surface.800}",
                      "color": "{text.color}",
                      "focusColor": "{text.hover.color}",
                      "activeColor": "{text.hover.color}",
                      "icon": {
                        "color": "{surface.500}",
                        "focusColor": "{surface.400}",
                        "activeColor": "{surface.400}"
                      }
                    },
                    "submenuLabel": {
                      "background": "transparent",
                      "color": "{text.muted.color}"
                    },
                    "submenuIcon": {
                      "color": "{surface.500}",
                      "focusColor": "{surface.400}",
                      "activeColor": "{surface.400}"
                    }
                  }
                }
              }
            },
            "components": {
              "accordion": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}"
                },
                "header": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{text.color}",
                  "padding": "1.125rem",
                  "fontWeight": "600",
                  "borderRadius": "0",
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}",
                  "background": "{content.background}",
                  "hoverBackground": "{content.background}",
                  "activeBackground": "{content.background}",
                  "activeHoverBackground": "{content.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "toggleIcon": {
                    "color": "{text.muted.color}",
                    "hoverColor": "{text.color}",
                    "activeColor": "{text.color}",
                    "activeHoverColor": "{text.color}"
                  },
                  "first": {
                    "topBorderRadius": "{content.border.radius}",
                    "borderWidth": "0"
                  },
                  "last": {
                    "bottomBorderRadius": "{content.border.radius}",
                    "activeBottomBorderRadius": "0"
                  }
                },
                "content": {
                  "borderWidth": "0",
                  "borderColor": "{content.border.color}",
                  "background": "{content.background}",
                  "color": "{text.color}",
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                }
              },
              "autocomplete": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}"
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "sm": {
                    "width": "2rem"
                  },
                  "lg": {
                    "width": "3rem"
                  },
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "colorScheme": {
                  "light": {
                    "chip": {
                      "focusBackground": "{surface.200}",
                      "focusColor": "{surface.800}"
                    },
                    "dropdown": {
                      "background": "{surface.100}",
                      "hoverBackground": "{surface.200}",
                      "activeBackground": "{surface.300}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}",
                      "activeColor": "{surface.800}"
                    }
                  },
                  "dark": {
                    "chip": {
                      "focusBackground": "{surface.700}",
                      "focusColor": "{surface.0}"
                    },
                    "dropdown": {
                      "background": "{surface.800}",
                      "hoverBackground": "{surface.700}",
                      "activeBackground": "{surface.600}",
                      "color": "{surface.300}",
                      "hoverColor": "{surface.200}",
                      "activeColor": "{surface.100}"
                    }
                  }
                }
              },
              "avatar": {
                "root": {
                  "width": "2rem",
                  "height": "2rem",
                  "fontSize": "1rem",
                  "background": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "icon": {
                  "size": "1rem"
                },
                "group": {
                  "borderColor": "{content.background}",
                  "offset": "-0.75rem"
                },
                "lg": {
                  "width": "3rem",
                  "height": "3rem",
                  "fontSize": "1.5rem",
                  "icon": {
                    "size": "1.5rem"
                  },
                  "group": {
                    "offset": "-1rem"
                  }
                },
                "xl": {
                  "width": "4rem",
                  "height": "4rem",
                  "fontSize": "2rem",
                  "icon": {
                    "size": "2rem"
                  },
                  "group": {
                    "offset": "-1.5rem"
                  }
                }
              },
              "badge": {
                "root": {
                  "borderRadius": "{border.radius.md}",
                  "padding": "0 0.5rem",
                  "fontSize": "0.75rem",
                  "fontWeight": "700",
                  "minWidth": "1.5rem",
                  "height": "1.5rem"
                },
                "dot": {
                  "size": "0.5rem"
                },
                "sm": {
                  "fontSize": "0.625rem",
                  "minWidth": "1.25rem",
                  "height": "1.25rem"
                },
                "lg": {
                  "fontSize": "0.875rem",
                  "minWidth": "1.75rem",
                  "height": "1.75rem"
                },
                "xl": {
                  "fontSize": "1rem",
                  "minWidth": "2rem",
                  "height": "2rem"
                },
                "colorScheme": {
                  "light": {
                    "primary": {
                      "background": "{primary.color}",
                      "color": "{primary.contrast.color}"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "color": "{surface.600}"
                    },
                    "success": {
                      "background": "{green.500}",
                      "color": "{surface.0}"
                    },
                    "info": {
                      "background": "{sky.500}",
                      "color": "{surface.0}"
                    },
                    "warn": {
                      "background": "{orange.500}",
                      "color": "{surface.0}"
                    },
                    "danger": {
                      "background": "{red.500}",
                      "color": "{surface.0}"
                    },
                    "contrast": {
                      "background": "{surface.950}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "primary": {
                      "background": "{primary.color}",
                      "color": "{primary.contrast.color}"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "color": "{surface.300}"
                    },
                    "success": {
                      "background": "{green.400}",
                      "color": "{green.950}"
                    },
                    "info": {
                      "background": "{sky.400}",
                      "color": "{sky.950}"
                    },
                    "warn": {
                      "background": "{orange.400}",
                      "color": "{orange.950}"
                    },
                    "danger": {
                      "background": "{red.400}",
                      "color": "{red.950}"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "color": "{surface.950}"
                    }
                  }
                }
              },
              "blockui": {
                "root": {
                  "borderRadius": "{content.border.radius}"
                }
              },
              "breadcrumb": {
                "root": {
                  "padding": "1rem",
                  "background": "{content.background}",
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "item": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "hoverColor": "{navigation.item.icon.focus.color}"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "separator": {
                  "color": "{navigation.item.icon.color}"
                }
              },
              "button": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "roundedBorderRadius": "2rem",
                  "gap": "0.5rem",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "iconOnlyWidth": "2.5rem",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}",
                    "iconOnlyWidth": "2rem"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}",
                    "iconOnlyWidth": "3rem"
                  },
                  "label": {
                    "fontWeight": "500"
                  },
                  "raisedShadow": "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  },
                  "badgeSize": "1rem",
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "primary": {
                        "background": "{primary.color}",
                        "hoverBackground": "{primary.hover.color}",
                        "activeBackground": "{primary.active.color}",
                        "borderColor": "{primary.color}",
                        "hoverBorderColor": "{primary.hover.color}",
                        "activeBorderColor": "{primary.active.color}",
                        "color": "{primary.contrast.color}",
                        "hoverColor": "{primary.contrast.color}",
                        "activeColor": "{primary.contrast.color}",
                        "focusRing": {
                          "color": "{primary.color}",
                          "shadow": "none"
                        }
                      },
                      "secondary": {
                        "background": "{surface.100}",
                        "hoverBackground": "{surface.200}",
                        "activeBackground": "{surface.300}",
                        "borderColor": "{surface.100}",
                        "hoverBorderColor": "{surface.200}",
                        "activeBorderColor": "{surface.300}",
                        "color": "{surface.600}",
                        "hoverColor": "{surface.700}",
                        "activeColor": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      },
                      "info": {
                        "background": "{sky.500}",
                        "hoverBackground": "{sky.600}",
                        "activeBackground": "{sky.700}",
                        "borderColor": "{sky.500}",
                        "hoverBorderColor": "{sky.600}",
                        "activeBorderColor": "{sky.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{sky.500}",
                          "shadow": "none"
                        }
                      },
                      "success": {
                        "background": "{green.500}",
                        "hoverBackground": "{green.600}",
                        "activeBackground": "{green.700}",
                        "borderColor": "{green.500}",
                        "hoverBorderColor": "{green.600}",
                        "activeBorderColor": "{green.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      },
                      "warn": {
                        "background": "{orange.500}",
                        "hoverBackground": "{orange.600}",
                        "activeBackground": "{orange.700}",
                        "borderColor": "{orange.500}",
                        "hoverBorderColor": "{orange.600}",
                        "activeBorderColor": "{orange.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{orange.500}",
                          "shadow": "none"
                        }
                      },
                      "help": {
                        "background": "{purple.500}",
                        "hoverBackground": "{purple.600}",
                        "activeBackground": "{purple.700}",
                        "borderColor": "{purple.500}",
                        "hoverBorderColor": "{purple.600}",
                        "activeBorderColor": "{purple.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{purple.500}",
                          "shadow": "none"
                        }
                      },
                      "danger": {
                        "background": "{red.500}",
                        "hoverBackground": "{red.600}",
                        "activeBackground": "{red.700}",
                        "borderColor": "{red.500}",
                        "hoverBorderColor": "{red.600}",
                        "activeBorderColor": "{red.700}",
                        "color": "#ffffff",
                        "hoverColor": "#ffffff",
                        "activeColor": "#ffffff",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      },
                      "contrast": {
                        "background": "{surface.950}",
                        "hoverBackground": "{surface.900}",
                        "activeBackground": "{surface.800}",
                        "borderColor": "{surface.950}",
                        "hoverBorderColor": "{surface.900}",
                        "activeBorderColor": "{surface.800}",
                        "color": "{surface.0}",
                        "hoverColor": "{surface.0}",
                        "activeColor": "{surface.0}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      }
                    },
                    "outlined": {
                      "primary": {
                        "hoverBackground": "{primary.50}",
                        "activeBackground": "{primary.100}",
                        "borderColor": "{primary.200}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.200}",
                        "color": "{surface.500}"
                      },
                      "success": {
                        "hoverBackground": "{green.50}",
                        "activeBackground": "{green.100}",
                        "borderColor": "{green.200}",
                        "color": "{green.500}"
                      },
                      "info": {
                        "hoverBackground": "{sky.50}",
                        "activeBackground": "{sky.100}",
                        "borderColor": "{sky.200}",
                        "color": "{sky.500}"
                      },
                      "warn": {
                        "hoverBackground": "{orange.50}",
                        "activeBackground": "{orange.100}",
                        "borderColor": "{orange.200}",
                        "color": "{orange.500}"
                      },
                      "help": {
                        "hoverBackground": "{purple.50}",
                        "activeBackground": "{purple.100}",
                        "borderColor": "{purple.200}",
                        "color": "{purple.500}"
                      },
                      "danger": {
                        "hoverBackground": "{red.50}",
                        "activeBackground": "{red.100}",
                        "borderColor": "{red.200}",
                        "color": "{red.500}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.700}",
                        "color": "{surface.950}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "borderColor": "{surface.200}",
                        "color": "{surface.700}"
                      }
                    },
                    "text": {
                      "primary": {
                        "hoverBackground": "{primary.50}",
                        "activeBackground": "{primary.100}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.500}"
                      },
                      "success": {
                        "hoverBackground": "{green.50}",
                        "activeBackground": "{green.100}",
                        "color": "{green.500}"
                      },
                      "info": {
                        "hoverBackground": "{sky.50}",
                        "activeBackground": "{sky.100}",
                        "color": "{sky.500}"
                      },
                      "warn": {
                        "hoverBackground": "{orange.50}",
                        "activeBackground": "{orange.100}",
                        "color": "{orange.500}"
                      },
                      "help": {
                        "hoverBackground": "{purple.50}",
                        "activeBackground": "{purple.100}",
                        "color": "{purple.500}"
                      },
                      "danger": {
                        "hoverBackground": "{red.50}",
                        "activeBackground": "{red.100}",
                        "color": "{red.500}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.950}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.50}",
                        "activeBackground": "{surface.100}",
                        "color": "{surface.700}"
                      }
                    },
                    "link": {
                      "color": "{primary.color}",
                      "hoverColor": "{primary.color}",
                      "activeColor": "{primary.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "primary": {
                        "background": "{primary.color}",
                        "hoverBackground": "{primary.hover.color}",
                        "activeBackground": "{primary.active.color}",
                        "borderColor": "{primary.color}",
                        "hoverBorderColor": "{primary.hover.color}",
                        "activeBorderColor": "{primary.active.color}",
                        "color": "{primary.contrast.color}",
                        "hoverColor": "{primary.contrast.color}",
                        "activeColor": "{primary.contrast.color}",
                        "focusRing": {
                          "color": "{primary.color}",
                          "shadow": "none"
                        }
                      },
                      "secondary": {
                        "background": "{surface.800}",
                        "hoverBackground": "{surface.700}",
                        "activeBackground": "{surface.600}",
                        "borderColor": "{surface.800}",
                        "hoverBorderColor": "{surface.700}",
                        "activeBorderColor": "{surface.600}",
                        "color": "{surface.300}",
                        "hoverColor": "{surface.200}",
                        "activeColor": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      },
                      "info": {
                        "background": "{sky.400}",
                        "hoverBackground": "{sky.300}",
                        "activeBackground": "{sky.200}",
                        "borderColor": "{sky.400}",
                        "hoverBorderColor": "{sky.300}",
                        "activeBorderColor": "{sky.200}",
                        "color": "{sky.950}",
                        "hoverColor": "{sky.950}",
                        "activeColor": "{sky.950}",
                        "focusRing": {
                          "color": "{sky.400}",
                          "shadow": "none"
                        }
                      },
                      "success": {
                        "background": "{green.400}",
                        "hoverBackground": "{green.300}",
                        "activeBackground": "{green.200}",
                        "borderColor": "{green.400}",
                        "hoverBorderColor": "{green.300}",
                        "activeBorderColor": "{green.200}",
                        "color": "{green.950}",
                        "hoverColor": "{green.950}",
                        "activeColor": "{green.950}",
                        "focusRing": {
                          "color": "{green.400}",
                          "shadow": "none"
                        }
                      },
                      "warn": {
                        "background": "{orange.400}",
                        "hoverBackground": "{orange.300}",
                        "activeBackground": "{orange.200}",
                        "borderColor": "{orange.400}",
                        "hoverBorderColor": "{orange.300}",
                        "activeBorderColor": "{orange.200}",
                        "color": "{orange.950}",
                        "hoverColor": "{orange.950}",
                        "activeColor": "{orange.950}",
                        "focusRing": {
                          "color": "{orange.400}",
                          "shadow": "none"
                        }
                      },
                      "help": {
                        "background": "{purple.400}",
                        "hoverBackground": "{purple.300}",
                        "activeBackground": "{purple.200}",
                        "borderColor": "{purple.400}",
                        "hoverBorderColor": "{purple.300}",
                        "activeBorderColor": "{purple.200}",
                        "color": "{purple.950}",
                        "hoverColor": "{purple.950}",
                        "activeColor": "{purple.950}",
                        "focusRing": {
                          "color": "{purple.400}",
                          "shadow": "none"
                        }
                      },
                      "danger": {
                        "background": "{red.400}",
                        "hoverBackground": "{red.300}",
                        "activeBackground": "{red.200}",
                        "borderColor": "{red.400}",
                        "hoverBorderColor": "{red.300}",
                        "activeBorderColor": "{red.200}",
                        "color": "{red.950}",
                        "hoverColor": "{red.950}",
                        "activeColor": "{red.950}",
                        "focusRing": {
                          "color": "{red.400}",
                          "shadow": "none"
                        }
                      },
                      "contrast": {
                        "background": "{surface.0}",
                        "hoverBackground": "{surface.100}",
                        "activeBackground": "{surface.200}",
                        "borderColor": "{surface.0}",
                        "hoverBorderColor": "{surface.100}",
                        "activeBorderColor": "{surface.200}",
                        "color": "{surface.950}",
                        "hoverColor": "{surface.950}",
                        "activeColor": "{surface.950}",
                        "focusRing": {
                          "color": "{surface.0}",
                          "shadow": "none"
                        }
                      }
                    },
                    "outlined": {
                      "primary": {
                        "hoverBackground": "color-mix(in srgb, {primary.color}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {primary.color}, transparent 84%)",
                        "borderColor": "{primary.700}",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "rgba(255,255,255,0.04)",
                        "activeBackground": "rgba(255,255,255,0.16)",
                        "borderColor": "{surface.700}",
                        "color": "{surface.400}"
                      },
                      "success": {
                        "hoverBackground": "color-mix(in srgb, {green.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {green.400}, transparent 84%)",
                        "borderColor": "{green.700}",
                        "color": "{green.400}"
                      },
                      "info": {
                        "hoverBackground": "color-mix(in srgb, {sky.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {sky.400}, transparent 84%)",
                        "borderColor": "{sky.700}",
                        "color": "{sky.400}"
                      },
                      "warn": {
                        "hoverBackground": "color-mix(in srgb, {orange.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {orange.400}, transparent 84%)",
                        "borderColor": "{orange.700}",
                        "color": "{orange.400}"
                      },
                      "help": {
                        "hoverBackground": "color-mix(in srgb, {purple.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {purple.400}, transparent 84%)",
                        "borderColor": "{purple.700}",
                        "color": "{purple.400}"
                      },
                      "danger": {
                        "hoverBackground": "color-mix(in srgb, {red.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {red.400}, transparent 84%)",
                        "borderColor": "{red.700}",
                        "color": "{red.400}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "borderColor": "{surface.500}",
                        "color": "{surface.0}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "borderColor": "{surface.600}",
                        "color": "{surface.0}"
                      }
                    },
                    "text": {
                      "primary": {
                        "hoverBackground": "color-mix(in srgb, {primary.color}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {primary.color}, transparent 84%)",
                        "color": "{primary.color}"
                      },
                      "secondary": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.400}"
                      },
                      "success": {
                        "hoverBackground": "color-mix(in srgb, {green.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {green.400}, transparent 84%)",
                        "color": "{green.400}"
                      },
                      "info": {
                        "hoverBackground": "color-mix(in srgb, {sky.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {sky.400}, transparent 84%)",
                        "color": "{sky.400}"
                      },
                      "warn": {
                        "hoverBackground": "color-mix(in srgb, {orange.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {orange.400}, transparent 84%)",
                        "color": "{orange.400}"
                      },
                      "help": {
                        "hoverBackground": "color-mix(in srgb, {purple.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {purple.400}, transparent 84%)",
                        "color": "{purple.400}"
                      },
                      "danger": {
                        "hoverBackground": "color-mix(in srgb, {red.400}, transparent 96%)",
                        "activeBackground": "color-mix(in srgb, {red.400}, transparent 84%)",
                        "color": "{red.400}"
                      },
                      "contrast": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.0}"
                      },
                      "plain": {
                        "hoverBackground": "{surface.800}",
                        "activeBackground": "{surface.700}",
                        "color": "{surface.0}"
                      }
                    },
                    "link": {
                      "color": "{primary.color}",
                      "hoverColor": "{primary.color}",
                      "activeColor": "{primary.color}"
                    }
                  }
                }
              },
              "card": {
                "root": {
                  "background": "{content.background}",
                  "borderRadius": "{border.radius.xl}",
                  "color": "{content.color}",
                  "shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
                },
                "body": {
                  "padding": "1.25rem",
                  "gap": "0.5rem"
                },
                "caption": {
                  "gap": "0.5rem"
                },
                "title": {
                  "fontSize": "1.25rem",
                  "fontWeight": "500"
                },
                "subtitle": {
                  "color": "{text.muted.color}"
                }
              },
              "carousel": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "content": {
                  "gap": "0.25rem"
                },
                "indicatorList": {
                  "padding": "1rem",
                  "gap": "0.5rem"
                },
                "indicator": {
                  "width": "2rem",
                  "height": "0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "indicator": {
                      "background": "{surface.200}",
                      "hoverBackground": "{surface.300}",
                      "activeBackground": "{primary.color}"
                    }
                  },
                  "dark": {
                    "indicator": {
                      "background": "{surface.700}",
                      "hoverBackground": "{surface.600}",
                      "activeBackground": "{primary.color}"
                    }
                  }
                }
              },
              "cascadeselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "mobileIndent": "1rem"
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "icon": {
                    "color": "{list.option.icon.color}",
                    "focusColor": "{list.option.icon.focus.color}",
                    "size": "0.875rem"
                  }
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "checkbox": {
                "root": {
                  "borderRadius": "{border.radius.sm}",
                  "width": "1.25rem",
                  "height": "1.25rem",
                  "background": "{form.field.background}",
                  "checkedBackground": "{primary.color}",
                  "checkedHoverBackground": "{primary.hover.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.border.color}",
                  "checkedBorderColor": "{primary.color}",
                  "checkedHoverBorderColor": "{primary.hover.color}",
                  "checkedFocusBorderColor": "{primary.color}",
                  "checkedDisabledBorderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "width": "1rem",
                    "height": "1rem"
                  },
                  "lg": {
                    "width": "1.5rem",
                    "height": "1.5rem"
                  }
                },
                "icon": {
                  "size": "0.875rem",
                  "color": "{form.field.color}",
                  "checkedColor": "{primary.contrast.color}",
                  "checkedHoverColor": "{primary.contrast.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "sm": {
                    "size": "0.75rem"
                  },
                  "lg": {
                    "size": "1rem"
                  }
                }
              },
              "chip": {
                "root": {
                  "borderRadius": "16px",
                  "paddingX": "0.75rem",
                  "paddingY": "0.5rem",
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "image": {
                  "width": "2rem",
                  "height": "2rem"
                },
                "icon": {
                  "size": "1rem"
                },
                "removeIcon": {
                  "size": "1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.100}",
                      "color": "{surface.800}"
                    },
                    "icon": {
                      "color": "{surface.800}"
                    },
                    "removeIcon": {
                      "color": "{surface.800}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.800}",
                      "color": "{surface.0}"
                    },
                    "icon": {
                      "color": "{surface.0}"
                    },
                    "removeIcon": {
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "colorpicker": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "preview": {
                  "width": "1.5rem",
                  "height": "1.5rem",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "panel": {
                  "shadow": "{overlay.popover.shadow}",
                  "borderRadius": "{overlay.popover.borderRadius}"
                },
                "colorScheme": {
                  "light": {
                    "panel": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.900}"
                    },
                    "handle": {
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "panel": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.700}"
                    },
                    "handle": {
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "confirmdialog": {
                "icon": {
                  "size": "2rem",
                  "color": "{overlay.modal.color}"
                },
                "content": {
                  "gap": "1rem"
                }
              },
              "confirmpopup": {
                "root": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "color": "{overlay.popover.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "gutter": "10px",
                  "arrowOffset": "1.25rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}",
                  "gap": "1rem"
                },
                "icon": {
                  "size": "1.5rem",
                  "color": "{overlay.popover.color}"
                },
                "footer": {
                  "gap": "0.5rem",
                  "padding": "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
                }
              },
              "contextmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenu": {
                  "mobileIndent": "1rem"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "datatable": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem",
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "headerCell": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem 1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "columnTitle": {
                  "fontWeight": "600"
                },
                "row": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "bodyCell": {
                  "borderColor": "{datatable.border.color}",
                  "padding": "0.75rem 1rem",
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "footerCell": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "padding": "0.75rem 1rem",
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "columnFooter": {
                  "fontWeight": "600"
                },
                "footer": {
                  "background": "{content.background}",
                  "borderColor": "{datatable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem",
                  "sm": {
                    "padding": "0.375rem 0.5rem"
                  },
                  "lg": {
                    "padding": "1rem 1.25rem"
                  }
                },
                "dropPoint": {
                  "color": "{primary.color}"
                },
                "columnResizer": {
                  "width": "0.5rem"
                },
                "resizeIndicator": {
                  "width": "1px",
                  "color": "{primary.color}"
                },
                "sortIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "size": "0.875rem"
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "rowToggleButton": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "selectedHoverColor": "{primary.color}",
                  "size": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "filter": {
                  "inlineGap": "0.5rem",
                  "overlaySelect": {
                    "background": "{overlay.select.background}",
                    "borderColor": "{overlay.select.border.color}",
                    "borderRadius": "{overlay.select.border.radius}",
                    "color": "{overlay.select.color}",
                    "shadow": "{overlay.select.shadow}"
                  },
                  "overlayPopover": {
                    "background": "{overlay.popover.background}",
                    "borderColor": "{overlay.popover.border.color}",
                    "borderRadius": "{overlay.popover.border.radius}",
                    "color": "{overlay.popover.color}",
                    "shadow": "{overlay.popover.shadow}",
                    "padding": "{overlay.popover.padding}",
                    "gap": "0.5rem"
                  },
                  "rule": {
                    "borderColor": "{content.border.color}"
                  },
                  "constraintList": {
                    "padding": "{list.padding}",
                    "gap": "{list.gap}"
                  },
                  "constraint": {
                    "focusBackground": "{list.option.focus.background}",
                    "selectedBackground": "{list.option.selected.background}",
                    "selectedFocusBackground": "{list.option.selected.focus.background}",
                    "color": "{list.option.color}",
                    "focusColor": "{list.option.focus.color}",
                    "selectedColor": "{list.option.selected.color}",
                    "selectedFocusColor": "{list.option.selected.focus.color}",
                    "separator": {
                      "borderColor": "{content.border.color}"
                    },
                    "padding": "{list.option.padding}",
                    "borderRadius": "{list.option.border.radius}"
                  }
                },
                "paginatorTop": {
                  "borderColor": "{datatable.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{datatable.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "borderColor": "{content.border.color}"
                    },
                    "row": {
                      "stripedBackground": "{surface.50}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.100}"
                    }
                  },
                  "dark": {
                    "root": {
                      "borderColor": "{surface.800}"
                    },
                    "row": {
                      "stripedBackground": "{surface.950}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.900}"
                    }
                  }
                }
              },
              "dataview": {
                "root": {
                  "borderColor": "transparent",
                  "borderWidth": "0",
                  "borderRadius": "0",
                  "padding": "0"
                },
                "header": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem",
                  "borderRadius": "0"
                },
                "content": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "transparent",
                  "borderWidth": "0",
                  "padding": "0",
                  "borderRadius": "0"
                },
                "footer": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px 0 0 0",
                  "padding": "0.75rem 1rem",
                  "borderRadius": "0"
                },
                "paginatorTop": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px 0 0 0"
                }
              },
              "datepicker": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "padding": "{overlay.popover.padding}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "padding": "0 0 0.5rem 0"
                },
                "title": {
                  "gap": "0.5rem",
                  "fontWeight": "500"
                },
                "dropdown": {
                  "width": "2.5rem",
                  "sm": {
                    "width": "2rem"
                  },
                  "lg": {
                    "width": "3rem"
                  },
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.border.color}",
                  "activeBorderColor": "{form.field.border.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "inputIcon": {
                  "color": "{form.field.icon.color}"
                },
                "selectMonth": {
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}"
                },
                "selectYear": {
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}"
                },
                "group": {
                  "borderColor": "{content.border.color}",
                  "gap": "{overlay.popover.padding}"
                },
                "dayView": {
                  "margin": "0.5rem 0 0 0"
                },
                "weekDay": {
                  "padding": "0.25rem",
                  "fontWeight": "500",
                  "color": "{content.color}"
                },
                "date": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{primary.color}",
                  "rangeSelectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{primary.contrast.color}",
                  "rangeSelectedColor": "{highlight.color}",
                  "width": "2rem",
                  "height": "2rem",
                  "borderRadius": "50%",
                  "padding": "0.25rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "monthView": {
                  "margin": "0.5rem 0 0 0"
                },
                "month": {
                  "padding": "0.375rem",
                  "borderRadius": "{content.border.radius}"
                },
                "yearView": {
                  "margin": "0.5rem 0 0 0"
                },
                "year": {
                  "padding": "0.375rem",
                  "borderRadius": "{content.border.radius}"
                },
                "buttonbar": {
                  "padding": "0.5rem 0 0 0",
                  "borderColor": "{content.border.color}"
                },
                "timePicker": {
                  "padding": "0.5rem 0 0 0",
                  "borderColor": "{content.border.color}",
                  "gap": "0.5rem",
                  "buttonGap": "0.25rem"
                },
                "colorScheme": {
                  "light": {
                    "dropdown": {
                      "background": "{surface.100}",
                      "hoverBackground": "{surface.200}",
                      "activeBackground": "{surface.300}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}",
                      "activeColor": "{surface.800}"
                    },
                    "today": {
                      "background": "{surface.200}",
                      "color": "{surface.900}"
                    }
                  },
                  "dark": {
                    "dropdown": {
                      "background": "{surface.800}",
                      "hoverBackground": "{surface.700}",
                      "activeBackground": "{surface.600}",
                      "color": "{surface.300}",
                      "hoverColor": "{surface.200}",
                      "activeColor": "{surface.100}"
                    },
                    "today": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "dialog": {
                "root": {
                  "background": "{overlay.modal.background}",
                  "borderColor": "{overlay.modal.border.color}",
                  "color": "{overlay.modal.color}",
                  "borderRadius": "{overlay.modal.border.radius}",
                  "shadow": "{overlay.modal.shadow}"
                },
                "header": {
                  "padding": "{overlay.modal.padding}",
                  "gap": "0.5rem"
                },
                "title": {
                  "fontSize": "1.25rem",
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
                },
                "footer": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
                  "gap": "0.5rem"
                }
              },
              "divider": {
                "root": {
                  "borderColor": "{content.border.color}"
                },
                "content": {
                  "background": "{content.background}",
                  "color": "{text.color}"
                },
                "horizontal": {
                  "margin": "1rem 0",
                  "padding": "0 1rem",
                  "content": {
                    "padding": "0 0.5rem"
                  }
                },
                "vertical": {
                  "margin": "0 1rem",
                  "padding": "0.5rem 0",
                  "content": {
                    "padding": "0.5rem 0"
                  }
                }
              },
              "dock": {
                "root": {
                  "background": "rgba(255, 255, 255, 0.1)",
                  "borderColor": "rgba(255, 255, 255, 0.2)",
                  "padding": "0.5rem",
                  "borderRadius": "{border.radius.xl}"
                },
                "item": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "0.5rem",
                  "size": "3rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "drawer": {
                "root": {
                  "background": "{overlay.modal.background}",
                  "borderColor": "{overlay.modal.border.color}",
                  "color": "{overlay.modal.color}",
                  "shadow": "{overlay.modal.shadow}"
                },
                "header": {
                  "padding": "{overlay.modal.padding}"
                },
                "title": {
                  "fontSize": "1.5rem",
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
                },
                "footer": {
                  "padding": "{overlay.modal.padding}"
                }
              },
              "editor": {
                "toolbar": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "toolbarItem": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}",
                  "padding": "{list.padding}"
                },
                "overlayOption": {
                  "focusBackground": "{list.option.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "content": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                }
              },
              "fieldset": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "padding": "0 1.125rem 1.125rem 1.125rem",
                  "transitionDuration": "{transition.duration}"
                },
                "legend": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "borderColor": "transparent",
                  "padding": "0.5rem 0.75rem",
                  "gap": "0.5rem",
                  "fontWeight": "600",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "toggleIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}"
                },
                "content": {
                  "padding": "0"
                }
              },
              "fileupload": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "transparent",
                  "color": "{text.color}",
                  "padding": "1.125rem",
                  "borderColor": "unset",
                  "borderWidth": "0",
                  "borderRadius": "0",
                  "gap": "0.5rem"
                },
                "content": {
                  "highlightBorderColor": "{primary.color}",
                  "padding": "0 1.125rem 1.125rem 1.125rem",
                  "gap": "1rem"
                },
                "file": {
                  "padding": "1rem",
                  "gap": "1rem",
                  "borderColor": "{content.border.color}",
                  "info": {
                    "gap": "0.5rem"
                  }
                },
                "fileList": {
                  "gap": "0.5rem"
                },
                "progressbar": {
                  "height": "0.25rem"
                },
                "basic": {
                  "gap": "0.5rem"
                }
              },
              "floatlabel": {
                "root": {
                  "color": "{form.field.float.label.color}",
                  "focusColor": "{form.field.float.label.focus.color}",
                  "activeColor": "{form.field.float.label.active.color}",
                  "invalidColor": "{form.field.float.label.invalid.color}",
                  "transitionDuration": "0.2s",
                  "positionX": "{form.field.padding.x}",
                  "positionY": "{form.field.padding.y}",
                  "fontWeight": "500",
                  "active": {
                    "fontSize": "0.75rem",
                    "fontWeight": "400"
                  }
                },
                "over": {
                  "active": {
                    "top": "-1.25rem"
                  }
                },
                "in": {
                  "input": {
                    "paddingTop": "1.5rem",
                    "paddingBottom": "{form.field.padding.y}"
                  },
                  "active": {
                    "top": "{form.field.padding.y}"
                  }
                },
                "on": {
                  "borderRadius": "{border.radius.xs}",
                  "active": {
                    "background": "{form.field.background}",
                    "padding": "0 0.125rem"
                  }
                }
              },
              "galleria": {
                "root": {
                  "borderWidth": "1px",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "transitionDuration": "{transition.duration}"
                },
                "navButton": {
                  "background": "rgba(255, 255, 255, 0.1)",
                  "hoverBackground": "rgba(255, 255, 255, 0.2)",
                  "color": "{surface.100}",
                  "hoverColor": "{surface.0}",
                  "size": "3rem",
                  "gutter": "0.5rem",
                  "prev": {
                    "borderRadius": "50%"
                  },
                  "next": {
                    "borderRadius": "50%"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "navIcon": {
                  "size": "1.5rem"
                },
                "thumbnailsContent": {
                  "background": "{content.background}",
                  "padding": "1rem 0.25rem"
                },
                "thumbnailNavButton": {
                  "size": "2rem",
                  "borderRadius": "{content.border.radius}",
                  "gutter": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "thumbnailNavButtonIcon": {
                  "size": "1rem"
                },
                "caption": {
                  "background": "rgba(0, 0, 0, 0.5)",
                  "color": "{surface.100}",
                  "padding": "1rem"
                },
                "indicatorList": {
                  "gap": "0.5rem",
                  "padding": "1rem"
                },
                "indicatorButton": {
                  "width": "1rem",
                  "height": "1rem",
                  "activeBackground": "{primary.color}",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "insetIndicatorList": {
                  "background": "rgba(0, 0, 0, 0.5)"
                },
                "insetIndicatorButton": {
                  "background": "rgba(255, 255, 255, 0.4)",
                  "hoverBackground": "rgba(255, 255, 255, 0.6)",
                  "activeBackground": "rgba(255, 255, 255, 0.9)"
                },
                "closeButton": {
                  "size": "3rem",
                  "gutter": "0.5rem",
                  "background": "rgba(255, 255, 255, 0.1)",
                  "hoverBackground": "rgba(255, 255, 255, 0.2)",
                  "color": "{surface.50}",
                  "hoverColor": "{surface.0}",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "closeButtonIcon": {
                  "size": "1.5rem"
                },
                "colorScheme": {
                  "light": {
                    "thumbnailNavButton": {
                      "hoverBackground": "{surface.100}",
                      "color": "{surface.600}",
                      "hoverColor": "{surface.700}"
                    },
                    "indicatorButton": {
                      "background": "{surface.200}",
                      "hoverBackground": "{surface.300}"
                    }
                  },
                  "dark": {
                    "thumbnailNavButton": {
                      "hoverBackground": "{surface.700}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.0}"
                    },
                    "indicatorButton": {
                      "background": "{surface.700}",
                      "hoverBackground": "{surface.600}"
                    }
                  }
                }
              },
              "iconfield": {
                "icon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "iftalabel": {
                "root": {
                  "color": "{form.field.float.label.color}",
                  "focusColor": "{form.field.float.label.focus.color}",
                  "invalidColor": "{form.field.float.label.invalid.color}",
                  "transitionDuration": "0.2s",
                  "positionX": "{form.field.padding.x}",
                  "top": "{form.field.padding.y}",
                  "fontSize": "0.75rem",
                  "fontWeight": "400"
                },
                "input": {
                  "paddingTop": "1.5rem",
                  "paddingBottom": "{form.field.padding.y}"
                }
              },
              "image": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "preview": {
                  "icon": {
                    "size": "1.5rem"
                  },
                  "mask": {
                    "background": "{mask.background}",
                    "color": "{mask.color}"
                  }
                },
                "toolbar": {
                  "position": {
                    "left": "auto",
                    "right": "1rem",
                    "top": "1rem",
                    "bottom": "auto"
                  },
                  "blur": "8px",
                  "background": "rgba(255,255,255,0.1)",
                  "borderColor": "rgba(255,255,255,0.2)",
                  "borderWidth": "1px",
                  "borderRadius": "30px",
                  "padding": ".5rem",
                  "gap": "0.5rem"
                },
                "action": {
                  "hoverBackground": "rgba(255,255,255,0.1)",
                  "color": "{surface.50}",
                  "hoverColor": "{surface.0}",
                  "size": "3rem",
                  "iconSize": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "imagecompare": {
                "handle": {
                  "size": "15px",
                  "hoverSize": "30px",
                  "background": "rgba(255,255,255,0.3)",
                  "hoverBackground": "rgba(255,255,255,0.3)",
                  "borderColor": "unset",
                  "hoverBorderColor": "unset",
                  "borderWidth": "0",
                  "borderRadius": "50%",
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "rgba(255,255,255,0.3)",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "inlinemessage": {
                "root": {
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.5rem"
                },
                "text": {
                  "fontWeight": "500"
                },
                "icon": {
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                    }
                  },
                  "dark": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
                    }
                  }
                }
              },
              "inplace": {
                "root": {
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{transition.duration}"
                },
                "display": {
                  "hoverBackground": "{content.hover.background}",
                  "hoverColor": "{content.hover.color}"
                }
              },
              "inputchips": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "colorScheme": {
                  "light": {
                    "chip": {
                      "focusBackground": "{surface.200}",
                      "color": "{surface.800}"
                    }
                  },
                  "dark": {
                    "chip": {
                      "focusBackground": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "inputgroup": {
                "addon": {
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.icon.color}",
                  "borderRadius": "{form.field.border.radius}",
                  "padding": "0.5rem",
                  "minWidth": "2.5rem"
                }
              },
              "inputnumber": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "button": {
                  "width": "2.5rem",
                  "borderRadius": "{form.field.border.radius}",
                  "verticalPadding": "{form.field.padding.y}"
                },
                "colorScheme": {
                  "light": {
                    "button": {
                      "background": "transparent",
                      "hoverBackground": "{surface.100}",
                      "activeBackground": "{surface.200}",
                      "borderColor": "{form.field.border.color}",
                      "hoverBorderColor": "{form.field.border.color}",
                      "activeBorderColor": "{form.field.border.color}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.500}",
                      "activeColor": "{surface.600}"
                    }
                  },
                  "dark": {
                    "button": {
                      "background": "transparent",
                      "hoverBackground": "{surface.800}",
                      "activeBackground": "{surface.700}",
                      "borderColor": "{form.field.border.color}",
                      "hoverBorderColor": "{form.field.border.color}",
                      "activeBorderColor": "{form.field.border.color}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "activeColor": "{surface.200}"
                    }
                  }
                }
              },
              "inputotp": {
                "root": {
                  "gap": "0.5rem"
                },
                "input": {
                  "width": "2.5rem",
                  "sm": {
                    "width": "2rem"
                  },
                  "lg": {
                    "width": "3rem"
                  }
                }
              },
              "inputtext": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                }
              },
              "knob": {
                "root": {
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "value": {
                  "background": "{primary.color}"
                },
                "range": {
                  "background": "{content.border.color}"
                },
                "text": {
                  "color": "{text.muted.color}"
                }
              },
              "listbox": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "borderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "shadow": "{form.field.shadow}",
                  "borderRadius": "{form.field.border.radius}",
                  "transitionDuration": "{form.field.transition.duration}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "checkmark": {
                  "color": "{list.option.color}",
                  "gutterStart": "-0.375rem",
                  "gutterEnd": "0.375rem"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "colorScheme": {
                  "light": {
                    "option": {
                      "stripedBackground": "{surface.50}"
                    }
                  },
                  "dark": {
                    "option": {
                      "stripedBackground": "{surface.900}"
                    }
                  }
                }
              },
              "megamenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "verticalOrientation": {
                    "padding": "{navigation.list.padding}",
                    "gap": "{navigation.list.gap}"
                  },
                  "horizontalOrientation": {
                    "padding": "0.5rem 0.75rem",
                    "gap": "0.5rem"
                  },
                  "transitionDuration": "{transition.duration}"
                },
                "baseItem": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "{navigation.item.padding}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "overlay": {
                  "padding": "0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "shadow": "{overlay.navigation.shadow}",
                  "gap": "0.5rem"
                },
                "submenu": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "background": "{navigation.submenu.label.background.}",
                  "color": "{navigation.submenu.label.color}"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "mobileButton": {
                  "borderRadius": "50%",
                  "size": "1.75rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "hoverBackground": "{content.hover.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "menu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}"
                  }
                },
                "submenuLabel": {
                  "padding": "{navigation.submenu.label.padding}",
                  "fontWeight": "{navigation.submenu.label.font.weight}",
                  "background": "{navigation.submenu.label.background}",
                  "color": "{navigation.submenu.label.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "menubar": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "padding": "0.5rem 0.75rem",
                  "transitionDuration": "{transition.duration}"
                },
                "baseItem": {
                  "borderRadius": "{content.border.radius}",
                  "padding": "{navigation.item.padding}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenu": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "mobileIndent": "1rem",
                  "icon": {
                    "size": "{navigation.submenu.icon.size}",
                    "color": "{navigation.submenu.icon.color}",
                    "focusColor": "{navigation.submenu.icon.focus.color}",
                    "activeColor": "{navigation.submenu.icon.active.color}"
                  }
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                },
                "mobileButton": {
                  "borderRadius": "50%",
                  "size": "1.75rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "hoverBackground": "{content.hover.background}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "message": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "transitionDuration": "{transition.duration}"
                },
                "content": {
                  "padding": "0.5rem 0.75rem",
                  "gap": "0.5rem",
                  "sm": {
                    "padding": "0.375rem 0.625rem"
                  },
                  "lg": {
                    "padding": "0.625rem 0.875rem"
                  }
                },
                "text": {
                  "fontSize": "1rem",
                  "fontWeight": "500",
                  "sm": {
                    "fontSize": "0.875rem"
                  },
                  "lg": {
                    "fontSize": "1.125rem"
                  }
                },
                "icon": {
                  "size": "1.125rem",
                  "sm": {
                    "size": "1rem"
                  },
                  "lg": {
                    "size": "1.25rem"
                  }
                },
                "closeButton": {
                  "width": "1.75rem",
                  "height": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "closeIcon": {
                  "size": "1rem",
                  "sm": {
                    "size": "0.875rem"
                  },
                  "lg": {
                    "size": "1.125rem"
                  }
                },
                "outlined": {
                  "root": {
                    "borderWidth": "1px"
                  }
                },
                "simple": {
                  "content": {
                    "padding": "0"
                  }
                },
                "colorScheme": {
                  "light": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{blue.100}",
                        "focusRing": {
                          "color": "{blue.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{blue.600}",
                        "borderColor": "{blue.600}"
                      },
                      "simple": {
                        "color": "{blue.600}"
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{green.100}",
                        "focusRing": {
                          "color": "{green.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{green.600}",
                        "borderColor": "{green.600}"
                      },
                      "simple": {
                        "color": "{green.600}"
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{yellow.100}",
                        "focusRing": {
                          "color": "{yellow.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{yellow.600}",
                        "borderColor": "{yellow.600}"
                      },
                      "simple": {
                        "color": "{yellow.600}"
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{red.100}",
                        "focusRing": {
                          "color": "{red.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{red.600}",
                        "borderColor": "{red.600}"
                      },
                      "simple": {
                        "color": "{red.600}"
                      }
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.200}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{surface.500}",
                        "borderColor": "{surface.500}"
                      },
                      "simple": {
                        "color": "{surface.500}"
                      }
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.50}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{surface.950}",
                        "borderColor": "{surface.950}"
                      },
                      "simple": {
                        "color": "{surface.950}"
                      }
                    }
                  },
                  "dark": {
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{blue.500}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{blue.500}",
                        "borderColor": "{blue.500}"
                      },
                      "simple": {
                        "color": "{blue.500}"
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{green.500}",
                        "borderColor": "{green.500}"
                      },
                      "simple": {
                        "color": "{green.500}"
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{yellow.500}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{yellow.500}",
                        "borderColor": "{yellow.500}"
                      },
                      "simple": {
                        "color": "{yellow.500}"
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{red.500}",
                        "borderColor": "{red.500}"
                      },
                      "simple": {
                        "color": "{red.500}"
                      }
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.700}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{surface.400}",
                        "borderColor": "{surface.400}"
                      },
                      "simple": {
                        "color": "{surface.400}"
                      }
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      },
                      "outlined": {
                        "color": "{surface.0}",
                        "borderColor": "{surface.0}"
                      },
                      "simple": {
                        "color": "{surface.0}"
                      }
                    }
                  }
                }
              },
              "metergroup": {
                "root": {
                  "borderRadius": "{content.border.radius}",
                  "gap": "1rem"
                },
                "meters": {
                  "background": "{content.border.color}",
                  "size": "0.5rem"
                },
                "label": {
                  "gap": "0.5rem"
                },
                "labelMarker": {
                  "size": "0.5rem"
                },
                "labelIcon": {
                  "size": "1rem"
                },
                "labelList": {
                  "verticalGap": "0.5rem",
                  "horizontalGap": "1rem"
                }
              },
              "multiselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}",
                  "gap": "0.5rem"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "orderlist": {
                "root": {
                  "gap": "1.125rem"
                },
                "controls": {
                  "gap": "0.5rem"
                }
              },
              "organizationchart": {
                "root": {
                  "gutter": "0.75rem",
                  "transitionDuration": "{transition.duration}"
                },
                "node": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "selectedColor": "{highlight.color}",
                  "hoverColor": "{content.hover.color}",
                  "padding": "0.75rem 1rem",
                  "toggleablePadding": "0.75rem 1rem 1.25rem 1rem",
                  "borderRadius": "{content.border.radius}"
                },
                "nodeToggleButton": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "size": "1.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "connector": {
                  "color": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "24px"
                }
              },
              "overlaybadge": {
                "root": {
                  "outline": {
                    "width": "2px",
                    "color": "{content.background}"
                  }
                }
              },
              "paginator": {
                "root": {
                  "padding": "0.5rem 1rem",
                  "gap": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "transitionDuration": "{transition.duration}"
                },
                "navButton": {
                  "background": "transparent",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedColor": "{highlight.color}",
                  "width": "2.5rem",
                  "height": "2.5rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "currentPageReport": {
                  "color": "{text.muted.color}"
                },
                "jumpToPageInput": {
                  "maxWidth": "2.5rem"
                }
              },
              "panel": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}"
                },
                "header": {
                  "background": "transparent",
                  "color": "{text.color}",
                  "padding": "1.125rem",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0",
                  "borderRadius": "0"
                },
                "toggleableHeader": {
                  "padding": "0.375rem 1.125rem"
                },
                "title": {
                  "fontWeight": "600"
                },
                "content": {
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                },
                "footer": {
                  "padding": "0 1.125rem 1.125rem 1.125rem"
                }
              },
              "panelmenu": {
                "root": {
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                },
                "panel": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderWidth": "1px",
                  "color": "{content.color}",
                  "padding": "0.25rem 0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "first": {
                    "borderWidth": "1px",
                    "topBorderRadius": "{content.border.radius}"
                  },
                  "last": {
                    "borderWidth": "1px",
                    "bottomBorderRadius": "{content.border.radius}"
                  }
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "gap": "0.5rem",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{content.border.radius}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}"
                  }
                },
                "submenu": {
                  "indent": "1rem"
                },
                "submenuIcon": {
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}"
                }
              },
              "password": {
                "meter": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": ".75rem"
                },
                "icon": {
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "color": "{overlay.popover.color}",
                  "padding": "{overlay.popover.padding}",
                  "shadow": "{overlay.popover.shadow}"
                },
                "content": {
                  "gap": "0.5rem"
                },
                "colorScheme": {
                  "light": {
                    "strength": {
                      "weakBackground": "{red.500}",
                      "mediumBackground": "{amber.500}",
                      "strongBackground": "{green.500}"
                    }
                  },
                  "dark": {
                    "strength": {
                      "weakBackground": "{red.400}",
                      "mediumBackground": "{amber.400}",
                      "strongBackground": "{green.400}"
                    }
                  }
                }
              },
              "picklist": {
                "root": {
                  "gap": "1.125rem"
                },
                "controls": {
                  "gap": "0.5rem"
                }
              },
              "popover": {
                "root": {
                  "background": "{overlay.popover.background}",
                  "borderColor": "{overlay.popover.border.color}",
                  "color": "{overlay.popover.color}",
                  "borderRadius": "{overlay.popover.border.radius}",
                  "shadow": "{overlay.popover.shadow}",
                  "gutter": "10px",
                  "arrowOffset": "1.25rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}"
                }
              },
              "progressbar": {
                "root": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "height": "1.25rem"
                },
                "value": {
                  "background": "{primary.color}"
                },
                "label": {
                  "color": "{primary.contrast.color}",
                  "fontSize": "0.75rem",
                  "fontWeight": "600"
                }
              },
              "progressspinner": {
                "colorScheme": {
                  "light": {
                    "root": {
                      "colorOne": "{red.500}",
                      "colorTwo": "{blue.500}",
                      "colorThree": "{green.500}",
                      "colorFour": "{yellow.500}"
                    }
                  },
                  "dark": {
                    "root": {
                      "colorOne": "{red.400}",
                      "colorTwo": "{blue.400}",
                      "colorThree": "{green.400}",
                      "colorFour": "{yellow.400}"
                    }
                  }
                }
              },
              "radiobutton": {
                "root": {
                  "width": "1.25rem",
                  "height": "1.25rem",
                  "background": "{form.field.background}",
                  "checkedBackground": "{primary.color}",
                  "checkedHoverBackground": "{primary.hover.color}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.border.color}",
                  "checkedBorderColor": "{primary.color}",
                  "checkedHoverBorderColor": "{primary.hover.color}",
                  "checkedFocusBorderColor": "{primary.color}",
                  "checkedDisabledBorderColor": "{form.field.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "width": "1rem",
                    "height": "1rem"
                  },
                  "lg": {
                    "width": "1.5rem",
                    "height": "1.5rem"
                  }
                },
                "icon": {
                  "size": "0.75rem",
                  "checkedColor": "{primary.contrast.color}",
                  "checkedHoverColor": "{primary.contrast.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "sm": {
                    "size": "0.5rem"
                  },
                  "lg": {
                    "size": "1rem"
                  }
                }
              },
              "rating": {
                "root": {
                  "gap": "0.25rem",
                  "transitionDuration": "{transition.duration}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "icon": {
                  "size": "1rem",
                  "color": "{text.muted.color}",
                  "hoverColor": "{primary.color}",
                  "activeColor": "{primary.color}"
                }
              },
              "ripple": {
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "rgba(0,0,0,0.1)"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "rgba(255,255,255,0.3)"
                    }
                  }
                }
              },
              "scrollpanel": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "bar": {
                  "size": "9px",
                  "borderRadius": "{border.radius.sm}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "bar": {
                      "background": "{surface.100}"
                    }
                  },
                  "dark": {
                    "bar": {
                      "background": "{surface.800}"
                    }
                  }
                }
              },
              "select": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "list": {
                  "padding": "{list.padding}",
                  "gap": "{list.gap}",
                  "header": {
                    "padding": "{list.header.padding}"
                  }
                },
                "option": {
                  "focusBackground": "{list.option.focus.background}",
                  "selectedBackground": "{list.option.selected.background}",
                  "selectedFocusBackground": "{list.option.selected.focus.background}",
                  "color": "{list.option.color}",
                  "focusColor": "{list.option.focus.color}",
                  "selectedColor": "{list.option.selected.color}",
                  "selectedFocusColor": "{list.option.selected.focus.color}",
                  "padding": "{list.option.padding}",
                  "borderRadius": "{list.option.border.radius}"
                },
                "optionGroup": {
                  "background": "{list.option.group.background}",
                  "color": "{list.option.group.color}",
                  "fontWeight": "{list.option.group.font.weight}",
                  "padding": "{list.option.group.padding}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                },
                "checkmark": {
                  "color": "{list.option.color}",
                  "gutterStart": "-0.375rem",
                  "gutterEnd": "0.375rem"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                }
              },
              "selectbutton": {
                "root": {
                  "borderRadius": "{form.field.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "invalidBorderColor": "{form.field.invalid.border.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "invalidBorderColor": "{form.field.invalid.border.color}"
                    }
                  }
                }
              },
              "skeleton": {
                "root": {
                  "borderRadius": "{content.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.200}",
                      "animationBackground": "rgba(255,255,255,0.4)"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "rgba(255, 255, 255, 0.06)",
                      "animationBackground": "rgba(255, 255, 255, 0.04)"
                    }
                  }
                }
              },
              "slider": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "track": {
                  "background": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "size": "3px"
                },
                "range": {
                  "background": "{primary.color}"
                },
                "handle": {
                  "width": "20px",
                  "height": "20px",
                  "borderRadius": "50%",
                  "background": "{content.border.color}",
                  "hoverBackground": "{content.border.color}",
                  "content": {
                    "borderRadius": "50%",
                    "hoverBackground": "{content.background}",
                    "width": "16px",
                    "height": "16px",
                    "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"
                  },
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "colorScheme": {
                  "light": {
                    "handle": {
                      "content": {
                        "background": "{surface.0}"
                      }
                    }
                  },
                  "dark": {
                    "handle": {
                      "content": {
                        "background": "{surface.950}"
                      }
                    }
                  }
                }
              },
              "speeddial": {
                "root": {
                  "gap": "0.5rem",
                  "transitionDuration": "{transition.duration}"
                }
              },
              "splitbutton": {
                "root": {
                  "borderRadius": "{form.field.border.radius}",
                  "roundedBorderRadius": "2rem",
                  "raisedShadow": "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                }
              },
              "splitter": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "transitionDuration": "{transition.duration}"
                },
                "gutter": {
                  "background": "{content.border.color}"
                },
                "handle": {
                  "size": "24px",
                  "background": "transparent",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                }
              },
              "stepper": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "separator": {
                  "background": "{content.border.color}",
                  "activeBackground": "{primary.color}",
                  "margin": "0 0 0 1.625rem",
                  "size": "2px"
                },
                "step": {
                  "padding": "0.5rem",
                  "gap": "1rem"
                },
                "stepHeader": {
                  "padding": "0",
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.5rem"
                },
                "stepTitle": {
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "fontWeight": "500"
                },
                "stepNumber": {
                  "background": "{content.background}",
                  "activeBackground": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "size": "2rem",
                  "fontSize": "1.143rem",
                  "fontWeight": "500",
                  "borderRadius": "50%",
                  "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                },
                "steppanels": {
                  "padding": "0.875rem 0.5rem 1.125rem 0.5rem"
                },
                "steppanel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "0",
                  "indent": "1rem"
                }
              },
              "steps": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "separator": {
                  "background": "{content.border.color}"
                },
                "itemLink": {
                  "borderRadius": "{content.border.radius}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.5rem"
                },
                "itemLabel": {
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "fontWeight": "500"
                },
                "itemNumber": {
                  "background": "{content.background}",
                  "activeBackground": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{content.border.color}",
                  "color": "{text.muted.color}",
                  "activeColor": "{primary.color}",
                  "size": "2rem",
                  "fontSize": "1.143rem",
                  "fontWeight": "500",
                  "borderRadius": "50%",
                  "shadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                }
              },
              "tabmenu": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tablist": {
                  "borderWidth": "0 0 1px 0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "item": {
                  "background": "transparent",
                  "hoverBackground": "transparent",
                  "activeBackground": "transparent",
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}",
                  "hoverBorderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}",
                  "padding": "1rem 1.125rem",
                  "fontWeight": "600",
                  "margin": "0 0 -1px 0",
                  "gap": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "itemIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "activeBar": {
                  "height": "1px",
                  "bottom": "-1px",
                  "background": "{primary.color}"
                }
              },
              "tabs": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tablist": {
                  "borderWidth": "0 0 1px 0",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "tab": {
                  "background": "transparent",
                  "hoverBackground": "transparent",
                  "activeBackground": "transparent",
                  "borderWidth": "0 0 1px 0",
                  "borderColor": "{content.border.color}",
                  "hoverBorderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}",
                  "padding": "1rem 1.125rem",
                  "fontWeight": "600",
                  "margin": "0 0 -1px 0",
                  "gap": "0.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "tabpanel": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "0.875rem 1.125rem 1.125rem 1.125rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "inset {focus.ring.shadow}"
                  }
                },
                "navButton": {
                  "background": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "width": "2.5rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "activeBar": {
                  "height": "1px",
                  "bottom": "-1px",
                  "background": "{primary.color}"
                },
                "colorScheme": {
                  "light": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
                    }
                  },
                  "dark": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
                    }
                  }
                }
              },
              "tabview": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "tabList": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}"
                },
                "tab": {
                  "borderColor": "{content.border.color}",
                  "activeBorderColor": "{primary.color}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "activeColor": "{primary.color}"
                },
                "tabPanel": {
                  "background": "{content.background}",
                  "color": "{content.color}"
                },
                "navButton": {
                  "background": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}"
                },
                "colorScheme": {
                  "light": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
                    }
                  },
                  "dark": {
                    "navButton": {
                      "shadow": "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
                    }
                  }
                }
              },
              "tag": {
                "root": {
                  "fontSize": "0.875rem",
                  "fontWeight": "700",
                  "padding": "0.25rem 0.5rem",
                  "gap": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "roundedBorderRadius": "{border.radius.xl}"
                },
                "icon": {
                  "size": "0.75rem"
                },
                "colorScheme": {
                  "light": {
                    "primary": {
                      "background": "{primary.100}",
                      "color": "{primary.700}"
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "color": "{surface.600}"
                    },
                    "success": {
                      "background": "{green.100}",
                      "color": "{green.700}"
                    },
                    "info": {
                      "background": "{sky.100}",
                      "color": "{sky.700}"
                    },
                    "warn": {
                      "background": "{orange.100}",
                      "color": "{orange.700}"
                    },
                    "danger": {
                      "background": "{red.100}",
                      "color": "{red.700}"
                    },
                    "contrast": {
                      "background": "{surface.950}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "primary": {
                      "background": "color-mix(in srgb, {primary.500}, transparent 84%)",
                      "color": "{primary.300}"
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "color": "{surface.300}"
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "color": "{green.300}"
                    },
                    "info": {
                      "background": "color-mix(in srgb, {sky.500}, transparent 84%)",
                      "color": "{sky.300}"
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {orange.500}, transparent 84%)",
                      "color": "{orange.300}"
                    },
                    "danger": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "color": "{red.300}"
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "color": "{surface.950}"
                    }
                  }
                }
              },
              "terminal": {
                "root": {
                  "background": "{form.field.background}",
                  "borderColor": "{form.field.border.color}",
                  "color": "{form.field.color}",
                  "height": "18rem",
                  "padding": "{form.field.padding.y} {form.field.padding.x}",
                  "borderRadius": "{form.field.border.radius}"
                },
                "prompt": {
                  "gap": "0.25rem"
                },
                "commandResponse": {
                  "margin": "2px 0"
                }
              },
              "textarea": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                }
              },
              "tieredmenu": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "color": "{content.color}",
                  "borderRadius": "{content.border.radius}",
                  "shadow": "{overlay.navigation.shadow}",
                  "transitionDuration": "{transition.duration}"
                },
                "list": {
                  "padding": "{navigation.list.padding}",
                  "gap": "{navigation.list.gap}"
                },
                "item": {
                  "focusBackground": "{navigation.item.focus.background}",
                  "activeBackground": "{navigation.item.active.background}",
                  "color": "{navigation.item.color}",
                  "focusColor": "{navigation.item.focus.color}",
                  "activeColor": "{navigation.item.active.color}",
                  "padding": "{navigation.item.padding}",
                  "borderRadius": "{navigation.item.border.radius}",
                  "gap": "{navigation.item.gap}",
                  "icon": {
                    "color": "{navigation.item.icon.color}",
                    "focusColor": "{navigation.item.icon.focus.color}",
                    "activeColor": "{navigation.item.icon.active.color}"
                  }
                },
                "submenu": {
                  "mobileIndent": "1rem"
                },
                "submenuIcon": {
                  "size": "{navigation.submenu.icon.size}",
                  "color": "{navigation.submenu.icon.color}",
                  "focusColor": "{navigation.submenu.icon.focus.color}",
                  "activeColor": "{navigation.submenu.icon.active.color}"
                },
                "separator": {
                  "borderColor": "{content.border.color}"
                }
              },
              "timeline": {
                "event": {
                  "minHeight": "5rem"
                },
                "horizontal": {
                  "eventContent": {
                    "padding": "1rem 0"
                  }
                },
                "vertical": {
                  "eventContent": {
                    "padding": "0 1rem"
                  }
                },
                "eventMarker": {
                  "size": "1.125rem",
                  "borderRadius": "50%",
                  "borderWidth": "2px",
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "content": {
                    "borderRadius": "50%",
                    "size": "0.375rem",
                    "background": "{primary.color}",
                    "insetShadow": "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
                  }
                },
                "eventConnector": {
                  "color": "{content.border.color}",
                  "size": "2px"
                }
              },
              "toast": {
                "root": {
                  "width": "25rem",
                  "borderRadius": "{content.border.radius}",
                  "borderWidth": "1px",
                  "transitionDuration": "{transition.duration}"
                },
                "icon": {
                  "size": "1.125rem"
                },
                "content": {
                  "padding": "{overlay.popover.padding}",
                  "gap": "0.5rem"
                },
                "text": {
                  "gap": "0.5rem"
                },
                "summary": {
                  "fontWeight": "500",
                  "fontSize": "1rem"
                },
                "detail": {
                  "fontWeight": "500",
                  "fontSize": "0.875rem"
                },
                "closeButton": {
                  "width": "1.75rem",
                  "height": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "offset": "{focus.ring.offset}"
                  }
                },
                "closeIcon": {
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "blur": "1.5px",
                    "info": {
                      "background": "color-mix(in srgb, {blue.50}, transparent 5%)",
                      "borderColor": "{blue.200}",
                      "color": "{blue.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{blue.100}",
                        "focusRing": {
                          "color": "{blue.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.50}, transparent 5%)",
                      "borderColor": "{green.200}",
                      "color": "{green.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{green.100}",
                        "focusRing": {
                          "color": "{green.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb,{yellow.50}, transparent 5%)",
                      "borderColor": "{yellow.200}",
                      "color": "{yellow.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{yellow.100}",
                        "focusRing": {
                          "color": "{yellow.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.50}, transparent 5%)",
                      "borderColor": "{red.200}",
                      "color": "{red.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{red.100}",
                        "focusRing": {
                          "color": "{red.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.100}",
                      "borderColor": "{surface.200}",
                      "color": "{surface.600}",
                      "detailColor": "{surface.700}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.200}",
                        "focusRing": {
                          "color": "{surface.600}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.900}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.50}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.800}",
                        "focusRing": {
                          "color": "{surface.50}",
                          "shadow": "none"
                        }
                      }
                    }
                  },
                  "dark": {
                    "blur": "10px",
                    "info": {
                      "background": "color-mix(in srgb, {blue.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {blue.700}, transparent 64%)",
                      "color": "{blue.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{blue.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "success": {
                      "background": "color-mix(in srgb, {green.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {green.700}, transparent 64%)",
                      "color": "{green.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{green.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "warn": {
                      "background": "color-mix(in srgb, {yellow.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {yellow.700}, transparent 64%)",
                      "color": "{yellow.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{yellow.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "error": {
                      "background": "color-mix(in srgb, {red.500}, transparent 84%)",
                      "borderColor": "color-mix(in srgb, {red.700}, transparent 64%)",
                      "color": "{red.500}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "rgba(255, 255, 255, 0.05)",
                        "focusRing": {
                          "color": "{red.500}",
                          "shadow": "none"
                        }
                      }
                    },
                    "secondary": {
                      "background": "{surface.800}",
                      "borderColor": "{surface.700}",
                      "color": "{surface.300}",
                      "detailColor": "{surface.0}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.700}",
                        "focusRing": {
                          "color": "{surface.300}",
                          "shadow": "none"
                        }
                      }
                    },
                    "contrast": {
                      "background": "{surface.0}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.950}",
                      "detailColor": "{surface.950}",
                      "shadow": "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
                      "closeButton": {
                        "hoverBackground": "{surface.100}",
                        "focusRing": {
                          "color": "{surface.950}",
                          "shadow": "none"
                        }
                      }
                    }
                  }
                }
              },
              "togglebutton": {
                "root": {
                  "padding": "0.25rem",
                  "borderRadius": "{content.border.radius}",
                  "gap": "0.5rem",
                  "fontWeight": "500",
                  "disabledBackground": "{form.field.disabled.background}",
                  "disabledBorderColor": "{form.field.disabled.background}",
                  "disabledColor": "{form.field.disabled.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "padding": "0.25rem"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "padding": "0.25rem"
                  }
                },
                "icon": {
                  "disabledColor": "{form.field.disabled.color}"
                },
                "content": {
                  "padding": "0.25rem 0.75rem",
                  "borderRadius": "{content.border.radius}",
                  "checkedShadow": "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)",
                  "sm": {
                    "padding": "0.25rem 0.75rem"
                  },
                  "lg": {
                    "padding": "0.25rem 0.75rem"
                  }
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.100}",
                      "checkedBackground": "{surface.100}",
                      "hoverBackground": "{surface.100}",
                      "borderColor": "{surface.100}",
                      "color": "{surface.500}",
                      "hoverColor": "{surface.700}",
                      "checkedColor": "{surface.900}",
                      "checkedBorderColor": "{surface.100}"
                    },
                    "content": {
                      "checkedBackground": "{surface.0}"
                    },
                    "icon": {
                      "color": "{surface.500}",
                      "hoverColor": "{surface.700}",
                      "checkedColor": "{surface.900}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.950}",
                      "checkedBackground": "{surface.950}",
                      "hoverBackground": "{surface.950}",
                      "borderColor": "{surface.950}",
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "checkedColor": "{surface.0}",
                      "checkedBorderColor": "{surface.950}"
                    },
                    "content": {
                      "checkedBackground": "{surface.800}"
                    },
                    "icon": {
                      "color": "{surface.400}",
                      "hoverColor": "{surface.300}",
                      "checkedColor": "{surface.0}"
                    }
                  }
                }
              },
              "toggleswitch": {
                "root": {
                  "width": "2.5rem",
                  "height": "1.5rem",
                  "borderRadius": "30px",
                  "gap": "0.25rem",
                  "shadow": "{form.field.shadow}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "borderWidth": "1px",
                  "borderColor": "transparent",
                  "hoverBorderColor": "transparent",
                  "checkedBorderColor": "transparent",
                  "checkedHoverBorderColor": "transparent",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "transitionDuration": "{form.field.transition.duration}",
                  "slideDuration": "0.2s"
                },
                "handle": {
                  "borderRadius": "50%",
                  "size": "1rem"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.300}",
                      "disabledBackground": "{form.field.disabled.background}",
                      "hoverBackground": "{surface.400}",
                      "checkedBackground": "{primary.color}",
                      "checkedHoverBackground": "{primary.hover.color}"
                    },
                    "handle": {
                      "background": "{surface.0}",
                      "disabledBackground": "{form.field.disabled.color}",
                      "hoverBackground": "{surface.0}",
                      "checkedBackground": "{surface.0}",
                      "checkedHoverBackground": "{surface.0}",
                      "color": "{text.muted.color}",
                      "hoverColor": "{text.color}",
                      "checkedColor": "{primary.color}",
                      "checkedHoverColor": "{primary.hover.color}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.700}",
                      "disabledBackground": "{surface.600}",
                      "hoverBackground": "{surface.600}",
                      "checkedBackground": "{primary.color}",
                      "checkedHoverBackground": "{primary.hover.color}"
                    },
                    "handle": {
                      "background": "{surface.400}",
                      "disabledBackground": "{surface.900}",
                      "hoverBackground": "{surface.300}",
                      "checkedBackground": "{surface.900}",
                      "checkedHoverBackground": "{surface.900}",
                      "color": "{surface.900}",
                      "hoverColor": "{surface.800}",
                      "checkedColor": "{primary.color}",
                      "checkedHoverColor": "{primary.hover.color}"
                    }
                  }
                }
              },
              "toolbar": {
                "root": {
                  "background": "{content.background}",
                  "borderColor": "{content.border.color}",
                  "borderRadius": "{content.border.radius}",
                  "color": "{content.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem"
                }
              },
              "tooltip": {
                "root": {
                  "maxWidth": "12.5rem",
                  "gutter": "0.25rem",
                  "shadow": "{overlay.popover.shadow}",
                  "padding": "0.5rem 0.75rem",
                  "borderRadius": "{overlay.popover.border.radius}"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  },
                  "dark": {
                    "root": {
                      "background": "{surface.700}",
                      "color": "{surface.0}"
                    }
                  }
                }
              },
              "tree": {
                "root": {
                  "background": "{content.background}",
                  "color": "{content.color}",
                  "padding": "1rem",
                  "gap": "2px",
                  "indent": "1rem",
                  "transitionDuration": "{transition.duration}"
                },
                "node": {
                  "padding": "0.25rem 0.5rem",
                  "borderRadius": "{content.border.radius}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{text.color}",
                  "hoverColor": "{text.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  },
                  "gap": "0.25rem"
                },
                "nodeIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedColor": "{highlight.color}"
                },
                "nodeToggleButton": {
                  "borderRadius": "50%",
                  "size": "1.75rem",
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "selectedHoverColor": "{primary.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "filter": {
                  "margin": "0 0 0.5rem 0"
                }
              },
              "treeselect": {
                "root": {
                  "background": "{form.field.background}",
                  "disabledBackground": "{form.field.disabled.background}",
                  "filledBackground": "{form.field.filled.background}",
                  "filledHoverBackground": "{form.field.filled.hover.background}",
                  "filledFocusBackground": "{form.field.filled.focus.background}",
                  "borderColor": "{form.field.border.color}",
                  "hoverBorderColor": "{form.field.hover.border.color}",
                  "focusBorderColor": "{form.field.focus.border.color}",
                  "invalidBorderColor": "{form.field.invalid.border.color}",
                  "color": "{form.field.color}",
                  "disabledColor": "{form.field.disabled.color}",
                  "placeholderColor": "{form.field.placeholder.color}",
                  "invalidPlaceholderColor": "{form.field.invalid.placeholder.color}",
                  "shadow": "{form.field.shadow}",
                  "paddingX": "{form.field.padding.x}",
                  "paddingY": "{form.field.padding.y}",
                  "borderRadius": "{form.field.border.radius}",
                  "focusRing": {
                    "width": "{form.field.focus.ring.width}",
                    "style": "{form.field.focus.ring.style}",
                    "color": "{form.field.focus.ring.color}",
                    "offset": "{form.field.focus.ring.offset}",
                    "shadow": "{form.field.focus.ring.shadow}"
                  },
                  "transitionDuration": "{form.field.transition.duration}",
                  "sm": {
                    "fontSize": "{form.field.sm.font.size}",
                    "paddingX": "{form.field.sm.padding.x}",
                    "paddingY": "{form.field.sm.padding.y}"
                  },
                  "lg": {
                    "fontSize": "{form.field.lg.font.size}",
                    "paddingX": "{form.field.lg.padding.x}",
                    "paddingY": "{form.field.lg.padding.y}"
                  }
                },
                "dropdown": {
                  "width": "2.5rem",
                  "color": "{form.field.icon.color}"
                },
                "overlay": {
                  "background": "{overlay.select.background}",
                  "borderColor": "{overlay.select.border.color}",
                  "borderRadius": "{overlay.select.border.radius}",
                  "color": "{overlay.select.color}",
                  "shadow": "{overlay.select.shadow}"
                },
                "tree": {
                  "padding": "{list.padding}"
                },
                "emptyMessage": {
                  "padding": "{list.option.padding}"
                },
                "chip": {
                  "borderRadius": "{border.radius.sm}"
                },
                "clearIcon": {
                  "color": "{form.field.icon.color}"
                }
              },
              "treetable": {
                "root": {
                  "transitionDuration": "{transition.duration}"
                },
                "header": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "headerCell": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "gap": "0.5rem",
                  "padding": "0.75rem 1rem",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "columnTitle": {
                  "fontWeight": "600"
                },
                "row": {
                  "background": "{content.background}",
                  "hoverBackground": "{content.hover.background}",
                  "selectedBackground": "{highlight.background}",
                  "color": "{content.color}",
                  "hoverColor": "{content.hover.color}",
                  "selectedColor": "{highlight.color}",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "-1px",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "bodyCell": {
                  "borderColor": "{treetable.border.color}",
                  "padding": "0.75rem 1rem",
                  "gap": "0.5rem"
                },
                "footerCell": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "padding": "0.75rem 1rem"
                },
                "columnFooter": {
                  "fontWeight": "600"
                },
                "footer": {
                  "background": "{content.background}",
                  "borderColor": "{treetable.border.color}",
                  "color": "{content.color}",
                  "borderWidth": "0 0 1px 0",
                  "padding": "0.75rem 1rem"
                },
                "columnResizer": {
                  "width": "0.5rem"
                },
                "resizeIndicator": {
                  "width": "1px",
                  "color": "{primary.color}"
                },
                "sortIcon": {
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.hover.muted.color}",
                  "size": "0.875rem"
                },
                "loadingIcon": {
                  "size": "2rem"
                },
                "nodeToggleButton": {
                  "hoverBackground": "{content.hover.background}",
                  "selectedHoverBackground": "{content.background}",
                  "color": "{text.muted.color}",
                  "hoverColor": "{text.color}",
                  "selectedHoverColor": "{primary.color}",
                  "size": "1.75rem",
                  "borderRadius": "50%",
                  "focusRing": {
                    "width": "{focus.ring.width}",
                    "style": "{focus.ring.style}",
                    "color": "{focus.ring.color}",
                    "offset": "{focus.ring.offset}",
                    "shadow": "{focus.ring.shadow}"
                  }
                },
                "paginatorTop": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "paginatorBottom": {
                  "borderColor": "{content.border.color}",
                  "borderWidth": "0 0 1px 0"
                },
                "colorScheme": {
                  "light": {
                    "root": {
                      "borderColor": "{content.border.color}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.100}"
                    }
                  },
                  "dark": {
                    "root": {
                      "borderColor": "{surface.800}"
                    },
                    "bodyCell": {
                      "selectedBorderColor": "{primary.900}"
                    }
                  }
                }
              },
              "virtualscroller": {
                "loader": {
                  "mask": {
                    "background": "{content.background}",
                    "color": "{text.muted.color}"
                  },
                  "icon": {
                    "size": "2rem"
                  }
                }
              }
            }
          },
          "options": {
            "prefix": "p",
            "darkModeSelector": "none",
            "cssLayer": {
              "name": "primevue",
              "order": "tailwind-base, primevue, tailwind-utilities"
            }
          }
        }
      },
      "components": [
        {
          "name": "PrimeAutoComplete",
          "as": "AutoComplete",
          "from": "primevue/autocomplete",
          "export": "default",
          "filePath": "primevue/autocomplete",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeCalendar",
          "as": "Calendar",
          "from": "primevue/calendar",
          "export": "default",
          "filePath": "primevue/calendar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeCascadeSelect",
          "as": "CascadeSelect",
          "from": "primevue/cascadeselect",
          "export": "default",
          "filePath": "primevue/cascadeselect",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeCheckbox",
          "as": "Checkbox",
          "from": "primevue/checkbox",
          "export": "default",
          "filePath": "primevue/checkbox",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeCheckboxGroup",
          "as": "CheckboxGroup",
          "from": "primevue/checkboxgroup",
          "export": "default",
          "filePath": "primevue/checkboxgroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeChips",
          "as": "Chips",
          "from": "primevue/chips",
          "export": "default",
          "filePath": "primevue/chips",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeColorPicker",
          "as": "ColorPicker",
          "from": "primevue/colorpicker",
          "export": "default",
          "filePath": "primevue/colorpicker",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDatePicker",
          "as": "DatePicker",
          "from": "primevue/datepicker",
          "export": "default",
          "filePath": "primevue/datepicker",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDropdown",
          "as": "Dropdown",
          "from": "primevue/dropdown",
          "export": "default",
          "filePath": "primevue/dropdown",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeFloatLabel",
          "as": "FloatLabel",
          "from": "primevue/floatlabel",
          "export": "default",
          "filePath": "primevue/floatlabel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeFluid",
          "as": "Fluid",
          "from": "primevue/fluid",
          "export": "default",
          "filePath": "primevue/fluid",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeIconField",
          "as": "IconField",
          "from": "primevue/iconfield",
          "export": "default",
          "filePath": "primevue/iconfield",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeIftaLabel",
          "as": "IftaLabel",
          "from": "primevue/iftalabel",
          "export": "default",
          "filePath": "primevue/iftalabel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputChips",
          "as": "InputChips",
          "from": "primevue/inputchips",
          "export": "default",
          "filePath": "primevue/inputchips",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputGroup",
          "as": "InputGroup",
          "from": "primevue/inputgroup",
          "export": "default",
          "filePath": "primevue/inputgroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputGroupAddon",
          "as": "InputGroupAddon",
          "from": "primevue/inputgroupaddon",
          "export": "default",
          "filePath": "primevue/inputgroupaddon",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputIcon",
          "as": "InputIcon",
          "from": "primevue/inputicon",
          "export": "default",
          "filePath": "primevue/inputicon",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputMask",
          "as": "InputMask",
          "from": "primevue/inputmask",
          "export": "default",
          "filePath": "primevue/inputmask",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputNumber",
          "as": "InputNumber",
          "from": "primevue/inputnumber",
          "export": "default",
          "filePath": "primevue/inputnumber",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputOtp",
          "as": "InputOtp",
          "from": "primevue/inputotp",
          "export": "default",
          "filePath": "primevue/inputotp",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputSwitch",
          "as": "InputSwitch",
          "from": "primevue/inputswitch",
          "export": "default",
          "filePath": "primevue/inputswitch",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInputText",
          "as": "InputText",
          "from": "primevue/inputtext",
          "export": "default",
          "filePath": "primevue/inputtext",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeKnob",
          "as": "Knob",
          "from": "primevue/knob",
          "export": "default",
          "filePath": "primevue/knob",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeListbox",
          "as": "Listbox",
          "from": "primevue/listbox",
          "export": "default",
          "filePath": "primevue/listbox",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeMultiSelect",
          "as": "MultiSelect",
          "from": "primevue/multiselect",
          "export": "default",
          "filePath": "primevue/multiselect",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimePassword",
          "as": "Password",
          "from": "primevue/password",
          "export": "default",
          "filePath": "primevue/password",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeRadioButton",
          "as": "RadioButton",
          "from": "primevue/radiobutton",
          "export": "default",
          "filePath": "primevue/radiobutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeRadioButtonGroup",
          "as": "RadioButtonGroup",
          "from": "primevue/radiobuttongroup",
          "export": "default",
          "filePath": "primevue/radiobuttongroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeRating",
          "as": "Rating",
          "from": "primevue/rating",
          "export": "default",
          "filePath": "primevue/rating",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSelect",
          "as": "Select",
          "from": "primevue/select",
          "export": "default",
          "filePath": "primevue/select",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSelectButton",
          "as": "SelectButton",
          "from": "primevue/selectbutton",
          "export": "default",
          "filePath": "primevue/selectbutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSlider",
          "as": "Slider",
          "from": "primevue/slider",
          "export": "default",
          "filePath": "primevue/slider",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTextarea",
          "as": "Textarea",
          "from": "primevue/textarea",
          "export": "default",
          "filePath": "primevue/textarea",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeToggleButton",
          "as": "ToggleButton",
          "from": "primevue/togglebutton",
          "export": "default",
          "filePath": "primevue/togglebutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeToggleSwitch",
          "as": "ToggleSwitch",
          "from": "primevue/toggleswitch",
          "export": "default",
          "filePath": "primevue/toggleswitch",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTreeSelect",
          "as": "TreeSelect",
          "from": "primevue/treeselect",
          "export": "default",
          "filePath": "primevue/treeselect",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeButton",
          "as": "Button",
          "from": "primevue/button",
          "export": "default",
          "filePath": "primevue/button",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeButtonGroup",
          "as": "ButtonGroup",
          "from": "primevue/buttongroup",
          "export": "default",
          "filePath": "primevue/buttongroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSpeedDial",
          "as": "SpeedDial",
          "from": "primevue/speeddial",
          "export": "default",
          "filePath": "primevue/speeddial",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSplitButton",
          "as": "SplitButton",
          "from": "primevue/splitbutton",
          "export": "default",
          "filePath": "primevue/splitbutton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeColumn",
          "as": "Column",
          "from": "primevue/column",
          "export": "default",
          "filePath": "primevue/column",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeRow",
          "as": "Row",
          "from": "primevue/row",
          "export": "default",
          "filePath": "primevue/row",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeColumnGroup",
          "as": "ColumnGroup",
          "from": "primevue/columngroup",
          "export": "default",
          "filePath": "primevue/columngroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDataTable",
          "as": "DataTable",
          "from": "primevue/datatable",
          "export": "default",
          "filePath": "primevue/datatable",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDataView",
          "as": "DataView",
          "from": "primevue/dataview",
          "export": "default",
          "filePath": "primevue/dataview",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeOrderList",
          "as": "OrderList",
          "from": "primevue/orderlist",
          "export": "default",
          "filePath": "primevue/orderlist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeOrganizationChart",
          "as": "OrganizationChart",
          "from": "primevue/organizationchart",
          "export": "default",
          "filePath": "primevue/organizationchart",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimePaginator",
          "as": "Paginator",
          "from": "primevue/paginator",
          "export": "default",
          "filePath": "primevue/paginator",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimePickList",
          "as": "PickList",
          "from": "primevue/picklist",
          "export": "default",
          "filePath": "primevue/picklist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTree",
          "as": "Tree",
          "from": "primevue/tree",
          "export": "default",
          "filePath": "primevue/tree",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTreeTable",
          "as": "TreeTable",
          "from": "primevue/treetable",
          "export": "default",
          "filePath": "primevue/treetable",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTimeline",
          "as": "Timeline",
          "from": "primevue/timeline",
          "export": "default",
          "filePath": "primevue/timeline",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeVirtualScroller",
          "as": "VirtualScroller",
          "from": "primevue/virtualscroller",
          "export": "default",
          "filePath": "primevue/virtualscroller",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAccordion",
          "as": "Accordion",
          "from": "primevue/accordion",
          "export": "default",
          "filePath": "primevue/accordion",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAccordionPanel",
          "as": "AccordionPanel",
          "from": "primevue/accordionpanel",
          "export": "default",
          "filePath": "primevue/accordionpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAccordionHeader",
          "as": "AccordionHeader",
          "from": "primevue/accordionheader",
          "export": "default",
          "filePath": "primevue/accordionheader",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAccordionContent",
          "as": "AccordionContent",
          "from": "primevue/accordioncontent",
          "export": "default",
          "filePath": "primevue/accordioncontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAccordionTab",
          "as": "AccordionTab",
          "from": "primevue/accordiontab",
          "export": "default",
          "filePath": "primevue/accordiontab",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeCard",
          "as": "Card",
          "from": "primevue/card",
          "export": "default",
          "filePath": "primevue/card",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDeferredContent",
          "as": "DeferredContent",
          "from": "primevue/deferredcontent",
          "export": "default",
          "filePath": "primevue/deferredcontent",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDivider",
          "as": "Divider",
          "from": "primevue/divider",
          "export": "default",
          "filePath": "primevue/divider",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeFieldset",
          "as": "Fieldset",
          "from": "primevue/fieldset",
          "export": "default",
          "filePath": "primevue/fieldset",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimePanel",
          "as": "Panel",
          "from": "primevue/panel",
          "export": "default",
          "filePath": "primevue/panel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeScrollPanel",
          "as": "ScrollPanel",
          "from": "primevue/scrollpanel",
          "export": "default",
          "filePath": "primevue/scrollpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSplitter",
          "as": "Splitter",
          "from": "primevue/splitter",
          "export": "default",
          "filePath": "primevue/splitter",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSplitterPanel",
          "as": "SplitterPanel",
          "from": "primevue/splitterpanel",
          "export": "default",
          "filePath": "primevue/splitterpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeStepper",
          "as": "Stepper",
          "from": "primevue/stepper",
          "export": "default",
          "filePath": "primevue/stepper",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeStepList",
          "as": "StepList",
          "from": "primevue/steplist",
          "export": "default",
          "filePath": "primevue/steplist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeStep",
          "as": "Step",
          "from": "primevue/step",
          "export": "default",
          "filePath": "primevue/step",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeStepItem",
          "as": "StepItem",
          "from": "primevue/stepitem",
          "export": "default",
          "filePath": "primevue/stepitem",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeStepPanels",
          "as": "StepPanels",
          "from": "primevue/steppanels",
          "export": "default",
          "filePath": "primevue/steppanels",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeStepPanel",
          "as": "StepPanel",
          "from": "primevue/steppanel",
          "export": "default",
          "filePath": "primevue/steppanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTabView",
          "as": "TabView",
          "from": "primevue/tabview",
          "export": "default",
          "filePath": "primevue/tabview",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTabs",
          "as": "Tabs",
          "from": "primevue/tabs",
          "export": "default",
          "filePath": "primevue/tabs",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTabList",
          "as": "TabList",
          "from": "primevue/tablist",
          "export": "default",
          "filePath": "primevue/tablist",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTab",
          "as": "Tab",
          "from": "primevue/tab",
          "export": "default",
          "filePath": "primevue/tab",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTabPanels",
          "as": "TabPanels",
          "from": "primevue/tabpanels",
          "export": "default",
          "filePath": "primevue/tabpanels",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTabPanel",
          "as": "TabPanel",
          "from": "primevue/tabpanel",
          "export": "default",
          "filePath": "primevue/tabpanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeToolbar",
          "as": "Toolbar",
          "from": "primevue/toolbar",
          "export": "default",
          "filePath": "primevue/toolbar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeConfirmDialog",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmDialog",
          "from": "primevue/confirmdialog",
          "export": "default",
          "filePath": "primevue/confirmdialog",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeConfirmPopup",
          "use": {
            "as": "ConfirmationService"
          },
          "as": "ConfirmPopup",
          "from": "primevue/confirmpopup",
          "export": "default",
          "filePath": "primevue/confirmpopup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDialog",
          "as": "Dialog",
          "from": "primevue/dialog",
          "export": "default",
          "filePath": "primevue/dialog",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDrawer",
          "as": "Drawer",
          "from": "primevue/drawer",
          "export": "default",
          "filePath": "primevue/drawer",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDynamicDialog",
          "use": {
            "as": "DialogService"
          },
          "as": "DynamicDialog",
          "from": "primevue/dynamicdialog",
          "export": "default",
          "filePath": "primevue/dynamicdialog",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeOverlayPanel",
          "as": "OverlayPanel",
          "from": "primevue/overlaypanel",
          "export": "default",
          "filePath": "primevue/overlaypanel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimePopover",
          "as": "Popover",
          "from": "primevue/popover",
          "export": "default",
          "filePath": "primevue/popover",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSidebar",
          "as": "Sidebar",
          "from": "primevue/sidebar",
          "export": "default",
          "filePath": "primevue/sidebar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeFileUpload",
          "as": "FileUpload",
          "from": "primevue/fileupload",
          "export": "default",
          "filePath": "primevue/fileupload",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeBreadcrumb",
          "as": "Breadcrumb",
          "from": "primevue/breadcrumb",
          "export": "default",
          "filePath": "primevue/breadcrumb",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeContextMenu",
          "as": "ContextMenu",
          "from": "primevue/contextmenu",
          "export": "default",
          "filePath": "primevue/contextmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeDock",
          "as": "Dock",
          "from": "primevue/dock",
          "export": "default",
          "filePath": "primevue/dock",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeMenu",
          "as": "Menu",
          "from": "primevue/menu",
          "export": "default",
          "filePath": "primevue/menu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeMenubar",
          "as": "Menubar",
          "from": "primevue/menubar",
          "export": "default",
          "filePath": "primevue/menubar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeMegaMenu",
          "as": "MegaMenu",
          "from": "primevue/megamenu",
          "export": "default",
          "filePath": "primevue/megamenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimePanelMenu",
          "as": "PanelMenu",
          "from": "primevue/panelmenu",
          "export": "default",
          "filePath": "primevue/panelmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSteps",
          "as": "Steps",
          "from": "primevue/steps",
          "export": "default",
          "filePath": "primevue/steps",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTabMenu",
          "as": "TabMenu",
          "from": "primevue/tabmenu",
          "export": "default",
          "filePath": "primevue/tabmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTieredMenu",
          "as": "TieredMenu",
          "from": "primevue/tieredmenu",
          "export": "default",
          "filePath": "primevue/tieredmenu",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeMessage",
          "as": "Message",
          "from": "primevue/message",
          "export": "default",
          "filePath": "primevue/message",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInlineMessage",
          "as": "InlineMessage",
          "from": "primevue/inlinemessage",
          "export": "default",
          "filePath": "primevue/inlinemessage",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeToast",
          "use": {
            "as": "ToastService"
          },
          "as": "Toast",
          "from": "primevue/toast",
          "export": "default",
          "filePath": "primevue/toast",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeCarousel",
          "as": "Carousel",
          "from": "primevue/carousel",
          "export": "default",
          "filePath": "primevue/carousel",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeGalleria",
          "as": "Galleria",
          "from": "primevue/galleria",
          "export": "default",
          "filePath": "primevue/galleria",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeImage",
          "as": "Image",
          "from": "primevue/image",
          "export": "default",
          "filePath": "primevue/image",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeImageCompare",
          "as": "ImageCompare",
          "from": "primevue/imagecompare",
          "export": "default",
          "filePath": "primevue/imagecompare",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAvatar",
          "as": "Avatar",
          "from": "primevue/avatar",
          "export": "default",
          "filePath": "primevue/avatar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeAvatarGroup",
          "as": "AvatarGroup",
          "from": "primevue/avatargroup",
          "export": "default",
          "filePath": "primevue/avatargroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeBadge",
          "as": "Badge",
          "from": "primevue/badge",
          "export": "default",
          "filePath": "primevue/badge",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeBlockUI",
          "as": "BlockUI",
          "from": "primevue/blockui",
          "export": "default",
          "filePath": "primevue/blockui",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeChip",
          "as": "Chip",
          "from": "primevue/chip",
          "export": "default",
          "filePath": "primevue/chip",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeInplace",
          "as": "Inplace",
          "from": "primevue/inplace",
          "export": "default",
          "filePath": "primevue/inplace",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeMeterGroup",
          "as": "MeterGroup",
          "from": "primevue/metergroup",
          "export": "default",
          "filePath": "primevue/metergroup",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeOverlayBadge",
          "as": "OverlayBadge",
          "from": "primevue/overlaybadge",
          "export": "default",
          "filePath": "primevue/overlaybadge",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeScrollTop",
          "as": "ScrollTop",
          "from": "primevue/scrolltop",
          "export": "default",
          "filePath": "primevue/scrolltop",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeSkeleton",
          "as": "Skeleton",
          "from": "primevue/skeleton",
          "export": "default",
          "filePath": "primevue/skeleton",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeProgressBar",
          "as": "ProgressBar",
          "from": "primevue/progressbar",
          "export": "default",
          "filePath": "primevue/progressbar",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeProgressSpinner",
          "as": "ProgressSpinner",
          "from": "primevue/progressspinner",
          "export": "default",
          "filePath": "primevue/progressspinner",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTag",
          "as": "Tag",
          "from": "primevue/tag",
          "export": "default",
          "filePath": "primevue/tag",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeTerminal",
          "as": "Terminal",
          "from": "primevue/terminal",
          "export": "default",
          "filePath": "primevue/terminal",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeForm",
          "from": "@primevue/forms/form",
          "as": "Form",
          "export": "default",
          "filePath": "@primevue/forms/form",
          "global": true,
          "mode": "all"
        },
        {
          "name": "PrimeFormField",
          "from": "@primevue/forms/formfield",
          "as": "FormField",
          "export": "default",
          "filePath": "@primevue/forms/formfield",
          "global": true,
          "mode": "all"
        }
      ],
      "directives": [
        {
          "name": "badge",
          "as": "BadgeDirective",
          "from": "primevue/badgedirective"
        },
        {
          "name": "tooltip",
          "as": "Tooltip",
          "from": "primevue/tooltip"
        },
        {
          "name": "ripple",
          "as": "Ripple",
          "from": "primevue/ripple"
        },
        {
          "name": "styleclass",
          "as": "StyleClass",
          "from": "primevue/styleclass"
        },
        {
          "name": "focustrap",
          "as": "FocusTrap",
          "from": "primevue/focustrap"
        },
        {
          "name": "animateonscroll",
          "as": "AnimateOnScroll",
          "from": "primevue/animateonscroll"
        },
        {
          "name": "keyfilter",
          "as": "KeyFilter",
          "from": "primevue/keyfilter"
        }
      ],
      "composables": [
        {
          "name": "usePrimeVue",
          "as": "usePrimeVue",
          "from": "primevue/config"
        },
        {
          "name": "useStyle",
          "as": "useStyle",
          "from": "primevue/usestyle"
        },
        {
          "name": "useConfirm",
          "as": "useConfirm",
          "from": "primevue/useconfirm"
        },
        {
          "name": "useToast",
          "as": "useToast",
          "from": "primevue/usetoast"
        },
        {
          "name": "useDialog",
          "as": "useDialog",
          "from": "primevue/usedialog"
        }
      ],
      "config": [
        {
          "name": "PrimeVue",
          "as": "PrimeVue",
          "from": "primevue/config"
        }
      ],
      "services": [
        {
          "name": "ConfirmationService",
          "as": "ConfirmationService",
          "from": "primevue/confirmationservice"
        },
        {
          "name": "DialogService",
          "as": "DialogService",
          "from": "primevue/dialogservice"
        },
        {
          "name": "ToastService",
          "as": "ToastService",
          "from": "primevue/toastservice"
        }
      ],
      "styles": [
        {
          "name": "BaseStyle",
          "as": "BaseStyle",
          "from": "@primevue/core/base/style"
        },
        {
          "name": "BaseComponentStyle",
          "as": "BaseComponentStyle",
          "from": "@primevue/core/basecomponent/style"
        },
        {
          "name": "AutoCompleteStyle",
          "as": "AutoCompleteStyle",
          "from": "primevue/autocomplete/style"
        },
        {
          "name": "CalendarStyle",
          "as": "CalendarStyle",
          "from": "primevue/calendar/style"
        },
        {
          "name": "CascadeSelectStyle",
          "as": "CascadeSelectStyle",
          "from": "primevue/cascadeselect/style"
        },
        {
          "name": "CheckboxStyle",
          "as": "CheckboxStyle",
          "from": "primevue/checkbox/style"
        },
        {
          "name": "CheckboxGroupStyle",
          "as": "CheckboxGroupStyle",
          "from": "primevue/checkboxgroup/style"
        },
        {
          "name": "ChipsStyle",
          "as": "ChipsStyle",
          "from": "primevue/chips/style"
        },
        {
          "name": "ColorPickerStyle",
          "as": "ColorPickerStyle",
          "from": "primevue/colorpicker/style"
        },
        {
          "name": "DatePickerStyle",
          "as": "DatePickerStyle",
          "from": "primevue/datepicker/style"
        },
        {
          "name": "DropdownStyle",
          "as": "DropdownStyle",
          "from": "primevue/dropdown/style"
        },
        {
          "name": "FloatLabelStyle",
          "as": "FloatLabelStyle",
          "from": "primevue/floatlabel/style"
        },
        {
          "name": "FluidStyle",
          "as": "FluidStyle",
          "from": "primevue/fluid/style"
        },
        {
          "name": "IconFieldStyle",
          "as": "IconFieldStyle",
          "from": "primevue/iconfield/style"
        },
        {
          "name": "IftaLabelStyle",
          "as": "IftaLabelStyle",
          "from": "primevue/iftalabel/style"
        },
        {
          "name": "InputChipsStyle",
          "as": "InputChipsStyle",
          "from": "primevue/inputchips/style"
        },
        {
          "name": "InputGroupStyle",
          "as": "InputGroupStyle",
          "from": "primevue/inputgroup/style"
        },
        {
          "name": "InputGroupAddonStyle",
          "as": "InputGroupAddonStyle",
          "from": "primevue/inputgroupaddon/style"
        },
        {
          "name": "InputIconStyle",
          "as": "InputIconStyle",
          "from": "primevue/inputicon/style"
        },
        {
          "name": "InputMaskStyle",
          "as": "InputMaskStyle",
          "from": "primevue/inputmask/style"
        },
        {
          "name": "InputNumberStyle",
          "as": "InputNumberStyle",
          "from": "primevue/inputnumber/style"
        },
        {
          "name": "InputOtpStyle",
          "as": "InputOtpStyle",
          "from": "primevue/inputotp/style"
        },
        {
          "name": "InputSwitchStyle",
          "as": "InputSwitchStyle",
          "from": "primevue/inputswitch/style"
        },
        {
          "name": "InputTextStyle",
          "as": "InputTextStyle",
          "from": "primevue/inputtext/style"
        },
        {
          "name": "KnobStyle",
          "as": "KnobStyle",
          "from": "primevue/knob/style"
        },
        {
          "name": "ListboxStyle",
          "as": "ListboxStyle",
          "from": "primevue/listbox/style"
        },
        {
          "name": "MultiSelectStyle",
          "as": "MultiSelectStyle",
          "from": "primevue/multiselect/style"
        },
        {
          "name": "PasswordStyle",
          "as": "PasswordStyle",
          "from": "primevue/password/style"
        },
        {
          "name": "RadioButtonStyle",
          "as": "RadioButtonStyle",
          "from": "primevue/radiobutton/style"
        },
        {
          "name": "RadioButtonGroupStyle",
          "as": "RadioButtonGroupStyle",
          "from": "primevue/radiobuttongroup/style"
        },
        {
          "name": "RatingStyle",
          "as": "RatingStyle",
          "from": "primevue/rating/style"
        },
        {
          "name": "SelectStyle",
          "as": "SelectStyle",
          "from": "primevue/select/style"
        },
        {
          "name": "SelectButtonStyle",
          "as": "SelectButtonStyle",
          "from": "primevue/selectbutton/style"
        },
        {
          "name": "SliderStyle",
          "as": "SliderStyle",
          "from": "primevue/slider/style"
        },
        {
          "name": "TextareaStyle",
          "as": "TextareaStyle",
          "from": "primevue/textarea/style"
        },
        {
          "name": "ToggleButtonStyle",
          "as": "ToggleButtonStyle",
          "from": "primevue/togglebutton/style"
        },
        {
          "name": "ToggleSwitchStyle",
          "as": "ToggleSwitchStyle",
          "from": "primevue/toggleswitch/style"
        },
        {
          "name": "TreeSelectStyle",
          "as": "TreeSelectStyle",
          "from": "primevue/treeselect/style"
        },
        {
          "name": "ButtonStyle",
          "as": "ButtonStyle",
          "from": "primevue/button/style"
        },
        {
          "name": "ButtonGroupStyle",
          "as": "ButtonGroupStyle",
          "from": "primevue/buttongroup/style"
        },
        {
          "name": "SpeedDialStyle",
          "as": "SpeedDialStyle",
          "from": "primevue/speeddial/style"
        },
        {
          "name": "SplitButtonStyle",
          "as": "SplitButtonStyle",
          "from": "primevue/splitbutton/style"
        },
        {
          "name": "ColumnStyle",
          "as": "ColumnStyle",
          "from": "primevue/column/style"
        },
        {
          "name": "RowStyle",
          "as": "RowStyle",
          "from": "primevue/row/style"
        },
        {
          "name": "ColumnGroupStyle",
          "as": "ColumnGroupStyle",
          "from": "primevue/columngroup/style"
        },
        {
          "name": "DataTableStyle",
          "as": "DataTableStyle",
          "from": "primevue/datatable/style"
        },
        {
          "name": "DataViewStyle",
          "as": "DataViewStyle",
          "from": "primevue/dataview/style"
        },
        {
          "name": "OrderListStyle",
          "as": "OrderListStyle",
          "from": "primevue/orderlist/style"
        },
        {
          "name": "OrganizationChartStyle",
          "as": "OrganizationChartStyle",
          "from": "primevue/organizationchart/style"
        },
        {
          "name": "PaginatorStyle",
          "as": "PaginatorStyle",
          "from": "primevue/paginator/style"
        },
        {
          "name": "PickListStyle",
          "as": "PickListStyle",
          "from": "primevue/picklist/style"
        },
        {
          "name": "TreeStyle",
          "as": "TreeStyle",
          "from": "primevue/tree/style"
        },
        {
          "name": "TreeTableStyle",
          "as": "TreeTableStyle",
          "from": "primevue/treetable/style"
        },
        {
          "name": "TimelineStyle",
          "as": "TimelineStyle",
          "from": "primevue/timeline/style"
        },
        {
          "name": "VirtualScrollerStyle",
          "as": "VirtualScrollerStyle",
          "from": "primevue/virtualscroller/style"
        },
        {
          "name": "AccordionStyle",
          "as": "AccordionStyle",
          "from": "primevue/accordion/style"
        },
        {
          "name": "AccordionPanelStyle",
          "as": "AccordionPanelStyle",
          "from": "primevue/accordionpanel/style"
        },
        {
          "name": "AccordionHeaderStyle",
          "as": "AccordionHeaderStyle",
          "from": "primevue/accordionheader/style"
        },
        {
          "name": "AccordionContentStyle",
          "as": "AccordionContentStyle",
          "from": "primevue/accordioncontent/style"
        },
        {
          "name": "AccordionTabStyle",
          "as": "AccordionTabStyle",
          "from": "primevue/accordiontab/style"
        },
        {
          "name": "CardStyle",
          "as": "CardStyle",
          "from": "primevue/card/style"
        },
        {
          "name": "DeferredContentStyle",
          "as": "DeferredContentStyle",
          "from": "primevue/deferredcontent/style"
        },
        {
          "name": "DividerStyle",
          "as": "DividerStyle",
          "from": "primevue/divider/style"
        },
        {
          "name": "FieldsetStyle",
          "as": "FieldsetStyle",
          "from": "primevue/fieldset/style"
        },
        {
          "name": "PanelStyle",
          "as": "PanelStyle",
          "from": "primevue/panel/style"
        },
        {
          "name": "ScrollPanelStyle",
          "as": "ScrollPanelStyle",
          "from": "primevue/scrollpanel/style"
        },
        {
          "name": "SplitterStyle",
          "as": "SplitterStyle",
          "from": "primevue/splitter/style"
        },
        {
          "name": "SplitterPanelStyle",
          "as": "SplitterPanelStyle",
          "from": "primevue/splitterpanel/style"
        },
        {
          "name": "StepperStyle",
          "as": "StepperStyle",
          "from": "primevue/stepper/style"
        },
        {
          "name": "StepListStyle",
          "as": "StepListStyle",
          "from": "primevue/steplist/style"
        },
        {
          "name": "StepStyle",
          "as": "StepStyle",
          "from": "primevue/step/style"
        },
        {
          "name": "StepItemStyle",
          "as": "StepItemStyle",
          "from": "primevue/stepitem/style"
        },
        {
          "name": "StepPanelsStyle",
          "as": "StepPanelsStyle",
          "from": "primevue/steppanels/style"
        },
        {
          "name": "StepPanelStyle",
          "as": "StepPanelStyle",
          "from": "primevue/steppanel/style"
        },
        {
          "name": "TabViewStyle",
          "as": "TabViewStyle",
          "from": "primevue/tabview/style"
        },
        {
          "name": "TabsStyle",
          "as": "TabsStyle",
          "from": "primevue/tabs/style"
        },
        {
          "name": "TabListStyle",
          "as": "TabListStyle",
          "from": "primevue/tablist/style"
        },
        {
          "name": "TabStyle",
          "as": "TabStyle",
          "from": "primevue/tab/style"
        },
        {
          "name": "TabPanelsStyle",
          "as": "TabPanelsStyle",
          "from": "primevue/tabpanels/style"
        },
        {
          "name": "TabPanelStyle",
          "as": "TabPanelStyle",
          "from": "primevue/tabpanel/style"
        },
        {
          "name": "ToolbarStyle",
          "as": "ToolbarStyle",
          "from": "primevue/toolbar/style"
        },
        {
          "name": "ConfirmDialogStyle",
          "as": "ConfirmDialogStyle",
          "from": "primevue/confirmdialog/style"
        },
        {
          "name": "ConfirmPopupStyle",
          "as": "ConfirmPopupStyle",
          "from": "primevue/confirmpopup/style"
        },
        {
          "name": "DialogStyle",
          "as": "DialogStyle",
          "from": "primevue/dialog/style"
        },
        {
          "name": "DrawerStyle",
          "as": "DrawerStyle",
          "from": "primevue/drawer/style"
        },
        {
          "name": "DynamicDialogStyle",
          "as": "DynamicDialogStyle",
          "from": "primevue/dynamicdialog/style"
        },
        {
          "name": "OverlayPanelStyle",
          "as": "OverlayPanelStyle",
          "from": "primevue/overlaypanel/style"
        },
        {
          "name": "PopoverStyle",
          "as": "PopoverStyle",
          "from": "primevue/popover/style"
        },
        {
          "name": "SidebarStyle",
          "as": "SidebarStyle",
          "from": "primevue/sidebar/style"
        },
        {
          "name": "FileUploadStyle",
          "as": "FileUploadStyle",
          "from": "primevue/fileupload/style"
        },
        {
          "name": "BreadcrumbStyle",
          "as": "BreadcrumbStyle",
          "from": "primevue/breadcrumb/style"
        },
        {
          "name": "ContextMenuStyle",
          "as": "ContextMenuStyle",
          "from": "primevue/contextmenu/style"
        },
        {
          "name": "DockStyle",
          "as": "DockStyle",
          "from": "primevue/dock/style"
        },
        {
          "name": "MenuStyle",
          "as": "MenuStyle",
          "from": "primevue/menu/style"
        },
        {
          "name": "MenubarStyle",
          "as": "MenubarStyle",
          "from": "primevue/menubar/style"
        },
        {
          "name": "MegaMenuStyle",
          "as": "MegaMenuStyle",
          "from": "primevue/megamenu/style"
        },
        {
          "name": "PanelMenuStyle",
          "as": "PanelMenuStyle",
          "from": "primevue/panelmenu/style"
        },
        {
          "name": "StepsStyle",
          "as": "StepsStyle",
          "from": "primevue/steps/style"
        },
        {
          "name": "TabMenuStyle",
          "as": "TabMenuStyle",
          "from": "primevue/tabmenu/style"
        },
        {
          "name": "TieredMenuStyle",
          "as": "TieredMenuStyle",
          "from": "primevue/tieredmenu/style"
        },
        {
          "name": "MessageStyle",
          "as": "MessageStyle",
          "from": "primevue/message/style"
        },
        {
          "name": "InlineMessageStyle",
          "as": "InlineMessageStyle",
          "from": "primevue/inlinemessage/style"
        },
        {
          "name": "ToastStyle",
          "as": "ToastStyle",
          "from": "primevue/toast/style"
        },
        {
          "name": "CarouselStyle",
          "as": "CarouselStyle",
          "from": "primevue/carousel/style"
        },
        {
          "name": "GalleriaStyle",
          "as": "GalleriaStyle",
          "from": "primevue/galleria/style"
        },
        {
          "name": "ImageStyle",
          "as": "ImageStyle",
          "from": "primevue/image/style"
        },
        {
          "name": "ImageCompareStyle",
          "as": "ImageCompareStyle",
          "from": "primevue/imagecompare/style"
        },
        {
          "name": "AvatarStyle",
          "as": "AvatarStyle",
          "from": "primevue/avatar/style"
        },
        {
          "name": "AvatarGroupStyle",
          "as": "AvatarGroupStyle",
          "from": "primevue/avatargroup/style"
        },
        {
          "name": "BadgeStyle",
          "as": "BadgeStyle",
          "from": "primevue/badge/style"
        },
        {
          "name": "BlockUIStyle",
          "as": "BlockUIStyle",
          "from": "primevue/blockui/style"
        },
        {
          "name": "ChipStyle",
          "as": "ChipStyle",
          "from": "primevue/chip/style"
        },
        {
          "name": "InplaceStyle",
          "as": "InplaceStyle",
          "from": "primevue/inplace/style"
        },
        {
          "name": "MeterGroupStyle",
          "as": "MeterGroupStyle",
          "from": "primevue/metergroup/style"
        },
        {
          "name": "OverlayBadgeStyle",
          "as": "OverlayBadgeStyle",
          "from": "primevue/overlaybadge/style"
        },
        {
          "name": "ScrollTopStyle",
          "as": "ScrollTopStyle",
          "from": "primevue/scrolltop/style"
        },
        {
          "name": "SkeletonStyle",
          "as": "SkeletonStyle",
          "from": "primevue/skeleton/style"
        },
        {
          "name": "ProgressBarStyle",
          "as": "ProgressBarStyle",
          "from": "primevue/progressbar/style"
        },
        {
          "name": "ProgressSpinnerStyle",
          "as": "ProgressSpinnerStyle",
          "from": "primevue/progressspinner/style"
        },
        {
          "name": "TagStyle",
          "as": "TagStyle",
          "from": "primevue/tag/style"
        },
        {
          "name": "TerminalStyle",
          "as": "TerminalStyle",
          "from": "primevue/terminal/style"
        },
        {
          "name": "FormStyle",
          "as": "FormStyle",
          "from": "@primevue/forms/form/style"
        },
        {
          "name": "FormFieldStyle",
          "as": "FormFieldStyle",
          "from": "@primevue/forms/formfield/style"
        },
        {
          "name": "BadgeDirectiveStyle",
          "as": "BadgeDirectiveStyle",
          "from": "primevue/badgedirective/style"
        },
        {
          "name": "TooltipStyle",
          "as": "TooltipStyle",
          "from": "primevue/tooltip/style"
        },
        {
          "name": "RippleStyle",
          "as": "RippleStyle",
          "from": "primevue/ripple/style"
        },
        {
          "name": "StyleClassStyle",
          "as": "StyleClassStyle",
          "from": "primevue/styleclass/style"
        },
        {
          "name": "FocusTrapStyle",
          "as": "FocusTrapStyle",
          "from": "primevue/focustrap/style"
        },
        {
          "name": "AnimateOnScrollStyle",
          "as": "AnimateOnScrollStyle",
          "from": "primevue/animateonscroll/style"
        },
        {
          "name": "KeyFilterStyle",
          "as": "KeyFilterStyle",
          "from": "primevue/keyfilter/style"
        }
      ],
      "injectStylesAsString": [],
      "injectStylesAsStringToTop": [
        ""
      ]
    }
  },
  "icon": {
    "serverKnownCssClasses": []
  },
  "session": {
    "name": "nuxt-session",
    "password": "2a72gha4eqrt2548ahd0b72292jsmd1bd73g3bn2u2gf2hjk4wd6bht0df",
    "cookie": {
      "sameSite": "lax"
    }
  },
  "hash": {
    "scrypt": {}
  },
  "webauthn": {
    "register": {},
    "authenticate": {}
  },
  "oauth": {
    "gitea": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "baseURL": ""
    },
    "github": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "gitlab": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "baseURL": "https://gitlab.com"
    },
    "spotify": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "google": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "twitch": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "auth0": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "audience": "",
      "redirectURL": ""
    },
    "workos": {
      "clientId": "",
      "clientSecret": "",
      "connectionId": "",
      "screenHint": "",
      "redirectURL": ""
    },
    "microsoft": {
      "clientId": "",
      "clientSecret": "",
      "tenant": "",
      "scope": [],
      "authorizationURL": "",
      "tokenURL": "",
      "userURL": "",
      "redirectURL": ""
    },
    "azureb2c": {
      "clientId": "",
      "policy": "",
      "tenant": "",
      "scope": [],
      "authorizationURL": "",
      "tokenURL": "",
      "userURL": "",
      "redirectURL": ""
    },
    "discord": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "battledotnet": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "bluesky": {
      "clientMetadataFilename": "",
      "clientName": "",
      "clientUri": "",
      "logoUri": "",
      "policyUri": "",
      "tosUri": "",
      "scope": [
        "atproto"
      ],
      "grantTypes": [
        "authorization_code"
      ],
      "responseTypes": [
        "code"
      ],
      "applicationType": "web",
      "redirectUris": [],
      "dpopBoundAccessTokens": true,
      "tokenEndpointAuthMethod": "none"
    },
    "keycloak": {
      "clientId": "",
      "clientSecret": "",
      "serverUrl": "",
      "serverUrlInternal": "",
      "realm": "",
      "redirectURL": ""
    },
    "linear": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "linkedin": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "cognito": {
      "clientId": "",
      "clientSecret": "",
      "region": "",
      "userPoolId": "",
      "redirectURL": ""
    },
    "facebook": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "instagram": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "paypal": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "steam": {
      "apiKey": "",
      "redirectURL": ""
    },
    "x": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "xsuaa": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "redirectURL": ""
    },
    "vk": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "yandex": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "tiktok": {
      "clientKey": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "dropbox": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "polar": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "zitadel": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "redirectURL": ""
    },
    "authentik": {
      "clientId": "",
      "clientSecret": "",
      "domain": "",
      "redirectURL": ""
    },
    "seznam": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "strava": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "hubspot": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "line": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "atlassian": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "apple": {
      "teamId": "",
      "keyId": "",
      "privateKey": "",
      "redirectURL": "",
      "clientId": ""
    },
    "kick": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": ""
    },
    "livechat": {
      "clientId": "",
      "clientSecret": ""
    },
    "salesforce": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "baseURL": "",
      "scope": ""
    },
    "slack": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "scope": ""
    },
    "heroku": {
      "clientId": "",
      "clientSecret": "",
      "redirectURL": "",
      "scope": ""
    }
  },
  "nodemailer": {
    "from": "\"Next Port Express\" <info@nextportexpress.com>",
    "host": "nextportexpress.com",
    "port": 465,
    "secure": true,
    "service": "",
    "auth": {
      "user": "info@nextportexpress.com",
      "pass": "NextPortExpress101"
    }
  },
  "ipx": {
    "baseURL": "/_ipx",
    "alias": {},
    "fs": {
      "dir": "../public"
    },
    "http": {
      "domains": []
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function defineNitroPlugin$1(def) {
  return def;
}

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c) => c.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}

const storageKeyProperties = [
  "has",
  "hasItem",
  "get",
  "getItem",
  "getItemRaw",
  "set",
  "setItem",
  "setItemRaw",
  "del",
  "remove",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base) {
  if (base) {
    return key.startsWith(base) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base)
      );
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]?.();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(err, createError);
  }
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore, maxDepth) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        if (maxDepth === void 0 || maxDepth > 0) {
          const dirFiles = await readdirRecursive(
            entryPath,
            ignore,
            maxDepth === void 0 ? void 0 : maxDepth - 1
          );
          files.push(...dirFiles.map((f) => entry.name + "/" + f));
        }
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    flags: {
      maxDepth: true
    },
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys(_base, topts) {
      return readdirRecursive(r("."), opts.ignore, topts?.maxDepth);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"./.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function serialize$1(o){return typeof o=="string"?`'${o}'`:new c().serialize(o)}const c=/*@__PURE__*/function(){class o{#t=new Map;compare(t,r){const e=typeof t,n=typeof r;return e==="string"&&n==="string"?t.localeCompare(r):e==="number"&&n==="number"?t-r:String.prototype.localeCompare.call(this.serialize(t,true),this.serialize(r,true))}serialize(t,r){if(t===null)return "null";switch(typeof t){case "string":return r?t:`'${t}'`;case "bigint":return `${t}n`;case "object":return this.$object(t);case "function":return this.$function(t)}return String(t)}serializeObject(t){const r=Object.prototype.toString.call(t);if(r!=="[object Object]")return this.serializeBuiltInType(r.length<10?`unknown:${r}`:r.slice(8,-1),t);const e=t.constructor,n=e===Object||e===void 0?"":e.name;if(n!==""&&globalThis[n]===e)return this.serializeBuiltInType(n,t);if(typeof t.toJSON=="function"){const i=t.toJSON();return n+(i!==null&&typeof i=="object"?this.$object(i):`(${this.serialize(i)})`)}return this.serializeObjectEntries(n,Object.entries(t))}serializeBuiltInType(t,r){const e=this["$"+t];if(e)return e.call(this,r);if(typeof r?.entries=="function")return this.serializeObjectEntries(t,r.entries());throw new Error(`Cannot serialize ${t}`)}serializeObjectEntries(t,r){const e=Array.from(r).sort((i,a)=>this.compare(i[0],a[0]));let n=`${t}{`;for(let i=0;i<e.length;i++){const[a,l]=e[i];n+=`${this.serialize(a,true)}:${this.serialize(l)}`,i<e.length-1&&(n+=",");}return n+"}"}$object(t){let r=this.#t.get(t);return r===void 0&&(this.#t.set(t,`#${this.#t.size}`),r=this.serializeObject(t),this.#t.set(t,r)),r}$function(t){const r=Function.prototype.toString.call(t);return r.slice(-15)==="[native code] }"?`${t.name||""}()[native]`:`${t.name}(${t.length})${r.replace(/\s*\n\s*/g,"")}`}$Array(t){let r="[";for(let e=0;e<t.length;e++)r+=this.serialize(t[e]),e<t.length-1&&(r+=",");return r+"]"}$Date(t){try{return `Date(${t.toISOString()})`}catch{return "Date(null)"}}$ArrayBuffer(t){return `ArrayBuffer[${new Uint8Array(t).join(",")}]`}$Set(t){return `Set${this.$Array(Array.from(t).sort((r,e)=>this.compare(r,e)))}`}$Map(t){return this.serializeObjectEntries("Map",t.entries())}}for(const s of ["Error","RegExp","URL"])o.prototype["$"+s]=function(t){return `${s}(${t})`};for(const s of ["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join(",")}]`};for(const s of ["BigInt64Array","BigUint64Array"])o.prototype["$"+s]=function(t){return `${s}[${t.join("n,")}${t.length>0?"n":""}]`};return o}();

const e=globalThis.process?.getBuiltinModule?.("crypto")?.hash,r="sha256",s="base64url";function digest(t){if(e)return e(r,t,s);const o=createHash(r).update(t);return globalThis.process?.versions?.webcontainer?o.digest().toString(s):o.digest(s)}

function hash$1(input) {
  return digest(serialize$1(input));
}

function hash(value) {
  return digest(typeof value === "string" ? value : serialize(value)).replace(/[-_]/g, "").slice(0, 10);
}
function serialize(object) {
  const hasher = new Hasher();
  hasher.dispatch(object);
  return hasher.buff;
}
class Hasher {
  buff = "";
  #context = /* @__PURE__ */ new Map();
  write(str) {
    this.buff += str;
  }
  dispatch(value) {
    const type = value === null ? "null" : typeof value;
    return this[type](value);
  }
  object(object) {
    if (object && typeof object.toJSON === "function") {
      return this.object(object.toJSON());
    }
    const objString = Object.prototype.toString.call(object);
    let objType = "";
    const objectLength = objString.length;
    objType = objectLength < 10 ? "unknown:[" + objString + "]" : objString.slice(8, objectLength - 1);
    objType = objType.toLowerCase();
    let objectNumber = null;
    if ((objectNumber = this.#context.get(object)) === void 0) {
      this.#context.set(object, this.#context.size);
    } else {
      return this.dispatch("[CIRCULAR:" + objectNumber + "]");
    }
    if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
      this.write("buffer:");
      return this.write(object.toString("utf8"));
    }
    if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
      if (this[objType]) {
        this[objType](object);
      } else {
        this.unknown(object, objType);
      }
    } else {
      const keys = Object.keys(object).sort();
      const extraKeys = [];
      this.write("object:" + (keys.length + extraKeys.length) + ":");
      const dispatchForKey = (key) => {
        this.dispatch(key);
        this.write(":");
        this.dispatch(object[key]);
        this.write(",");
      };
      for (const key of keys) {
        dispatchForKey(key);
      }
      for (const key of extraKeys) {
        dispatchForKey(key);
      }
    }
  }
  array(arr, unordered) {
    unordered = unordered === void 0 ? false : unordered;
    this.write("array:" + arr.length + ":");
    if (!unordered || arr.length <= 1) {
      for (const entry of arr) {
        this.dispatch(entry);
      }
      return;
    }
    const contextAdditions = /* @__PURE__ */ new Map();
    const entries = arr.map((entry) => {
      const hasher = new Hasher();
      hasher.dispatch(entry);
      for (const [key, value] of hasher.#context) {
        contextAdditions.set(key, value);
      }
      return hasher.toString();
    });
    this.#context = contextAdditions;
    entries.sort();
    return this.array(entries, false);
  }
  date(date) {
    return this.write("date:" + date.toJSON());
  }
  symbol(sym) {
    return this.write("symbol:" + sym.toString());
  }
  unknown(value, type) {
    this.write(type);
    if (!value) {
      return;
    }
    this.write(":");
    if (value && typeof value.entries === "function") {
      return this.array(
        [...value.entries()],
        true
        /* ordered */
      );
    }
  }
  error(err) {
    return this.write("error:" + err.toString());
  }
  boolean(bool) {
    return this.write("bool:" + bool);
  }
  string(string) {
    this.write("string:" + string.length + ":");
    this.write(string);
  }
  function(fn) {
    this.write("fn:");
    if (isNativeFunction(fn)) {
      this.dispatch("[native]");
    } else {
      this.dispatch(fn.toString());
    }
  }
  number(number) {
    return this.write("number:" + number);
  }
  null() {
    return this.write("Null");
  }
  undefined() {
    return this.write("Undefined");
  }
  regexp(regex) {
    return this.write("regex:" + regex.toString());
  }
  arraybuffer(arr) {
    this.write("arraybuffer:");
    return this.dispatch(new Uint8Array(arr));
  }
  url(url) {
    return this.write("url:" + url.toString());
  }
  map(map) {
    this.write("map:");
    const arr = [...map];
    return this.array(arr, false);
  }
  set(set) {
    this.write("set:");
    const arr = [...set];
    return this.array(arr, false);
  }
  bigint(number) {
    return this.write("bigint:" + number.toString());
  }
}
for (const type of [
  "uint8array",
  "uint8clampedarray",
  "unt8array",
  "uint16array",
  "unt16array",
  "uint32array",
  "unt32array",
  "float32array",
  "float64array"
]) {
  Hasher.prototype[type] = function(arr) {
    this.write(type + ":");
    return this.array([...arr], false);
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.waitUntil = incomingEvent.waitUntil;
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function defineRenderHandler(render) {
  const runtimeConfig = useRuntimeConfig();
  return eventHandler(async (event) => {
    const nitroApp = useNitroApp();
    const ctx = { event, render, response: void 0 };
    await nitroApp.hooks.callHook("render:before", ctx);
    if (!ctx.response) {
      if (event.path === `${runtimeConfig.app.baseURL}favicon.ico`) {
        setResponseHeader(event, "Content-Type", "image/x-icon");
        return send(
          event,
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
        );
      }
      ctx.response = await ctx.render(event);
      if (!ctx.response) {
        const _currentStatus = getResponseStatus(event);
        setResponseStatus(event, _currentStatus === 200 ? 500 : _currentStatus);
        return send(
          event,
          "No response returned from render handler: " + event.path
        );
      }
    }
    await nitroApp.hooks.callHook("render:response", ctx.response, ctx);
    if (ctx.response.headers) {
      setResponseHeaders(event, ctx.response.headers);
    }
    if (ctx.response.statusCode || ctx.response.statusMessage) {
      setResponseStatus(
        event,
        ctx.response.statusCode,
        ctx.response.statusMessage
      );
    }
    return ctx.response.body;
  });
}

const config$1 = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config$1.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}

function buildAssetsDir() {
  return useRuntimeConfig().app.buildAssetsDir;
}
function buildAssetsURL(...path) {
  return joinRelativeURL(publicAssetsURL(), buildAssetsDir(), ...path);
}
function publicAssetsURL(...path) {
  const app = useRuntimeConfig().app;
  const publicBase = app.cdnURL || app.baseURL;
  return path.length ? joinRelativeURL(publicBase, ...path) : publicBase;
}

const useNodeMailer = () => {
  const { nodemailer } = useRuntimeConfig();
  const transport = createTransport(nodemailer);
  const sendMail = (options) => transport.sendMail({
    from: nodemailer.from,
    ...options
  });
  return {
    nodemailer,
    sendMail,
    transport
  };
};

const sessionHooks = createHooks();
async function getUserSession(event) {
  const session = await _useSession(event);
  return {
    id: session.id,
    ...session.data
  };
}
async function setUserSession(event, data, config) {
  const session = await _useSession(event, config);
  await session.update(defu(data, session.data));
  return session.data;
}
async function clearUserSession(event, config) {
  const session = await _useSession(event, config);
  await sessionHooks.callHookParallel("clear", session.data, event);
  await session.clear();
  return true;
}
async function requireUserSession(event, opts = {}) {
  const userSession = await getUserSession(event);
  if (!userSession.user) {
    if (isEvent(event)) {
      throw createError$1({
        statusCode: opts.statusCode || 401,
        message: opts.message || "Unauthorized"
      });
    } else {
      throw new Response(opts.message || "Unauthorized", {
        status: opts.statusCode || 401
      });
    }
  }
  return userSession;
}
let sessionConfig;
function _useSession(event, config = {}) {
  if (!sessionConfig) {
    const runtimeConfig = useRuntimeConfig(isEvent(event) ? event : void 0);
    const envSessionPassword = `${runtimeConfig.nitro?.envPrefix || "NUXT_"}SESSION_PASSWORD`;
    sessionConfig = defu({ password: process.env[envSessionPassword] }, runtimeConfig.session);
  }
  const finalConfig = defu(config, sessionConfig);
  return useSession(event, finalConfig);
}

function randomString(lengthOrPattern, type) {
  const DEFAULT_STR_LENGTH = 16;
  const charSets = {
    numeric: "0123456789",
    num: "0123456789",
    alphabetic: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    alpha: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    alphanumeric: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    alphanum: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  };
  const getUnbiasedRandomChar = (charset) => {
    const charsetLength = charset.length;
    const bytesNeeded = Math.ceil(Math.log(charsetLength) / Math.log(256));
    const maxValidValue = Math.floor(256 ** bytesNeeded / charsetLength) * charsetLength;
    while (true) {
      const randomBytes = crypto.randomBytes(bytesNeeded);
      let randomValue = 0;
      for (let i = 0; i < bytesNeeded; i++) {
        randomValue = randomValue * 256 + randomBytes[i];
      }
      if (randomValue < maxValidValue) {
        return charset[randomValue % charsetLength];
      }
    }
  };
  if (lengthOrPattern === void 0 || lengthOrPattern === null || typeof lengthOrPattern === "number") {
    const length = lengthOrPattern || DEFAULT_STR_LENGTH;
    const charset = type ? charSets[type] : charSets["alphanumeric"];
    let token = "";
    for (let i = 0; i < length; i++) {
      token += getUnbiasedRandomChar(charset);
    }
    return token;
  }
  const pattern = lengthOrPattern;
  return pattern.replace(/[9aA]/g, (match) => {
    let charset = "";
    if (match === "9") charset = charSets.numeric;
    else if (match === "A") charset = charSets.uppercase;
    else if (match === "a") charset = charSets.alphabetic;
    return getUnbiasedRandomChar(charset);
  });
}

var inlineStyles$j = {
  root: {
    position: 'relative'
  }
};
var classes$1I = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-autocomplete p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled || isNotEmpty(instance.inputValue),
      'p-inputwrapper-focus': instance.focused,
      'p-autocomplete-open': instance.overlayVisible,
      'p-autocomplete-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-autocomplete-input',
  inputMultiple: function inputMultiple(_ref2) {
    var instance = _ref2.instance;
    return ['p-autocomplete-input-multiple', {
      'p-variant-filled': instance.$variant === 'filled'
    }];
  },
  chipItem: function chipItem(_ref3) {
    var instance = _ref3.instance,
      i = _ref3.i;
    return ['p-autocomplete-chip-item', {
      'p-focus': instance.focusedMultipleOptionIndex === i
    }];
  },
  pcChip: 'p-autocomplete-chip',
  chipIcon: 'p-autocomplete-chip-icon',
  inputChip: 'p-autocomplete-input-chip',
  loader: 'p-autocomplete-loader',
  dropdown: 'p-autocomplete-dropdown',
  overlay: 'p-autocomplete-overlay p-component',
  listContainer: 'p-autocomplete-list-container',
  list: 'p-autocomplete-list',
  optionGroup: 'p-autocomplete-option-group',
  option: function option(_ref4) {
    var instance = _ref4.instance,
      _option = _ref4.option,
      i = _ref4.i,
      getItemOptions = _ref4.getItemOptions;
    return ['p-autocomplete-option', {
      'p-autocomplete-option-selected': instance.isSelected(_option),
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: 'p-autocomplete-empty-message'
};
var AutoCompleteStyle = BaseStyle.extend({
  name: 'autocomplete',
  style: style,
  classes: classes$1I,
  inlineStyles: inlineStyles$j
});

var CalendarStyle = BaseStyle.extend({
  name: 'calendar'
});

var inlineStyles$i = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1H = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-cascadeselect p-component p-inputwrapper', {
      'p-cascadeselect-mobile': instance.queryMatches,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-cascadeselect-open': instance.overlayVisible,
      'p-cascadeselect-fluid': instance.$fluid,
      'p-cascadeselect-sm p-inputfield-sm': props.size === 'small',
      'p-cascadeselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  label: function label(_ref3) {
    var _instance$label;
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-cascadeselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-cascadeselect-label-empty': !instance.$slots['value'] && (instance.label === 'p-emptylabel' || ((_instance$label = instance.label) === null || _instance$label === void 0 ? void 0 : _instance$label.length) === 0)
    }];
  },
  clearIcon: 'p-cascadeselect-clear-icon',
  dropdown: 'p-cascadeselect-dropdown',
  loadingIcon: 'p-cascadeselect-loading-icon',
  dropdownIcon: 'p-cascadeselect-dropdown-icon',
  overlay: function overlay(_ref4) {
    var instance = _ref4.instance;
    return ['p-cascadeselect-overlay p-component', {
      'p-cascadeselect-mobile-active': instance.queryMatches
    }];
  },
  listContainer: 'p-cascadeselect-list-container',
  list: 'p-cascadeselect-list',
  option: function option(_ref5) {
    var instance = _ref5.instance,
      processedOption = _ref5.processedOption;
    return ['p-cascadeselect-option', {
      'p-cascadeselect-option-active': instance.isOptionActive(processedOption),
      'p-cascadeselect-option-selected': instance.isOptionSelected(processedOption),
      'p-focus': instance.isOptionFocused(processedOption),
      'p-disabled': instance.isOptionDisabled(processedOption)
    }];
  },
  optionContent: 'p-cascadeselect-option-content',
  optionText: 'p-cascadeselect-option-text',
  groupIconContainer: 'p-cascadeselect-group-icon-container',
  groupIcon: 'p-cascadeselect-group-icon',
  optionList: 'p-cascadeselect-overlay p-cascadeselect-option-list'
};
var CascadeSelectStyle = BaseStyle.extend({
  name: 'cascadeselect',
  style: style$1,
  classes: classes$1H,
  inlineStyles: inlineStyles$i
});

var classes$1G = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-checkbox p-component', {
      'p-checkbox-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$pcCheckboxGroup ? instance.$pcCheckboxGroup.$invalid : instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-checkbox-sm p-inputfield-sm': props.size === 'small',
      'p-checkbox-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  box: 'p-checkbox-box',
  input: 'p-checkbox-input',
  icon: 'p-checkbox-icon'
};
var CheckboxStyle = BaseStyle.extend({
  name: 'checkbox',
  style: style$2,
  classes: classes$1G
});

var classes$1F = {
  root: 'p-checkbox-group p-component'
};
var CheckboxGroupStyle = BaseStyle.extend({
  name: 'checkboxgroup',
  style: style$3,
  classes: classes$1F
});

var ChipsStyle = BaseStyle.extend({
  name: 'chips'
});

var classes$1E = {
  root: 'p-colorpicker p-component',
  preview: function preview(_ref) {
    var props = _ref.props;
    return ['p-colorpicker-preview', {
      'p-disabled': props.disabled
    }];
  },
  panel: function panel(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-colorpicker-panel', {
      'p-colorpicker-panel-inline': props.inline,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  colorSelector: 'p-colorpicker-color-selector',
  colorBackground: 'p-colorpicker-color-background',
  colorHandle: 'p-colorpicker-color-handle',
  hue: 'p-colorpicker-hue',
  hueHandle: 'p-colorpicker-hue-handle'
};
var ColorPickerStyle = BaseStyle.extend({
  name: 'colorpicker',
  style: style$4,
  classes: classes$1E
});

var inlineStyles$h = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1D = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      state = _ref2.state;
    return ['p-datepicker p-component p-inputwrapper', {
      'p-invalid': instance.$invalid,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': state.focused || state.overlayVisible,
      'p-focus': state.focused || state.overlayVisible,
      'p-datepicker-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-datepicker-input',
  dropdown: 'p-datepicker-dropdown',
  inputIconContainer: 'p-datepicker-input-icon-container',
  inputIcon: 'p-datepicker-input-icon',
  panel: function panel(_ref3) {
    var props = _ref3.props;
    return ['p-datepicker-panel p-component', {
      'p-datepicker-panel-inline': props.inline,
      'p-disabled': props.disabled,
      'p-datepicker-timeonly': props.timeOnly
    }];
  },
  calendarContainer: 'p-datepicker-calendar-container',
  calendar: 'p-datepicker-calendar',
  header: 'p-datepicker-header',
  pcPrevButton: 'p-datepicker-prev-button',
  title: 'p-datepicker-title',
  selectMonth: 'p-datepicker-select-month',
  selectYear: 'p-datepicker-select-year',
  decade: 'p-datepicker-decade',
  pcNextButton: 'p-datepicker-next-button',
  dayView: 'p-datepicker-day-view',
  weekHeader: 'p-datepicker-weekheader p-disabled',
  weekNumber: 'p-datepicker-weeknumber',
  weekLabelContainer: 'p-datepicker-weeklabel-container p-disabled',
  weekDayCell: 'p-datepicker-weekday-cell',
  weekDay: 'p-datepicker-weekday',
  dayCell: function dayCell(_ref4) {
    var date = _ref4.date;
    return ['p-datepicker-day-cell', {
      'p-datepicker-other-month': date.otherMonth,
      'p-datepicker-today': date.today
    }];
  },
  day: function day(_ref5) {
    var instance = _ref5.instance,
      props = _ref5.props,
      state = _ref5.state,
      date = _ref5.date;
    var selectedDayClass = '';
    if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
      selectedDayClass = instance.isDateEquals(state.d_value[0], date) || instance.isDateEquals(state.d_value[1], date) ? 'p-datepicker-day-selected' : 'p-datepicker-day-selected-range';
    }
    return ['p-datepicker-day', {
      'p-datepicker-day-selected': !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
      'p-disabled': props.disabled || !date.selectable
    }, selectedDayClass];
  },
  monthView: 'p-datepicker-month-view',
  month: function month(_ref6) {
    var instance = _ref6.instance,
      props = _ref6.props,
      _month = _ref6.month,
      index = _ref6.index;
    return ['p-datepicker-month', {
      'p-datepicker-month-selected': instance.isMonthSelected(index),
      'p-disabled': props.disabled || !_month.selectable
    }];
  },
  yearView: 'p-datepicker-year-view',
  year: function year(_ref7) {
    var instance = _ref7.instance,
      props = _ref7.props,
      _year = _ref7.year;
    return ['p-datepicker-year', {
      'p-datepicker-year-selected': instance.isYearSelected(_year.value),
      'p-disabled': props.disabled || !_year.selectable
    }];
  },
  timePicker: 'p-datepicker-time-picker',
  hourPicker: 'p-datepicker-hour-picker',
  pcIncrementButton: 'p-datepicker-increment-button',
  pcDecrementButton: 'p-datepicker-decrement-button',
  separator: 'p-datepicker-separator',
  minutePicker: 'p-datepicker-minute-picker',
  secondPicker: 'p-datepicker-second-picker',
  ampmPicker: 'p-datepicker-ampm-picker',
  buttonbar: 'p-datepicker-buttonbar',
  pcTodayButton: 'p-datepicker-today-button',
  pcClearButton: 'p-datepicker-clear-button'
};
var DatePickerStyle = BaseStyle.extend({
  name: 'datepicker',
  style: style$5,
  classes: classes$1D,
  inlineStyles: inlineStyles$h
});

var DropdownStyle = BaseStyle.extend({
  name: 'dropdown'
});

var classes$1C = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-floatlabel', {
      'p-floatlabel-over': props.variant === 'over',
      'p-floatlabel-on': props.variant === 'on',
      'p-floatlabel-in': props.variant === 'in'
    }];
  }
};
var FloatLabelStyle = BaseStyle.extend({
  name: 'floatlabel',
  style: style$6,
  classes: classes$1C
});

var classes$1B = {
  root: 'p-fluid'
};
var FluidStyle = BaseStyle.extend({
  name: 'fluid',
  classes: classes$1B
});

var classes$1A = {
  root: 'p-iconfield'
};
var IconFieldStyle = BaseStyle.extend({
  name: 'iconfield',
  style: style$7,
  classes: classes$1A
});

var classes$1z = {
  root: 'p-iftalabel'
};
var IftaLabelStyle = BaseStyle.extend({
  name: 'iftalabel',
  style: style$8,
  classes: classes$1z
});

var classes$1y = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputchips p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-focus': instance.focused,
      'p-inputwrapper-filled': props.modelValue && props.modelValue.length || instance.inputValue && instance.inputValue.length,
      'p-inputwrapper-focus': instance.focused
    }];
  },
  input: function input(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-inputchips-input', {
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled'
    }];
  },
  chipItem: function chipItem(_ref3) {
    var state = _ref3.state,
      index = _ref3.index;
    return ['p-inputchips-chip-item', {
      'p-focus': state.focusedIndex === index
    }];
  },
  pcChip: 'p-inputchips-chip',
  chipIcon: 'p-inputchips-chip-icon',
  inputItem: 'p-inputchips-input-item'
};
var InputChipsStyle = BaseStyle.extend({
  name: 'inputchips',
  style: style$9,
  classes: classes$1y
});

var classes$1x = {
  root: 'p-inputgroup'
};
var InputGroupStyle = BaseStyle.extend({
  name: 'inputgroup',
  style: style$a,
  classes: classes$1x
});

var classes$1w = {
  root: 'p-inputgroupaddon'
};
var InputGroupAddonStyle = BaseStyle.extend({
  name: 'inputgroupaddon',
  classes: classes$1w
});

var classes$1v = {
  root: 'p-inputicon'
};
var InputIconStyle = BaseStyle.extend({
  name: 'inputicon',
  classes: classes$1v
});

var classes$1u = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-inputmask', {
      'p-filled': instance.$filled
    }];
  }
};
var InputMaskStyle = BaseStyle.extend({
  name: 'inputmask',
  classes: classes$1u
});

var classes$1t = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputnumber p-component p-inputwrapper', {
      'p-invalid': instance.$invalid,
      'p-inputwrapper-filled': instance.$filled || props.allowEmpty === false,
      'p-inputwrapper-focus': instance.focused,
      'p-inputnumber-stacked': props.showButtons && props.buttonLayout === 'stacked',
      'p-inputnumber-horizontal': props.showButtons && props.buttonLayout === 'horizontal',
      'p-inputnumber-vertical': props.showButtons && props.buttonLayout === 'vertical',
      'p-inputnumber-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-inputnumber-input',
  buttonGroup: 'p-inputnumber-button-group',
  incrementButton: function incrementButton(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-inputnumber-button p-inputnumber-increment-button', {
      'p-disabled': props.showButtons && props.max !== null && instance.maxBoundry()
    }];
  },
  decrementButton: function decrementButton(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-inputnumber-button p-inputnumber-decrement-button', {
      'p-disabled': props.showButtons && props.min !== null && instance.minBoundry()
    }];
  }
};
var InputNumberStyle = BaseStyle.extend({
  name: 'inputnumber',
  style: style$b,
  classes: classes$1t
});

var classes$1s = {
  root: 'p-inputotp p-component',
  pcInputText: 'p-inputotp-input'
};
var InputOtpStyle = BaseStyle.extend({
  name: 'inputotp',
  style: style$c,
  classes: classes$1s
});

var InputSwitchStyle = BaseStyle.extend({
  name: 'inputswitch'
});

var classes$1r = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-inputtext p-component', {
      'p-filled': instance.$filled,
      'p-inputtext-sm p-inputfield-sm': props.size === 'small',
      'p-inputtext-lg p-inputfield-lg': props.size === 'large',
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-inputtext-fluid': instance.$fluid
    }];
  }
};
var InputTextStyle = BaseStyle.extend({
  name: 'inputtext',
  style: style$d,
  classes: classes$1r
});

var classes$1q = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-knob p-component', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  range: 'p-knob-range',
  value: 'p-knob-value',
  text: 'p-knob-text'
};
var KnobStyle = BaseStyle.extend({
  name: 'knob',
  style: style$e,
  classes: classes$1q
});

var classes$1p = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-listbox p-component', {
      'p-listbox-striped': props.striped,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  header: 'p-listbox-header',
  pcFilter: 'p-listbox-filter',
  listContainer: 'p-listbox-list-container',
  list: 'p-listbox-list',
  optionGroup: 'p-listbox-option-group',
  option: function option(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props,
      _option = _ref2.option,
      index = _ref2.index,
      getItemOptions = _ref2.getItemOptions;
    return ['p-listbox-option', {
      'p-listbox-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  optionCheckIcon: 'p-listbox-option-check-icon',
  optionBlankIcon: 'p-listbox-option-blank-icon',
  emptyMessage: 'p-listbox-empty-message'
};
var ListboxStyle = BaseStyle.extend({
  name: 'listbox',
  style: style$f,
  classes: classes$1p
});

var inlineStyles$g = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1o = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-multiselect p-component p-inputwrapper', {
      'p-multiselect-display-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-multiselect-open': instance.overlayVisible,
      'p-multiselect-fluid': instance.$fluid,
      'p-multiselect-sm p-inputfield-sm': props.size === 'small',
      'p-multiselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  labelContainer: 'p-multiselect-label-container',
  label: function label(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-multiselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-multiselect-label-empty': !props.placeholder && !instance.$filled
    }];
  },
  clearIcon: 'p-multiselect-clear-icon',
  chipItem: 'p-multiselect-chip-item',
  pcChip: 'p-multiselect-chip',
  chipIcon: 'p-multiselect-chip-icon',
  dropdown: 'p-multiselect-dropdown',
  loadingIcon: 'p-multiselect-loading-icon',
  dropdownIcon: 'p-multiselect-dropdown-icon',
  overlay: 'p-multiselect-overlay p-component',
  header: 'p-multiselect-header',
  pcFilterContainer: 'p-multiselect-filter-container',
  pcFilter: 'p-multiselect-filter',
  listContainer: 'p-multiselect-list-container',
  list: 'p-multiselect-list',
  optionGroup: 'p-multiselect-option-group',
  option: function option(_ref4) {
    var instance = _ref4.instance,
      _option = _ref4.option,
      index = _ref4.index,
      getItemOptions = _ref4.getItemOptions,
      props = _ref4.props;
    return ['p-multiselect-option', {
      'p-multiselect-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: 'p-multiselect-empty-message'
};
var MultiSelectStyle = BaseStyle.extend({
  name: 'multiselect',
  style: style$g,
  classes: classes$1o,
  inlineStyles: inlineStyles$g
});

var inlineStyles$f = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1n = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-password p-component p-inputwrapper', {
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused,
      'p-password-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-password-input',
  maskIcon: 'p-password-toggle-mask-icon p-password-mask-icon',
  unmaskIcon: 'p-password-toggle-mask-icon p-password-unmask-icon',
  overlay: 'p-password-overlay p-component',
  content: 'p-password-content',
  meter: 'p-password-meter',
  meterLabel: function meterLabel(_ref3) {
    var instance = _ref3.instance;
    return "p-password-meter-label ".concat(instance.meter ? 'p-password-meter-' + instance.meter.strength : '');
  },
  meterText: 'p-password-meter-text'
};
var PasswordStyle = BaseStyle.extend({
  name: 'password',
  style: style$h,
  classes: classes$1n,
  inlineStyles: inlineStyles$f
});

var classes$1m = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-radiobutton p-component', {
      'p-radiobutton-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$pcRadioButtonGroup ? instance.$pcRadioButtonGroup.$invalid : instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-radiobutton-sm p-inputfield-sm': props.size === 'small',
      'p-radiobutton-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  box: 'p-radiobutton-box',
  input: 'p-radiobutton-input',
  icon: 'p-radiobutton-icon'
};
var RadioButtonStyle = BaseStyle.extend({
  name: 'radiobutton',
  style: style$i,
  classes: classes$1m
});

var classes$1l = {
  root: 'p-radiobutton-group p-component'
};
var RadioButtonGroupStyle = BaseStyle.extend({
  name: 'radiobuttongroup',
  style: style$j,
  classes: classes$1l
});

var classes$1k = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-rating', {
      'p-readonly': props.readonly,
      'p-disabled': props.disabled
    }];
  },
  option: function option(_ref2) {
    var instance = _ref2.instance,
      value = _ref2.value;
    return ['p-rating-option', {
      'p-rating-option-active': value <= instance.d_value,
      'p-focus-visible': value === instance.focusedOptionIndex && instance.isFocusVisibleItem
    }];
  },
  onIcon: function onIcon(_ref3) {
    var instance = _ref3.instance;
    return ['p-rating-icon p-rating-on-icon', {
      'p-invalid': instance.$invalid
    }];
  },
  offIcon: function offIcon(_ref4) {
    var instance = _ref4.instance;
    return ['p-rating-icon p-rating-off-icon', {
      'p-invalid': instance.$invalid
    }];
  }
};
var RatingStyle = BaseStyle.extend({
  name: 'rating',
  style: style$k,
  classes: classes$1k
});

var classes$1j = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props,
      state = _ref.state;
    return ['p-select p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': state.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': state.focused || state.overlayVisible,
      'p-select-open': state.overlayVisible,
      'p-select-fluid': instance.$fluid,
      'p-select-sm p-inputfield-sm': props.size === 'small',
      'p-select-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  label: function label(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-select-label', {
      'p-placeholder': !props.editable && instance.label === props.placeholder,
      'p-select-label-empty': !props.editable && !instance.$slots['value'] && (instance.label === 'p-emptylabel' || instance.label.length === 0)
    }];
  },
  clearIcon: 'p-select-clear-icon',
  dropdown: 'p-select-dropdown',
  loadingicon: 'p-select-loading-icon',
  dropdownIcon: 'p-select-dropdown-icon',
  overlay: 'p-select-overlay p-component',
  header: 'p-select-header',
  pcFilter: 'p-select-filter',
  listContainer: 'p-select-list-container',
  list: 'p-select-list',
  optionGroup: 'p-select-option-group',
  optionGroupLabel: 'p-select-option-group-label',
  option: function option(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props,
      state = _ref3.state,
      _option = _ref3.option,
      focusedOption = _ref3.focusedOption;
    return ['p-select-option', {
      'p-select-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': state.focusedOptionIndex === focusedOption,
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  optionLabel: 'p-select-option-label',
  optionCheckIcon: 'p-select-option-check-icon',
  optionBlankIcon: 'p-select-option-blank-icon',
  emptyMessage: 'p-select-empty-message'
};
var SelectStyle = BaseStyle.extend({
  name: 'select',
  style: style$l,
  classes: classes$1j
});

var classes$1i = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-selectbutton p-component', {
      'p-invalid': instance.$invalid // @todo: check
    }];
  }
};
var SelectButtonStyle = BaseStyle.extend({
  name: 'selectbutton',
  style: style$m,
  classes: classes$1i
});

var inlineStyles$e = {
  handle: {
    position: 'absolute'
  },
  range: {
    position: 'absolute'
  }
};
var classes$1h = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-slider p-component', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-slider-horizontal': props.orientation === 'horizontal',
      'p-slider-vertical': props.orientation === 'vertical'
    }];
  },
  range: 'p-slider-range',
  handle: 'p-slider-handle'
};
var SliderStyle = BaseStyle.extend({
  name: 'slider',
  style: style$n,
  classes: classes$1h,
  inlineStyles: inlineStyles$e
});

var classes$1g = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-textarea p-component', {
      'p-filled': instance.$filled,
      'p-textarea-resizable ': props.autoResize,
      'p-textarea-sm p-inputfield-sm': props.size === 'small',
      'p-textarea-lg p-inputfield-lg': props.size === 'large',
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-textarea-fluid': instance.$fluid
    }];
  }
};
var TextareaStyle = BaseStyle.extend({
  name: 'textarea',
  style: style$o,
  classes: classes$1g
});

var classes$1f = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-togglebutton p-component', {
      'p-togglebutton-checked': instance.active,
      'p-invalid': instance.$invalid,
      'p-togglebutton-sm p-inputfield-sm': props.size === 'small',
      'p-togglebutton-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  content: 'p-togglebutton-content',
  icon: 'p-togglebutton-icon',
  label: 'p-togglebutton-label'
};
var ToggleButtonStyle = BaseStyle.extend({
  name: 'togglebutton',
  style: style$p,
  classes: classes$1f
});

var inlineStyles$d = {
  root: {
    position: 'relative'
  }
};
var classes$1e = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-toggleswitch p-component', {
      'p-toggleswitch-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  input: 'p-toggleswitch-input',
  slider: 'p-toggleswitch-slider',
  handle: 'p-toggleswitch-handle'
};
var ToggleSwitchStyle = BaseStyle.extend({
  name: 'toggleswitch',
  style: style$q,
  classes: classes$1e,
  inlineStyles: inlineStyles$d
});

var inlineStyles$c = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes$1d = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-treeselect p-component p-inputwrapper', {
      'p-treeselect-display-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-focus': instance.focused,
      'p-variant-filled': instance.$variant === 'filled',
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-treeselect-open': instance.overlayVisible,
      'p-treeselect-fluid': instance.$fluid,
      'p-treeselect-sm p-inputfield-sm': props.size === 'small',
      'p-treeselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  labelContainer: 'p-treeselect-label-container',
  label: function label(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-treeselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-treeselect-label-empty': !props.placeholder && instance.emptyValue
    }];
  },
  clearIcon: 'p-treeselect-clear-icon',
  chip: 'p-treeselect-chip-item',
  pcChip: 'p-treeselect-chip',
  dropdown: 'p-treeselect-dropdown',
  dropdownIcon: 'p-treeselect-dropdown-icon',
  panel: 'p-treeselect-overlay p-component',
  treeContainer: 'p-treeselect-tree-container',
  emptyMessage: 'p-treeselect-empty-message'
};
var TreeSelectStyle = BaseStyle.extend({
  name: 'treeselect',
  style: style$r,
  classes: classes$1d,
  inlineStyles: inlineStyles$c
});

function _typeof$3(o) { "@babel/helpers - typeof"; return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$3(o); }
function _defineProperty$3(e, r, t) { return (r = _toPropertyKey$3(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$3(t) { var i = _toPrimitive$3(t, "string"); return "symbol" == _typeof$3(i) ? i : i + ""; }
function _toPrimitive$3(t, r) { if ("object" != _typeof$3(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$3(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var classes$1c = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-button p-component', _defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3(_defineProperty$3({
      'p-button-icon-only': instance.hasIcon && !props.label && !props.badge,
      'p-button-vertical': (props.iconPos === 'top' || props.iconPos === 'bottom') && props.label,
      'p-button-loading': props.loading,
      'p-button-link': props.link || props.variant === 'link'
    }, "p-button-".concat(props.severity), props.severity), 'p-button-raised', props.raised), 'p-button-rounded', props.rounded), 'p-button-text', props.text || props.variant === 'text'), 'p-button-outlined', props.outlined || props.variant === 'outlined'), 'p-button-sm', props.size === 'small'), 'p-button-lg', props.size === 'large'), 'p-button-plain', props.plain), 'p-button-fluid', instance.hasFluid)];
  },
  loadingIcon: 'p-button-loading-icon',
  icon: function icon(_ref3) {
    var props = _ref3.props;
    return ['p-button-icon', _defineProperty$3({}, "p-button-icon-".concat(props.iconPos), props.label)];
  },
  label: 'p-button-label'
};
var ButtonStyle = BaseStyle.extend({
  name: 'button',
  style: style$s,
  classes: classes$1c
});

var classes$1b = {
  root: 'p-buttongroup p-component'
};
var ButtonGroupStyle = BaseStyle.extend({
  name: 'buttongroup',
  style: style$t,
  classes: classes$1b
});

function _typeof$2(o) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$2(o); }
function _defineProperty$2(e, r, t) { return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$2(t) { var i = _toPrimitive$2(t, "string"); return "symbol" == _typeof$2(i) ? i : i + ""; }
function _toPrimitive$2(t, r) { if ("object" != _typeof$2(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$2(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* Direction */
var inlineStyles$b = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      alignItems: (props.direction === 'up' || props.direction === 'down') && 'center',
      justifyContent: (props.direction === 'left' || props.direction === 'right') && 'center',
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  },
  list: function list(_ref2) {
    var props = _ref2.props;
    return {
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  }
};
var classes$1a = {
  root: function root(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ["p-speeddial p-component p-speeddial-".concat(props.type), _defineProperty$2(_defineProperty$2(_defineProperty$2({}, "p-speeddial-direction-".concat(props.direction), props.type !== 'circle'), 'p-speeddial-open', instance.d_visible), 'p-disabled', props.disabled)];
  },
  pcButton: function pcButton(_ref5) {
    var props = _ref5.props;
    return ['p-speeddial-button', {
      'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
    }];
  },
  list: 'p-speeddial-list',
  item: 'p-speeddial-item',
  action: 'p-speeddial-action',
  actionIcon: 'p-speeddial-action-icon',
  mask: function mask(_ref6) {
    var instance = _ref6.instance;
    return ['p-speeddial-mask', {
      'p-speeddial-mask-visible': instance.d_visible
    }];
  }
};
var SpeedDialStyle = BaseStyle.extend({
  name: 'speeddial',
  style: style$u,
  classes: classes$1a,
  inlineStyles: inlineStyles$b
});

var classes$19 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-splitbutton p-component', {
      'p-splitbutton-raised': props.raised,
      'p-splitbutton-rounded': props.rounded,
      'p-splitbutton-fluid': instance.hasFluid
    }];
  },
  pcButton: 'p-splitbutton-button',
  pcDropdown: 'p-splitbutton-dropdown'
};
var SplitButtonStyle = BaseStyle.extend({
  name: 'splitbutton',
  style: style$v,
  classes: classes$19
});

var ColumnStyle = BaseStyle.extend({
  name: 'column'
});

var RowStyle = BaseStyle.extend({
  name: 'row'
});

var ColumnGroupStyle = BaseStyle.extend({
  name: 'columngroup'
});

var classes$18 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-datatable p-component', {
      'p-datatable-hoverable': props.rowHover || props.selectionMode,
      'p-datatable-resizable': props.resizableColumns,
      'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-datatable-scrollable': props.scrollable,
      'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-datatable-striped': props.stripedRows,
      'p-datatable-gridlines': props.showGridlines,
      'p-datatable-sm': props.size === 'small',
      'p-datatable-lg': props.size === 'large'
    }];
  },
  mask: 'p-datatable-mask p-overlay-mask',
  loadingIcon: 'p-datatable-loading-icon',
  header: 'p-datatable-header',
  pcPaginator: function pcPaginator(_ref2) {
    var position = _ref2.position;
    return 'p-datatable-paginator-' + position;
  },
  tableContainer: 'p-datatable-table-container',
  table: function table(_ref3) {
    var props = _ref3.props;
    return ['p-datatable-table', {
      'p-datatable-scrollable-table': props.scrollable,
      'p-datatable-resizable-table': props.resizableColumns,
      'p-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }];
  },
  thead: 'p-datatable-thead',
  headerCell: function headerCell(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props,
      column = _ref4.column;
    return column && !instance.columnProp('hidden') && (props.rowGroupMode !== 'subheader' || props.groupRowsBy !== instance.columnProp(column, 'field')) ? ['p-datatable-header-cell', {
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }] : ['p-datatable-header-cell', {
      'p-datatable-sortable-column': instance.columnProp('sortable'),
      'p-datatable-resizable-column': instance.resizableColumns,
      'p-datatable-column-sorted': instance.isColumnSorted(),
      'p-datatable-frozen-column': instance.columnProp('frozen'),
      'p-datatable-reorderable-column': props.reorderableColumns
    }];
  },
  columnResizer: 'p-datatable-column-resizer',
  columnHeaderContent: 'p-datatable-column-header-content',
  columnTitle: 'p-datatable-column-title',
  columnFooter: 'p-datatable-column-footer',
  sortIcon: 'p-datatable-sort-icon',
  pcSortBadge: 'p-datatable-sort-badge',
  filter: function filter(_ref5) {
    var props = _ref5.props;
    return ['p-datatable-filter', {
      'p-datatable-inline-filter': props.display === 'row',
      'p-datatable-popover-filter': props.display === 'menu'
    }];
  },
  filterElementContainer: 'p-datatable-filter-element-container',
  pcColumnFilterButton: 'p-datatable-column-filter-button',
  pcColumnFilterClearButton: 'p-datatable-column-filter-clear-button',
  filterOverlay: function filterOverlay(_ref6) {
    var props = _ref6.props;
    return ['p-datatable-filter-overlay p-component', {
      'p-datatable-filter-overlay-popover': props.display === 'menu'
    }];
  },
  filterConstraintList: 'p-datatable-filter-constraint-list',
  filterConstraint: function filterConstraint(_ref7) {
    var instance = _ref7.instance,
      matchMode = _ref7.matchMode;
    return ['p-datatable-filter-constraint', {
      'p-datatable-filter-constraint-selected': matchMode && instance.isRowMatchModeSelected(matchMode.value)
    }];
  },
  filterConstraintSeparator: 'p-datatable-filter-constraint-separator',
  filterOperator: 'p-datatable-filter-operator',
  pcFilterOperatorDropdown: 'p-datatable-filter-operator-dropdown',
  filterRuleList: 'p-datatable-filter-rule-list',
  filterRule: 'p-datatable-filter-rule',
  pcFilterConstraintDropdown: 'p-datatable-filter-constraint-dropdown',
  pcFilterRemoveRuleButton: 'p-datatable-filter-remove-rule-button',
  pcFilterAddRuleButton: 'p-datatable-filter-add-rule-button',
  filterButtonbar: 'p-datatable-filter-buttonbar',
  pcFilterClearButton: 'p-datatable-filter-clear-button',
  pcFilterApplyButton: 'p-datatable-filter-apply-button',
  tbody: function tbody(_ref8) {
    var props = _ref8.props;
    return props.frozenRow ? 'p-datatable-tbody p-datatable-frozen-tbody' : 'p-datatable-tbody';
  },
  rowGroupHeader: 'p-datatable-row-group-header',
  rowToggleButton: 'p-datatable-row-toggle-button',
  rowToggleIcon: 'p-datatable-row-toggle-icon',
  row: function row(_ref9) {
    var instance = _ref9.instance,
      props = _ref9.props,
      index = _ref9.index,
      columnSelectionMode = _ref9.columnSelectionMode;
    var rowStyleClass = [];
    if (props.selectionMode) {
      rowStyleClass.push('p-datatable-selectable-row');
    }
    if (props.selection) {
      rowStyleClass.push({
        'p-datatable-row-selected': columnSelectionMode ? instance.isSelected && instance.$parentInstance.$parentInstance.highlightOnSelect : instance.isSelected
      });
    }
    if (props.contextMenuSelection) {
      rowStyleClass.push({
        'p-datatable-contextmenu-row-selected': instance.isSelectedWithContextMenu
      });
    }
    rowStyleClass.push(index % 2 === 0 ? 'p-row-even' : 'p-row-odd');
    return rowStyleClass;
  },
  rowExpansion: 'p-datatable-row-expansion',
  rowGroupFooter: 'p-datatable-row-group-footer',
  emptyMessage: 'p-datatable-empty-message',
  bodyCell: function bodyCell(_ref10) {
    var instance = _ref10.instance;
    return [{
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }];
  },
  reorderableRowHandle: 'p-datatable-reorderable-row-handle',
  pcRowEditorInit: 'p-datatable-row-editor-init',
  pcRowEditorSave: 'p-datatable-row-editor-save',
  pcRowEditorCancel: 'p-datatable-row-editor-cancel',
  tfoot: 'p-datatable-tfoot',
  footerCell: function footerCell(_ref11) {
    var instance = _ref11.instance;
    return [{
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }];
  },
  virtualScrollerSpacer: 'p-datatable-virtualscroller-spacer',
  footer: 'p-datatable-footer',
  columnResizeIndicator: 'p-datatable-column-resize-indicator',
  rowReorderIndicatorUp: 'p-datatable-row-reorder-indicator-up',
  rowReorderIndicatorDown: 'p-datatable-row-reorder-indicator-down'
};
var inlineStyles$a = {
  tableContainer: {
    overflow: 'auto'
  },
  thead: {
    position: 'sticky'
  },
  tfoot: {
    position: 'sticky'
  }
};
var DataTableStyle = BaseStyle.extend({
  name: 'datatable',
  style: style$w,
  classes: classes$18,
  inlineStyles: inlineStyles$a
});

var classes$17 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-dataview p-component', {
      'p-dataview-list': props.layout === 'list',
      'p-dataview-grid': props.layout === 'grid'
    }];
  },
  header: 'p-dataview-header',
  pcPaginator: function pcPaginator(_ref2) {
    var position = _ref2.position;
    return 'p-dataview-paginator-' + position;
  },
  content: 'p-dataview-content',
  emptyMessage: 'p-dataview-empty-message',
  // TODO: remove?
  footer: 'p-dataview-footer'
};
var DataViewStyle = BaseStyle.extend({
  name: 'dataview',
  style: style$x,
  classes: classes$17
});

var classes$16 = {
  root: 'p-orderlist p-component',
  controls: 'p-orderlist-controls'
};
var OrderListStyle = BaseStyle.extend({
  name: 'orderlist',
  style: style$y,
  classes: classes$16
});

var classes$15 = {
  root: 'p-organizationchart p-component',
  table: 'p-organizationchart-table',
  node: function node(_ref) {
    var instance = _ref.instance;
    return ['p-organizationchart-node', {
      'p-organizationchart-node-selectable': instance.selectable,
      'p-organizationchart-node-selected': instance.selected
    }];
  },
  nodeToggleButton: 'p-organizationchart-node-toggle-button',
  nodeToggleButtonIcon: 'p-organizationchart-node-toggle-button-icon',
  connectors: 'p-organizationchart-connectors',
  connectorDown: 'p-organizationchart-connector-down',
  connectorLeft: function connectorLeft(_ref2) {
    var index = _ref2.index;
    return ['p-organizationchart-connector-left', {
      'p-organizationchart-connector-top': !(index === 0)
    }];
  },
  connectorRight: function connectorRight(_ref3) {
    var props = _ref3.props,
      index = _ref3.index;
    return ['p-organizationchart-connector-right', {
      'p-organizationchart-connector-top': !(index === props.node.children.length - 1)
    }];
  },
  nodeChildren: 'p-organizationchart-node-children'
};
var OrganizationChartStyle = BaseStyle.extend({
  name: 'organizationchart',
  style: style$z,
  classes: classes$15
});

function _typeof$1(o) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof$1(o); }
function _defineProperty$1(e, r, t) { return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey$1(t) { var i = _toPrimitive$1(t, "string"); return "symbol" == _typeof$1(i) ? i : i + ""; }
function _toPrimitive$1(t, r) { if ("object" != _typeof$1(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof$1(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var classes$14 = {
  paginator: function paginator(_ref) {
    var instance = _ref.instance,
      key = _ref.key;
    return ['p-paginator p-component', _defineProperty$1({
      'p-paginator-default': !instance.hasBreakpoints()
    }, "p-paginator-".concat(key), instance.hasBreakpoints())];
  },
  content: 'p-paginator-content',
  contentStart: 'p-paginator-content-start',
  contentEnd: 'p-paginator-content-end',
  first: function first(_ref3) {
    var instance = _ref3.instance;
    return ['p-paginator-first', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  firstIcon: 'p-paginator-first-icon',
  prev: function prev(_ref4) {
    var instance = _ref4.instance;
    return ['p-paginator-prev', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  prevIcon: 'p-paginator-prev-icon',
  next: function next(_ref5) {
    var instance = _ref5.instance;
    return ['p-paginator-next', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  nextIcon: 'p-paginator-next-icon',
  last: function last(_ref6) {
    var instance = _ref6.instance;
    return ['p-paginator-last', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  lastIcon: 'p-paginator-last-icon',
  pages: 'p-paginator-pages',
  page: function page(_ref7) {
    var props = _ref7.props,
      pageLink = _ref7.pageLink;
    return ['p-paginator-page', {
      'p-paginator-page-selected': pageLink - 1 === props.page
    }];
  },
  current: 'p-paginator-current',
  pcRowPerPageDropdown: 'p-paginator-rpp-dropdown',
  pcJumpToPageDropdown: 'p-paginator-jtp-dropdown',
  pcJumpToPageInputText: 'p-paginator-jtp-input'
};
var PaginatorStyle = BaseStyle.extend({
  name: 'paginator',
  style: style$A,
  classes: classes$14
});

var classes$13 = {
  root: 'p-picklist p-component',
  sourceControls: 'p-picklist-controls p-picklist-source-controls',
  sourceListContainer: 'p-picklist-list-container p-picklist-source-list-container',
  transferControls: 'p-picklist-controls p-picklist-transfer-controls',
  targetListContainer: 'p-picklist-list-container p-picklist-target-list-container',
  targetControls: 'p-picklist-controls p-picklist-target-controls'
};
var PickListStyle = BaseStyle.extend({
  name: 'picklist',
  style: style$B,
  classes: classes$13
});

var classes$12 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tree p-component', {
      'p-tree-selectable': props.selectionMode != null,
      'p-tree-loading': props.loading,
      'p-tree-flex-scrollable': props.scrollHeight === 'flex'
    }];
  },
  mask: 'p-tree-mask p-overlay-mask',
  loadingIcon: 'p-tree-loading-icon',
  pcFilterContainer: 'p-tree-filter',
  pcFilterInput: 'p-tree-filter-input',
  wrapper: 'p-tree-root',
  //TODO: discuss
  rootChildren: 'p-tree-root-children',
  node: function node(_ref2) {
    var instance = _ref2.instance;
    return ['p-tree-node', {
      'p-tree-node-leaf': instance.leaf
    }];
  },
  nodeContent: function nodeContent(_ref3) {
    var instance = _ref3.instance;
    return ['p-tree-node-content', instance.node.styleClass, {
      'p-tree-node-selectable': instance.selectable,
      'p-tree-node-selected': instance.checkboxMode && instance.$parentInstance.highlightOnSelect ? instance.checked : instance.selected
    }];
  },
  nodeToggleButton: 'p-tree-node-toggle-button',
  nodeToggleIcon: 'p-tree-node-toggle-icon',
  nodeCheckbox: 'p-tree-node-checkbox',
  nodeIcon: 'p-tree-node-icon',
  nodeLabel: 'p-tree-node-label',
  nodeChildren: 'p-tree-node-children'
};
var TreeStyle = BaseStyle.extend({
  name: 'tree',
  style: style$C,
  classes: classes$12
});

var classes$11 = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-treetable p-component', {
      'p-treetable-hoverable': props.rowHover || instance.rowSelectionMode,
      'p-treetable-resizable': props.resizableColumns,
      'p-treetable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-treetable-scrollable': props.scrollable,
      'p-treetable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-treetable-gridlines': props.showGridlines,
      'p-treetable-sm': props.size === 'small',
      'p-treetable-lg': props.size === 'large'
    }];
  },
  loading: 'p-treetable-loading',
  //TODO: required?
  mask: 'p-treetable-mask p-overlay-mask',
  loadingIcon: 'p-treetable-loading-icon',
  header: 'p-treetable-header',
  paginator: function paginator(_ref2) {
    var position = _ref2.position;
    return 'p-treetable-paginator-' + position;
  },
  tableContainer: 'p-treetable-table-container',
  table: function table(_ref3) {
    var props = _ref3.props;
    return ['p-treetable-table', {
      'p-treetable-scrollable-table': props.scrollable,
      'p-treetable-resizable-table': props.resizableColumns,
      'p-treetable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }];
  },
  thead: 'p-treetable-thead',
  headerCell: function headerCell(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props;
    return ['p-treetable-header-cell', {
      'p-treetable-sortable-column': instance.columnProp('sortable'),
      'p-treetable-resizable-column': props.resizableColumns,
      'p-treetable-column-sorted': instance.columnProp('sortable') ? instance.isColumnSorted() : false,
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  columnResizer: 'p-treetable-column-resizer',
  columnHeaderContent: 'p-treetable-column-header-content',
  columnTitle: 'p-treetable-column-title',
  sortIcon: 'p-treetable-sort-icon',
  pcSortBadge: 'p-treetable-sort-badge',
  tbody: 'p-treetable-tbody',
  row: function row(_ref5) {
    var props = _ref5.props,
      instance = _ref5.instance;
    return [{
      'p-treetable-row-selected': instance.selected,
      'p-treetable-contextmenu-row-selected': props.contextMenuSelection && instance.isSelectedWithContextMenu
    }];
  },
  bodyCell: function bodyCell(_ref6) {
    var instance = _ref6.instance;
    return [{
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  bodyCellContent: function bodyCellContent(_ref7) {
    var instance = _ref7.instance;
    return ['p-treetable-body-cell-content', {
      'p-treetable-body-cell-content-expander': instance.columnProp('expander')
    }];
  },
  nodeToggleButton: 'p-treetable-node-toggle-button',
  nodeToggleIcon: 'p-treetable-node-toggle-icon',
  pcNodeCheckbox: 'p-treetable-node-checkbox',
  emptyMessage: 'p-treetable-empty-message',
  tfoot: 'p-treetable-tfoot',
  footerCell: function footerCell(_ref8) {
    var instance = _ref8.instance;
    return [{
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  footer: 'p-treetable-footer',
  columnResizeIndicator: 'p-treetable-column-resize-indicator'
};
var inlineStyles$9 = {
  tableContainer: {
    overflow: 'auto'
  },
  thead: {
    position: 'sticky'
  },
  tfoot: {
    position: 'sticky'
  }
};
var TreeTableStyle = BaseStyle.extend({
  name: 'treetable',
  style: style$D,
  classes: classes$11,
  inlineStyles: inlineStyles$9
});

var classes$10 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-timeline p-component', 'p-timeline-' + props.align, 'p-timeline-' + props.layout];
  },
  event: 'p-timeline-event',
  eventOpposite: 'p-timeline-event-opposite',
  eventSeparator: 'p-timeline-event-separator',
  eventMarker: 'p-timeline-event-marker',
  eventConnector: 'p-timeline-event-connector',
  eventContent: 'p-timeline-event-content'
};
var TimelineStyle = BaseStyle.extend({
  name: 'timeline',
  style: style$E,
  classes: classes$10
});

var css = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader-mask {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n\n.p-virtualscroller .p-virtualscroller-loading {\n    transform: none !important;\n    min-height: 0;\n    position: sticky;\n    inset-block-start: 0;\n    inset-inline-start: 0;\n}\n";
var VirtualScrollerStyle = BaseStyle.extend({
  name: 'virtualscroller',
  css: css,
  style: style$F
});

var classes$$ = {
  root: 'p-accordion p-component'
};
var AccordionStyle = BaseStyle.extend({
  name: 'accordion',
  style: style$G,
  classes: classes$$
});

var classes$_ = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-accordionpanel', {
      'p-accordionpanel-active': instance.active,
      'p-disabled': props.disabled
    }];
  }
};
var AccordionPanelStyle = BaseStyle.extend({
  name: 'accordionpanel',
  classes: classes$_
});

var classes$Z = {
  root: 'p-accordionheader',
  toggleicon: 'p-accordionheader-toggle-icon'
};
var AccordionHeaderStyle = BaseStyle.extend({
  name: 'accordionheader',
  classes: classes$Z
});

var classes$Y = {
  root: 'p-accordioncontent',
  content: 'p-accordioncontent-content'
};
var AccordionContentStyle = BaseStyle.extend({
  name: 'accordioncontent',
  classes: classes$Y
});

var AccordionTabStyle = BaseStyle.extend({
  name: 'accordiontab'
});

var classes$X = {
  root: 'p-card p-component',
  header: 'p-card-header',
  body: 'p-card-body',
  caption: 'p-card-caption',
  title: 'p-card-title',
  subtitle: 'p-card-subtitle',
  content: 'p-card-content',
  footer: 'p-card-footer'
};
var CardStyle = BaseStyle.extend({
  name: 'card',
  style: style$H,
  classes: classes$X
});

var DeferredContentStyle = BaseStyle.extend({
  name: 'deferredcontent'
});

/* Position */
var inlineStyles$8 = {
  root: function root(_ref) {
    var props = _ref.props;
    return {
      justifyContent: props.layout === 'horizontal' ? props.align === 'center' || props.align === null ? 'center' : props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : null : null,
      alignItems: props.layout === 'vertical' ? props.align === 'center' || props.align === null ? 'center' : props.align === 'top' ? 'flex-start' : props.align === 'bottom' ? 'flex-end' : null : null
    };
  }
};
var classes$W = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-divider p-component', 'p-divider-' + props.layout, 'p-divider-' + props.type, {
      'p-divider-left': props.layout === 'horizontal' && (!props.align || props.align === 'left')
    }, {
      'p-divider-center': props.layout === 'horizontal' && props.align === 'center'
    }, {
      'p-divider-right': props.layout === 'horizontal' && props.align === 'right'
    }, {
      'p-divider-top': props.layout === 'vertical' && props.align === 'top'
    }, {
      'p-divider-center': props.layout === 'vertical' && (!props.align || props.align === 'center')
    }, {
      'p-divider-bottom': props.layout === 'vertical' && props.align === 'bottom'
    }];
  },
  content: 'p-divider-content'
};
var DividerStyle = BaseStyle.extend({
  name: 'divider',
  style: style$I,
  classes: classes$W,
  inlineStyles: inlineStyles$8
});

var classes$V = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-fieldset p-component', {
      'p-fieldset-toggleable': props.toggleable
    }];
  },
  legend: 'p-fieldset-legend',
  legendLabel: 'p-fieldset-legend-label',
  toggleButton: 'p-fieldset-toggle-button',
  toggleIcon: 'p-fieldset-toggle-icon',
  contentContainer: 'p-fieldset-content-container',
  content: 'p-fieldset-content'
};
var FieldsetStyle = BaseStyle.extend({
  name: 'fieldset',
  style: style$J,
  classes: classes$V
});

var classes$U = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-panel p-component', {
      'p-panel-toggleable': props.toggleable
    }];
  },
  header: 'p-panel-header',
  title: 'p-panel-title',
  headerActions: 'p-panel-header-actions',
  pcToggleButton: 'p-panel-toggle-button',
  contentContainer: 'p-panel-content-container',
  content: 'p-panel-content',
  footer: 'p-panel-footer'
};
var PanelStyle = BaseStyle.extend({
  name: 'panel',
  style: style$K,
  classes: classes$U
});

var classes$T = {
  root: 'p-scrollpanel p-component',
  contentContainer: 'p-scrollpanel-content-container',
  content: 'p-scrollpanel-content',
  barX: 'p-scrollpanel-bar p-scrollpanel-bar-x',
  barY: 'p-scrollpanel-bar p-scrollpanel-bar-y'
};
var ScrollPanelStyle = BaseStyle.extend({
  name: 'scrollpanel',
  style: style$L,
  classes: classes$T
});

var classes$S = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-splitter p-component', 'p-splitter-' + props.layout];
  },
  gutter: 'p-splitter-gutter',
  gutterHandle: 'p-splitter-gutter-handle'
};
var inlineStyles$7 = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return [{
      display: 'flex',
      'flex-wrap': 'nowrap'
    }, props.layout === 'vertical' ? {
      'flex-direction': 'column'
    } : ''];
  }
};
var SplitterStyle = BaseStyle.extend({
  name: 'splitter',
  style: style$M,
  classes: classes$S,
  inlineStyles: inlineStyles$7
});

var classes$R = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-splitterpanel', {
      'p-splitterpanel-nested': instance.isNested
    }];
  }
};
var SplitterPanelStyle = BaseStyle.extend({
  name: 'splitterpanel',
  classes: classes$R
});

var classes$Q = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-stepper p-component', {
      'p-readonly': props.linear
    }];
  },
  separator: 'p-stepper-separator'
};
var StepperStyle = BaseStyle.extend({
  name: 'stepper',
  style: style$N,
  classes: classes$Q
});

var classes$P = {
  root: 'p-steplist'
};
var StepListStyle = BaseStyle.extend({
  name: 'steplist',
  classes: classes$P
});

var classes$O = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-step', {
      'p-step-active': instance.active,
      'p-disabled': instance.isStepDisabled
    }];
  },
  header: 'p-step-header',
  number: 'p-step-number',
  title: 'p-step-title'
};
var StepStyle = BaseStyle.extend({
  name: 'step',
  classes: classes$O
});

var classes$N = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-stepitem', {
      'p-stepitem-active': instance.isActive
    }];
  }
};
var StepItemStyle = BaseStyle.extend({
  name: 'stepitem',
  classes: classes$N
});

var classes$M = {
  root: 'p-steppanels'
};
var StepPanelsStyle = BaseStyle.extend({
  name: 'steppanels',
  classes: classes$M
});

var classes$L = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-steppanel', {
      'p-steppanel-active': instance.isVertical && instance.active
    }];
  },
  content: 'p-steppanel-content'
};
var StepPanelStyle = BaseStyle.extend({
  name: 'steppanel',
  classes: classes$L
});

var classes$K = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tabview p-component', {
      'p-tabview-scrollable': props.scrollable
    }];
  },
  navContainer: 'p-tabview-tablist-container',
  prevButton: 'p-tabview-prev-button',
  navContent: 'p-tabview-tablist-scroll-container',
  nav: 'p-tabview-tablist',
  tab: {
    header: function header(_ref2) {
      var instance = _ref2.instance,
        tab = _ref2.tab,
        index = _ref2.index;
      return ['p-tabview-tablist-item', instance.getTabProp(tab, 'headerClass'), {
        'p-tabview-tablist-item-active': instance.d_activeIndex === index,
        'p-disabled': instance.getTabProp(tab, 'disabled')
      }];
    },
    headerAction: 'p-tabview-tab-header',
    headerTitle: 'p-tabview-tab-title',
    content: function content(_ref3) {
      var instance = _ref3.instance,
        tab = _ref3.tab;
      return ['p-tabview-panel', instance.getTabProp(tab, 'contentClass')];
    }
  },
  inkbar: 'p-tabview-ink-bar',
  nextButton: 'p-tabview-next-button',
  panelContainer: 'p-tabview-panels'
};
var TabViewStyle = BaseStyle.extend({
  name: 'tabview',
  style: style$O,
  classes: classes$K
});

var classes$J = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tabs p-component', {
      'p-tabs-scrollable': props.scrollable
    }];
  }
};
var TabsStyle = BaseStyle.extend({
  name: 'tabs',
  style: style$P,
  classes: classes$J
});

var classes$I = {
  root: 'p-tablist',
  content: function content(_ref) {
    var instance = _ref.instance;
    return ['p-tablist-content', {
      'p-tablist-viewport': instance.$pcTabs.scrollable
    }];
  },
  tabList: 'p-tablist-tab-list',
  activeBar: 'p-tablist-active-bar',
  prevButton: 'p-tablist-prev-button p-tablist-nav-button',
  nextButton: 'p-tablist-next-button p-tablist-nav-button'
};
var TabListStyle = BaseStyle.extend({
  name: 'tablist',
  classes: classes$I
});

var classes$H = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-tab', {
      'p-tab-active': instance.active,
      'p-disabled': props.disabled
    }];
  }
};
var TabStyle = BaseStyle.extend({
  name: 'tab',
  classes: classes$H
});

var classes$G = {
  root: 'p-tabpanels'
};
var TabPanelsStyle = BaseStyle.extend({
  name: 'tabpanels',
  classes: classes$G
});

var classes$F = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-tabpanel', {
      'p-tabpanel-active': instance.active
    }];
  }
};
var TabPanelStyle = BaseStyle.extend({
  name: 'tabpanel',
  classes: classes$F
});

var classes$E = {
  root: 'p-toolbar p-component',
  start: 'p-toolbar-start',
  center: 'p-toolbar-center',
  end: 'p-toolbar-end'
};
var ToolbarStyle = BaseStyle.extend({
  name: 'toolbar',
  style: style$Q,
  classes: classes$E
});

var classes$D = {
  root: 'p-confirmdialog',
  icon: 'p-confirmdialog-icon',
  message: 'p-confirmdialog-message',
  pcRejectButton: 'p-confirmdialog-reject-button',
  pcAcceptButton: 'p-confirmdialog-accept-button'
};
var ConfirmDialogStyle = BaseStyle.extend({
  name: 'confirmdialog',
  style: style$R,
  classes: classes$D
});

var classes$C = {
  root: 'p-confirmpopup p-component',
  content: 'p-confirmpopup-content',
  icon: 'p-confirmpopup-icon',
  message: 'p-confirmpopup-message',
  footer: 'p-confirmpopup-footer',
  pcRejectButton: 'p-confirmpopup-reject-button',
  pcAcceptButton: 'p-confirmpopup-accept-button'
};
var ConfirmPopupStyle = BaseStyle.extend({
  name: 'confirmpopup',
  style: style$S,
  classes: classes$C
});

/* Position */
var inlineStyles$6 = {
  mask: function mask(_ref) {
    var position = _ref.position,
      modal = _ref.modal;
    return {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: position === 'left' || position === 'topleft' || position === 'bottomleft' ? 'flex-start' : position === 'right' || position === 'topright' || position === 'bottomright' ? 'flex-end' : 'center',
      alignItems: position === 'top' || position === 'topleft' || position === 'topright' ? 'flex-start' : position === 'bottom' || position === 'bottomleft' || position === 'bottomright' ? 'flex-end' : 'center',
      pointerEvents: modal ? 'auto' : 'none'
    };
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'auto'
  }
};
var classes$B = {
  mask: function mask(_ref2) {
    var props = _ref2.props;
    var positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-dialog-mask', {
      'p-overlay-mask p-overlay-mask-enter': props.modal
    }, pos ? "p-dialog-".concat(pos) : ''];
  },
  root: function root(_ref3) {
    var props = _ref3.props,
      instance = _ref3.instance;
    return ['p-dialog p-component', {
      'p-dialog-maximized': props.maximizable && instance.maximized
    }];
  },
  header: 'p-dialog-header',
  title: 'p-dialog-title',
  headerActions: 'p-dialog-header-actions',
  pcMaximizeButton: 'p-dialog-maximize-button',
  pcCloseButton: 'p-dialog-close-button',
  content: 'p-dialog-content',
  footer: 'p-dialog-footer'
};
var DialogStyle = BaseStyle.extend({
  name: 'dialog',
  style: style$T,
  classes: classes$B,
  inlineStyles: inlineStyles$6
});

var inlineStyles$5 = {
  mask: function mask(_ref) {
    var position = _ref.position,
      modal = _ref.modal;
    return {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' : 'center',
      alignItems: position === 'top' ? 'flex-start' : position === 'bottom' ? 'flex-end' : 'center',
      pointerEvents: modal ? 'auto' : 'none'
    };
  },
  root: {
    pointerEvents: 'auto'
  }
};
var classes$A = {
  mask: function mask(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    var positions = ['left', 'right', 'top', 'bottom'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-drawer-mask', {
      'p-overlay-mask p-overlay-mask-enter': props.modal,
      'p-drawer-open': instance.containerVisible,
      'p-drawer-full': instance.fullScreen
    }, pos ? "p-drawer-".concat(pos) : ''];
  },
  root: function root(_ref3) {
    var instance = _ref3.instance;
    return ['p-drawer p-component', {
      'p-drawer-full': instance.fullScreen
    }];
  },
  header: 'p-drawer-header',
  title: 'p-drawer-title',
  pcCloseButton: 'p-drawer-close-button',
  content: 'p-drawer-content',
  footer: 'p-drawer-footer'
};
var DrawerStyle = BaseStyle.extend({
  name: 'drawer',
  style: style$U,
  classes: classes$A,
  inlineStyles: inlineStyles$5
});

var DynamicDialogStyle = BaseStyle.extend({
  name: 'dynamicdialog'
});

var OverlayPanelStyle = BaseStyle.extend({
  name: 'overlaypanel'
});

var classes$z = {
  root: 'p-popover p-component',
  content: 'p-popover-content'
};
var PopoverStyle = BaseStyle.extend({
  name: 'popover',
  style: style$V,
  classes: classes$z
});

var SidebarStyle = BaseStyle.extend({
  name: 'sidebar'
});

var classes$y = {
  root: function root(_ref) {
    var props = _ref.props;
    return ["p-fileupload p-fileupload-".concat(props.mode, " p-component")];
  },
  header: 'p-fileupload-header',
  pcChooseButton: 'p-fileupload-choose-button',
  pcUploadButton: 'p-fileupload-upload-button',
  pcCancelButton: 'p-fileupload-cancel-button',
  content: 'p-fileupload-content',
  fileList: 'p-fileupload-file-list',
  file: 'p-fileupload-file',
  fileThumbnail: 'p-fileupload-file-thumbnail',
  fileInfo: 'p-fileupload-file-info',
  fileName: 'p-fileupload-file-name',
  fileSize: 'p-fileupload-file-size',
  pcFileBadge: 'p-fileupload-file-badge',
  fileActions: 'p-fileupload-file-actions',
  pcFileRemoveButton: 'p-fileupload-file-remove-button'
};
var FileUploadStyle = BaseStyle.extend({
  name: 'fileupload',
  style: style$W,
  classes: classes$y
});

var classes$x = {
  root: 'p-breadcrumb p-component',
  list: 'p-breadcrumb-list',
  homeItem: 'p-breadcrumb-home-item',
  separator: 'p-breadcrumb-separator',
  separatorIcon: 'p-breadcrumb-separator-icon',
  item: function item(_ref) {
    var instance = _ref.instance;
    return ['p-breadcrumb-item', {
      'p-disabled': instance.disabled()
    }];
  },
  itemLink: 'p-breadcrumb-item-link',
  itemIcon: 'p-breadcrumb-item-icon',
  itemLabel: 'p-breadcrumb-item-label'
};
var BreadcrumbStyle = BaseStyle.extend({
  name: 'breadcrumb',
  style: style$X,
  classes: classes$x
});

var classes$w = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-contextmenu p-component', {
      'p-contextmenu-mobile': instance.queryMatches
    }];
  },
  rootList: 'p-contextmenu-root-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem;
    return ['p-contextmenu-item', {
      'p-contextmenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-contextmenu-item-content',
  itemLink: 'p-contextmenu-item-link',
  itemIcon: 'p-contextmenu-item-icon',
  itemLabel: 'p-contextmenu-item-label',
  submenuIcon: 'p-contextmenu-submenu-icon',
  submenu: 'p-contextmenu-submenu',
  separator: 'p-contextmenu-separator'
};
var ContextMenuStyle = BaseStyle.extend({
  name: 'contextmenu',
  style: style$Y,
  classes: classes$w
});

var classes$v = {
  root: function root(_ref) {
    var instance = _ref.instance,
      props = _ref.props;
    return ['p-dock p-component', "p-dock-".concat(props.position), {
      'p-dock-mobile': instance.queryMatches
    }];
  },
  listContainer: 'p-dock-list-container',
  list: 'p-dock-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem,
      id = _ref2.id;
    return ['p-dock-item', {
      'p-focus': instance.isItemActive(id),
      'p-disabled': instance.disabled(processedItem)
    }];
  },
  itemContent: 'p-dock-item-content',
  itemLink: 'p-dock-item-link',
  itemIcon: 'p-dock-item-icon'
};
var DockStyle = BaseStyle.extend({
  name: 'dock',
  style: style$Z,
  classes: classes$v
});

var classes$u = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-menu p-component', {
      'p-menu-overlay': props.popup
    }];
  },
  start: 'p-menu-start',
  list: 'p-menu-list',
  submenuLabel: 'p-menu-submenu-label',
  separator: 'p-menu-separator',
  end: 'p-menu-end',
  item: function item(_ref2) {
    var instance = _ref2.instance;
    return ['p-menu-item', {
      'p-focus': instance.id === instance.focusedOptionId,
      'p-disabled': instance.disabled()
    }];
  },
  itemContent: 'p-menu-item-content',
  itemLink: 'p-menu-item-link',
  itemIcon: 'p-menu-item-icon',
  itemLabel: 'p-menu-item-label'
};
var MenuStyle = BaseStyle.extend({
  name: 'menu',
  style: style$_,
  classes: classes$u
});

var inlineStyles$4 = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'flex' : 'none'
    };
  }
};
var classes$t = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-menubar p-component', {
      'p-menubar-mobile': instance.queryMatches,
      'p-menubar-mobile-active': instance.mobileActive
    }];
  },
  start: 'p-menubar-start',
  button: 'p-menubar-button',
  rootList: 'p-menubar-root-list',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-menubar-item', {
      'p-menubar-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-menubar-item-content',
  itemLink: 'p-menubar-item-link',
  itemIcon: 'p-menubar-item-icon',
  itemLabel: 'p-menubar-item-label',
  submenuIcon: 'p-menubar-submenu-icon',
  submenu: 'p-menubar-submenu',
  separator: 'p-menubar-separator',
  end: 'p-menubar-end'
};
var MenubarStyle = BaseStyle.extend({
  name: 'menubar',
  style: style$$,
  classes: classes$t,
  inlineStyles: inlineStyles$4
});

var inlineStyles$3 = {
  rootList: function rootList(_ref) {
    var props = _ref.props;
    return {
      'max-height': props.scrollHeight,
      overflow: 'auto'
    };
  }
};
var classes$s = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-megamenu p-component', {
      'p-megamenu-mobile': instance.queryMatches,
      'p-megamenu-mobile-active': instance.mobileActive,
      'p-megamenu-horizontal': instance.horizontal,
      'p-megamenu-vertical': instance.vertical
    }];
  },
  start: 'p-megamenu-start',
  button: 'p-megamenu-button',
  rootList: 'p-megamenu-root-list',
  submenuLabel: function submenuLabel(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-megamenu-submenu-label', {
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  item: function item(_ref4) {
    var instance = _ref4.instance,
      processedItem = _ref4.processedItem;
    return ['p-megamenu-item', {
      'p-megamenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-megamenu-item-content',
  itemLink: 'p-megamenu-item-link',
  itemIcon: 'p-megamenu-item-icon',
  itemLabel: 'p-megamenu-item-label',
  submenuIcon: 'p-megamenu-submenu-icon',
  overlay: 'p-megamenu-overlay',
  grid: 'p-megamenu-grid',
  column: function column(_ref5) {
    var instance = _ref5.instance,
      processedItem = _ref5.processedItem;
    var length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
    var columnClass;
    if (instance.$parentInstance.queryMatches) columnClass = 'p-megamenu-col-12';else {
      switch (length) {
        case 2:
          columnClass = 'p-megamenu-col-6';
          break;
        case 3:
          columnClass = 'p-megamenu-col-4';
          break;
        case 4:
          columnClass = 'p-megamenu-col-3';
          break;
        case 6:
          columnClass = 'p-megamenu-col-2';
          break;
        default:
          columnClass = 'p-megamenu-col-12';
          break;
      }
    }
    return columnClass;
  },
  submenu: 'p-megamenu-submenu',
  separator: 'p-megamenu-separator',
  end: 'p-megamenu-end'
};
var MegaMenuStyle = BaseStyle.extend({
  name: 'megamenu',
  style: style$10,
  classes: classes$s,
  inlineStyles: inlineStyles$3
});

var classes$r = {
  root: 'p-panelmenu p-component',
  panel: 'p-panelmenu-panel',
  header: function header(_ref) {
    var instance = _ref.instance,
      item = _ref.item;
    return ['p-panelmenu-header', {
      'p-panelmenu-header-active': instance.isItemActive(item) && !!item.items,
      'p-disabled': instance.isItemDisabled(item)
    }];
  },
  headerContent: 'p-panelmenu-header-content',
  headerLink: 'p-panelmenu-header-link',
  headerIcon: 'p-panelmenu-header-icon',
  headerLabel: 'p-panelmenu-header-label',
  contentContainer: 'p-panelmenu-content-container',
  content: 'p-panelmenu-content',
  rootList: 'p-panelmenu-root-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem;
    return ['p-panelmenu-item', {
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-panelmenu-item-content',
  itemLink: 'p-panelmenu-item-link',
  itemIcon: 'p-panelmenu-item-icon',
  itemLabel: 'p-panelmenu-item-label',
  submenuIcon: 'p-panelmenu-submenu-icon',
  submenu: 'p-panelmenu-submenu',
  separator: 'p-menuitem-separator'
};
var PanelMenuStyle = BaseStyle.extend({
  name: 'panelmenu',
  style: style$11,
  classes: classes$r
});

var classes$q = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-steps p-component', {
      'p-readonly': props.readonly
    }];
  },
  list: 'p-steps-list',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      _item = _ref2.item,
      index = _ref2.index;
    return ['p-steps-item', {
      'p-steps-item-active': instance.isActive(index),
      'p-disabled': instance.isItemDisabled(_item, index)
    }];
  },
  itemLink: 'p-steps-item-link',
  itemNumber: 'p-steps-item-number',
  itemLabel: 'p-steps-item-label'
};
var StepsStyle = BaseStyle.extend({
  name: 'steps',
  style: style$12,
  classes: classes$q
});

var classes$p = {
  root: 'p-tabmenu p-component',
  tablist: 'p-tabmenu-tablist',
  item: function item(_ref) {
    var instance = _ref.instance,
      index = _ref.index,
      _item = _ref.item;
    return ['p-tabmenu-item', {
      'p-tabmenu-item-active': instance.d_activeIndex === index,
      'p-disabled': instance.disabled(_item)
    }];
  },
  itemLink: 'p-tabmenu-item-link',
  itemIcon: 'p-tabmenu-item-icon',
  itemLabel: 'p-tabmenu-item-label',
  activeBar: 'p-tabmenu-active-bar'
};
var TabMenuStyle = BaseStyle.extend({
  name: 'tabmenu',
  style: style$13,
  classes: classes$p
});

var inlineStyles$2 = {
  submenu: function submenu(_ref) {
    var instance = _ref.instance,
      processedItem = _ref.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'flex' : 'none'
    };
  }
};
var classes$o = {
  root: function root(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-tieredmenu p-component', {
      'p-tieredmenu-overlay': props.popup,
      'p-tieredmenu-mobile': instance.queryMatches
    }];
  },
  start: 'p-tieredmenu-start',
  rootList: 'p-tieredmenu-root-list',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-tieredmenu-item', {
      'p-tieredmenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-tieredmenu-item-content',
  itemLink: 'p-tieredmenu-item-link',
  itemIcon: 'p-tieredmenu-item-icon',
  itemLabel: 'p-tieredmenu-item-label',
  submenuIcon: 'p-tieredmenu-submenu-icon',
  submenu: 'p-tieredmenu-submenu',
  separator: 'p-tieredmenu-separator',
  end: 'p-tieredmenu-end'
};
var TieredMenuStyle = BaseStyle.extend({
  name: 'tieredmenu',
  style: style$14,
  classes: classes$o,
  inlineStyles: inlineStyles$2
});

var classes$n = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-message p-component p-message-' + props.severity, {
      'p-message-outlined': props.variant === 'outlined',
      'p-message-simple': props.variant === 'simple',
      'p-message-sm': props.size === 'small',
      'p-message-lg': props.size === 'large'
    }];
  },
  content: 'p-message-content',
  icon: 'p-message-icon',
  text: 'p-message-text',
  closeButton: 'p-message-close-button',
  closeIcon: 'p-message-close-icon'
};
var MessageStyle = BaseStyle.extend({
  name: 'message',
  style: style$15,
  classes: classes$n
});

var classes$m = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-inlinemessage p-component p-inlinemessage-' + props.severity, {
      'p-inlinemessage-icon-only': !instance.$slots["default"]
    }];
  },
  icon: function icon(_ref2) {
    var props = _ref2.props;
    return ['p-inlinemessage-icon', props.icon];
  },
  text: 'p-inlinemessage-text'
};
var InlineMessageStyle = BaseStyle.extend({
  name: 'inlinemessage',
  style: style$16,
  classes: classes$m
});

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// Position
var inlineStyles$1 = {
  root: function root(_ref) {
    var position = _ref.position;
    return {
      position: 'fixed',
      top: position === 'top-right' || position === 'top-left' || position === 'top-center' ? '20px' : position === 'center' ? '50%' : null,
      right: (position === 'top-right' || position === 'bottom-right') && '20px',
      bottom: (position === 'bottom-left' || position === 'bottom-right' || position === 'bottom-center') && '20px',
      left: position === 'top-left' || position === 'bottom-left' ? '20px' : position === 'center' || position === 'top-center' || position === 'bottom-center' ? '50%' : null
    };
  }
};
var classes$l = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-toast p-component p-toast-' + props.position];
  },
  message: function message(_ref3) {
    var props = _ref3.props;
    return ['p-toast-message', {
      'p-toast-message-info': props.message.severity === 'info' || props.message.severity === undefined,
      'p-toast-message-warn': props.message.severity === 'warn',
      'p-toast-message-error': props.message.severity === 'error',
      'p-toast-message-success': props.message.severity === 'success',
      'p-toast-message-secondary': props.message.severity === 'secondary',
      'p-toast-message-contrast': props.message.severity === 'contrast'
    }];
  },
  messageContent: 'p-toast-message-content',
  messageIcon: function messageIcon(_ref4) {
    var props = _ref4.props;
    return ['p-toast-message-icon', _defineProperty(_defineProperty(_defineProperty(_defineProperty({}, props.infoIcon, props.message.severity === 'info'), props.warnIcon, props.message.severity === 'warn'), props.errorIcon, props.message.severity === 'error'), props.successIcon, props.message.severity === 'success')];
  },
  messageText: 'p-toast-message-text',
  summary: 'p-toast-summary',
  detail: 'p-toast-detail',
  closeButton: 'p-toast-close-button',
  closeIcon: 'p-toast-close-icon'
};
var ToastStyle = BaseStyle.extend({
  name: 'toast',
  style: style$17,
  classes: classes$l,
  inlineStyles: inlineStyles$1
});

var classes$k = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-carousel p-component', {
      'p-carousel-vertical': instance.isVertical(),
      'p-carousel-horizontal': !instance.isVertical()
    }];
  },
  header: 'p-carousel-header',
  contentContainer: 'p-carousel-content-container',
  content: 'p-carousel-content',
  pcPrevButton: function pcPrevButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-carousel-prev-button', {
      'p-disabled': instance.backwardIsDisabled
    }];
  },
  viewport: 'p-carousel-viewport',
  itemList: 'p-carousel-item-list',
  itemClone: function itemClone(_ref3) {
    var index = _ref3.index,
      value = _ref3.value,
      totalShiftedItems = _ref3.totalShiftedItems,
      d_numVisible = _ref3.d_numVisible;
    return ['p-carousel-item p-carousel-item-clone', {
      'p-carousel-item-active': totalShiftedItems * -1 === value.length + d_numVisible,
      'p-carousel-item-start': index === 0,
      'p-carousel-item-end': value.slice(-1 * d_numVisible).length - 1 === index
    }];
  },
  item: function item(_ref4) {
    var instance = _ref4.instance,
      index = _ref4.index;
    return ['p-carousel-item', {
      'p-carousel-item-active': instance.firstIndex() <= index && instance.lastIndex() >= index,
      'p-carousel-item-start': instance.firstIndex() === index,
      'p-carousel-item-end': instance.lastIndex() === index
    }];
  },
  pcNextButton: function pcNextButton(_ref5) {
    var instance = _ref5.instance;
    return ['p-carousel-next-button', {
      'p-disabled': instance.forwardIsDisabled
    }];
  },
  indicatorList: 'p-carousel-indicator-list',
  indicator: function indicator(_ref6) {
    var instance = _ref6.instance,
      index = _ref6.index;
    return ['p-carousel-indicator', {
      'p-carousel-indicator-active': instance.d_page === index
    }];
  },
  indicatorButton: 'p-carousel-indicator-button',
  footer: 'p-carousel-footer'
};
var CarouselStyle = BaseStyle.extend({
  name: 'carousel',
  style: style$18,
  classes: classes$k
});

var classes$j = {
  mask: 'p-galleria-mask p-overlay-mask p-overlay-mask-enter',
  root: function root(_ref) {
    var instance = _ref.instance;
    var thumbnailsPosClass = instance.$attrs.showThumbnails && instance.getPositionClass('p-galleria-thumbnails', instance.$attrs.thumbnailsPosition);
    var indicatorPosClass = instance.$attrs.showIndicators && instance.getPositionClass('p-galleria-indicators', instance.$attrs.indicatorsPosition);
    return ['p-galleria p-component', {
      'p-galleria-fullscreen': instance.$attrs.fullScreen,
      'p-galleria-inset-indicators': instance.$attrs.showIndicatorsOnItem,
      'p-galleria-hover-navigators': instance.$attrs.showItemNavigatorsOnHover && !instance.$attrs.fullScreen
    }, thumbnailsPosClass, indicatorPosClass];
  },
  closeButton: 'p-galleria-close-button',
  closeIcon: 'p-galleria-close-icon',
  header: 'p-galleria-header',
  content: 'p-galleria-content',
  footer: 'p-galleria-footer',
  itemsContainer: 'p-galleria-items-container',
  items: 'p-galleria-items',
  prevButton: function prevButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-galleria-prev-button p-galleria-nav-button', {
      'p-disabled': instance.isNavBackwardDisabled
    }];
  },
  prevIcon: 'p-galleria-prev-icon',
  item: 'p-galleria-item',
  nextButton: function nextButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-galleria-next-button p-galleria-nav-button', {
      'p-disabled': instance.isNavForwardDisabled
    }];
  },
  nextIcon: 'p-galleria-next-icon',
  caption: 'p-galleria-caption',
  indicatorList: 'p-galleria-indicator-list',
  indicator: function indicator(_ref4) {
    var instance = _ref4.instance,
      index = _ref4.index;
    return ['p-galleria-indicator', {
      'p-galleria-indicator-active': instance.isIndicatorItemActive(index)
    }];
  },
  indicatorButton: 'p-galleria-indicator-button',
  thumbnails: 'p-galleria-thumbnails',
  thumbnailContent: 'p-galleria-thumbnails-content',
  thumbnailPrevButton: function thumbnailPrevButton(_ref5) {
    var instance = _ref5.instance;
    return ['p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button', {
      'p-disabled': instance.isNavBackwardDisabled
    }];
  },
  thumbnailPrevIcon: 'p-galleria-thumbnail-prev-icon',
  thumbnailsViewport: 'p-galleria-thumbnails-viewport',
  thumbnailItems: 'p-galleria-thumbnail-items',
  thumbnailItem: function thumbnailItem(_ref6) {
    var instance = _ref6.instance,
      index = _ref6.index,
      activeIndex = _ref6.activeIndex;
    return ['p-galleria-thumbnail-item', {
      'p-galleria-thumbnail-item-current': activeIndex === index,
      'p-galleria-thumbnail-item-active': instance.isItemActive(index),
      'p-galleria-thumbnail-item-start': instance.firstItemAciveIndex() === index,
      'p-galleria-thumbnail-item-end': instance.lastItemActiveIndex() === index
    }];
  },
  thumbnail: 'p-galleria-thumbnail',
  thumbnailNextButton: function thumbnailNextButton(_ref7) {
    var instance = _ref7.instance;
    return ['p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button', {
      'p-disabled': instance.isNavForwardDisabled
    }];
  },
  thumbnailNextIcon: 'p-galleria-thumbnail-next-icon'
};
var GalleriaStyle = BaseStyle.extend({
  name: 'galleria',
  style: style$19,
  classes: classes$j
});

var classes$i = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-image p-component', {
      'p-image-preview': props.preview
    }];
  },
  previewMask: 'p-image-preview-mask',
  previewIcon: 'p-image-preview-icon',
  mask: 'p-image-mask p-overlay-mask p-overlay-mask-enter',
  toolbar: 'p-image-toolbar',
  rotateRightButton: 'p-image-action p-image-rotate-right-button',
  rotateLeftButton: 'p-image-action p-image-rotate-left-button',
  zoomOutButton: function zoomOutButton(_ref2) {
    var instance = _ref2.instance;
    return ['p-image-action p-image-zoom-out-button', {
      'p-disabled': instance.isZoomOutDisabled
    }];
  },
  zoomInButton: function zoomInButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-image-action p-image-zoom-in-button', {
      'p-disabled': instance.isZoomInDisabled
    }];
  },
  closeButton: 'p-image-action p-image-close-button',
  original: 'p-image-original'
};
var ImageStyle = BaseStyle.extend({
  name: 'image',
  style: style$1a,
  classes: classes$i
});

var classes$h = {
  root: 'p-imagecompare',
  slider: 'p-imagecompare-slider'
};
var ImageCompareStyle = BaseStyle.extend({
  name: 'imagecompare',
  style: style$1b,
  classes: classes$h
});

var classes$g = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-avatar p-component', {
      'p-avatar-image': props.image != null,
      'p-avatar-circle': props.shape === 'circle',
      'p-avatar-lg': props.size === 'large',
      'p-avatar-xl': props.size === 'xlarge'
    }];
  },
  label: 'p-avatar-label',
  icon: 'p-avatar-icon'
};
var AvatarStyle = BaseStyle.extend({
  name: 'avatar',
  style: style$1c,
  classes: classes$g
});

var classes$f = {
  root: 'p-avatar-group p-component'
};
var AvatarGroupStyle = BaseStyle.extend({
  name: 'avatargroup',
  classes: classes$f
});

var classes$e = {
  root: function root(_ref) {
    var props = _ref.props,
      instance = _ref.instance;
    return ['p-badge p-component', {
      'p-badge-circle': isNotEmpty(props.value) && String(props.value).length === 1,
      'p-badge-dot': isEmpty(props.value) && !instance.$slots["default"],
      'p-badge-sm': props.size === 'small',
      'p-badge-lg': props.size === 'large',
      'p-badge-xl': props.size === 'xlarge',
      'p-badge-info': props.severity === 'info',
      'p-badge-success': props.severity === 'success',
      'p-badge-warn': props.severity === 'warn',
      'p-badge-danger': props.severity === 'danger',
      'p-badge-secondary': props.severity === 'secondary',
      'p-badge-contrast': props.severity === 'contrast'
    }];
  }
};
var BadgeStyle = BaseStyle.extend({
  name: 'badge',
  style: style$1d,
  classes: classes$e
});

var classes$d = {
  root: 'p-blockui'
};
var BlockUIStyle = BaseStyle.extend({
  name: 'blockui',
  style: style$1e,
  classes: classes$d
});

var classes$c = {
  root: 'p-chip p-component',
  image: 'p-chip-image',
  icon: 'p-chip-icon',
  label: 'p-chip-label',
  removeIcon: 'p-chip-remove-icon'
};
var ChipStyle = BaseStyle.extend({
  name: 'chip',
  style: style$1f,
  classes: classes$c
});

var classes$b = {
  root: 'p-inplace p-component',
  display: function display(_ref) {
    var props = _ref.props;
    return ['p-inplace-display', {
      'p-disabled': props.disabled
    }];
  },
  content: 'p-inplace-content'
};
var InplaceStyle = BaseStyle.extend({
  name: 'inplace',
  style: style$1g,
  classes: classes$b
});

var classes$a = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-metergroup p-component', {
      'p-metergroup-horizontal': props.orientation === 'horizontal',
      'p-metergroup-vertical': props.orientation === 'vertical'
    }];
  },
  meters: 'p-metergroup-meters',
  meter: 'p-metergroup-meter',
  labelList: function labelList(_ref2) {
    var props = _ref2.props;
    return ['p-metergroup-label-list', {
      'p-metergroup-label-list-vertical': props.labelOrientation === 'vertical',
      'p-metergroup-label-list-horizontal': props.labelOrientation === 'horizontal'
    }];
  },
  label: 'p-metergroup-label',
  labelIcon: 'p-metergroup-label-icon',
  labelMarker: 'p-metergroup-label-marker',
  labelText: 'p-metergroup-label-text'
};
var MeterGroupStyle = BaseStyle.extend({
  name: 'metergroup',
  style: style$1h,
  classes: classes$a
});

var classes$9 = {
  root: 'p-overlaybadge'
};
var OverlayBadgeStyle = BaseStyle.extend({
  name: 'overlaybadge',
  style: style$1i,
  classes: classes$9
});

var classes$8 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-scrolltop', {
      'p-scrolltop-sticky': props.target !== 'window'
    }];
  },
  icon: 'p-scrolltop-icon'
};
var ScrollTopStyle = BaseStyle.extend({
  name: 'scrolltop',
  style: style$1j,
  classes: classes$8
});

var inlineStyles = {
  root: {
    position: 'relative'
  }
};
var classes$7 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-skeleton p-component', {
      'p-skeleton-circle': props.shape === 'circle',
      'p-skeleton-animation-none': props.animation === 'none'
    }];
  }
};
var SkeletonStyle = BaseStyle.extend({
  name: 'skeleton',
  style: style$1k,
  classes: classes$7,
  inlineStyles: inlineStyles
});

var classes$6 = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ['p-progressbar p-component', {
      'p-progressbar-determinate': instance.determinate,
      'p-progressbar-indeterminate': instance.indeterminate
    }];
  },
  value: 'p-progressbar-value',
  label: 'p-progressbar-label'
};
var ProgressBarStyle = BaseStyle.extend({
  name: 'progressbar',
  style: style$1l,
  classes: classes$6
});

var classes$5 = {
  root: 'p-progressspinner',
  spin: 'p-progressspinner-spin',
  circle: 'p-progressspinner-circle'
};
var ProgressSpinnerStyle = BaseStyle.extend({
  name: 'progressspinner',
  style: style$1m,
  classes: classes$5
});

var classes$4 = {
  root: function root(_ref) {
    var props = _ref.props;
    return ['p-tag p-component', {
      'p-tag-info': props.severity === 'info',
      'p-tag-success': props.severity === 'success',
      'p-tag-warn': props.severity === 'warn',
      'p-tag-danger': props.severity === 'danger',
      'p-tag-secondary': props.severity === 'secondary',
      'p-tag-contrast': props.severity === 'contrast',
      'p-tag-rounded': props.rounded
    }];
  },
  icon: 'p-tag-icon',
  label: 'p-tag-label'
};
var TagStyle = BaseStyle.extend({
  name: 'tag',
  style: style$1n,
  classes: classes$4
});

var classes$3 = {
  root: 'p-terminal p-component',
  welcomeMessage: 'p-terminal-welcome-message',
  commandList: 'p-terminal-command-list',
  command: 'p-terminal-command',
  commandValue: 'p-terminal-command-value',
  commandResponse: 'p-terminal-command-response',
  prompt: 'p-terminal-prompt',
  promptLabel: 'p-terminal-prompt-label',
  promptValue: 'p-terminal-prompt-value'
};
var TerminalStyle = BaseStyle.extend({
  name: 'terminal',
  style: style$1o,
  classes: classes$3
});

var classes$2 = {
  root: 'p-badge p-component'
};
var BadgeDirectiveStyle = BaseStyle.extend({
  name: 'badge-directive',
  classes: classes$2
});

var classes$1 = {
  root: 'p-tooltip p-component',
  arrow: 'p-tooltip-arrow',
  text: 'p-tooltip-text'
};
var TooltipStyle = BaseStyle.extend({
  name: 'tooltip-directive',
  style: style$1p,
  classes: classes$1
});

var classes = {
  root: 'p-ink'
};
var RippleStyle = BaseStyle.extend({
  name: 'ripple-directive',
  style: style$1q,
  classes: classes
});

var StyleClassStyle = BaseStyle.extend({
  name: 'styleclass-directive'
});

var FocusTrapStyle = BaseStyle.extend({
  name: 'focustrap-directive'
});

var AnimateOnScrollStyle = BaseStyle.extend({
  name: 'animateonscroll-directive'
});

var KeyFilterStyle = BaseStyle.extend({
  name: 'keyfilter-directive'
});

const runtimeConfig = useRuntimeConfig();
const config = runtimeConfig?.public?.primevue ?? {};
const { options = {} } = config;

const stylesToTop = [].join('');
const styleProps = {
    
};
const styles = [
    ,
    BaseStyle && BaseStyle.getStyleSheet ? BaseStyle.getStyleSheet(undefined, styleProps) : '',BaseComponentStyle && BaseComponentStyle.getStyleSheet ? BaseComponentStyle.getStyleSheet(undefined, styleProps) : '',AutoCompleteStyle && AutoCompleteStyle.getStyleSheet ? AutoCompleteStyle.getStyleSheet(undefined, styleProps) : '',CalendarStyle && CalendarStyle.getStyleSheet ? CalendarStyle.getStyleSheet(undefined, styleProps) : '',CascadeSelectStyle && CascadeSelectStyle.getStyleSheet ? CascadeSelectStyle.getStyleSheet(undefined, styleProps) : '',CheckboxStyle && CheckboxStyle.getStyleSheet ? CheckboxStyle.getStyleSheet(undefined, styleProps) : '',CheckboxGroupStyle && CheckboxGroupStyle.getStyleSheet ? CheckboxGroupStyle.getStyleSheet(undefined, styleProps) : '',ChipsStyle && ChipsStyle.getStyleSheet ? ChipsStyle.getStyleSheet(undefined, styleProps) : '',ColorPickerStyle && ColorPickerStyle.getStyleSheet ? ColorPickerStyle.getStyleSheet(undefined, styleProps) : '',DatePickerStyle && DatePickerStyle.getStyleSheet ? DatePickerStyle.getStyleSheet(undefined, styleProps) : '',DropdownStyle && DropdownStyle.getStyleSheet ? DropdownStyle.getStyleSheet(undefined, styleProps) : '',FloatLabelStyle && FloatLabelStyle.getStyleSheet ? FloatLabelStyle.getStyleSheet(undefined, styleProps) : '',FluidStyle && FluidStyle.getStyleSheet ? FluidStyle.getStyleSheet(undefined, styleProps) : '',IconFieldStyle && IconFieldStyle.getStyleSheet ? IconFieldStyle.getStyleSheet(undefined, styleProps) : '',IftaLabelStyle && IftaLabelStyle.getStyleSheet ? IftaLabelStyle.getStyleSheet(undefined, styleProps) : '',InputChipsStyle && InputChipsStyle.getStyleSheet ? InputChipsStyle.getStyleSheet(undefined, styleProps) : '',InputGroupStyle && InputGroupStyle.getStyleSheet ? InputGroupStyle.getStyleSheet(undefined, styleProps) : '',InputGroupAddonStyle && InputGroupAddonStyle.getStyleSheet ? InputGroupAddonStyle.getStyleSheet(undefined, styleProps) : '',InputIconStyle && InputIconStyle.getStyleSheet ? InputIconStyle.getStyleSheet(undefined, styleProps) : '',InputMaskStyle && InputMaskStyle.getStyleSheet ? InputMaskStyle.getStyleSheet(undefined, styleProps) : '',InputNumberStyle && InputNumberStyle.getStyleSheet ? InputNumberStyle.getStyleSheet(undefined, styleProps) : '',InputOtpStyle && InputOtpStyle.getStyleSheet ? InputOtpStyle.getStyleSheet(undefined, styleProps) : '',InputSwitchStyle && InputSwitchStyle.getStyleSheet ? InputSwitchStyle.getStyleSheet(undefined, styleProps) : '',InputTextStyle && InputTextStyle.getStyleSheet ? InputTextStyle.getStyleSheet(undefined, styleProps) : '',KnobStyle && KnobStyle.getStyleSheet ? KnobStyle.getStyleSheet(undefined, styleProps) : '',ListboxStyle && ListboxStyle.getStyleSheet ? ListboxStyle.getStyleSheet(undefined, styleProps) : '',MultiSelectStyle && MultiSelectStyle.getStyleSheet ? MultiSelectStyle.getStyleSheet(undefined, styleProps) : '',PasswordStyle && PasswordStyle.getStyleSheet ? PasswordStyle.getStyleSheet(undefined, styleProps) : '',RadioButtonStyle && RadioButtonStyle.getStyleSheet ? RadioButtonStyle.getStyleSheet(undefined, styleProps) : '',RadioButtonGroupStyle && RadioButtonGroupStyle.getStyleSheet ? RadioButtonGroupStyle.getStyleSheet(undefined, styleProps) : '',RatingStyle && RatingStyle.getStyleSheet ? RatingStyle.getStyleSheet(undefined, styleProps) : '',SelectStyle && SelectStyle.getStyleSheet ? SelectStyle.getStyleSheet(undefined, styleProps) : '',SelectButtonStyle && SelectButtonStyle.getStyleSheet ? SelectButtonStyle.getStyleSheet(undefined, styleProps) : '',SliderStyle && SliderStyle.getStyleSheet ? SliderStyle.getStyleSheet(undefined, styleProps) : '',TextareaStyle && TextareaStyle.getStyleSheet ? TextareaStyle.getStyleSheet(undefined, styleProps) : '',ToggleButtonStyle && ToggleButtonStyle.getStyleSheet ? ToggleButtonStyle.getStyleSheet(undefined, styleProps) : '',ToggleSwitchStyle && ToggleSwitchStyle.getStyleSheet ? ToggleSwitchStyle.getStyleSheet(undefined, styleProps) : '',TreeSelectStyle && TreeSelectStyle.getStyleSheet ? TreeSelectStyle.getStyleSheet(undefined, styleProps) : '',ButtonStyle && ButtonStyle.getStyleSheet ? ButtonStyle.getStyleSheet(undefined, styleProps) : '',ButtonGroupStyle && ButtonGroupStyle.getStyleSheet ? ButtonGroupStyle.getStyleSheet(undefined, styleProps) : '',SpeedDialStyle && SpeedDialStyle.getStyleSheet ? SpeedDialStyle.getStyleSheet(undefined, styleProps) : '',SplitButtonStyle && SplitButtonStyle.getStyleSheet ? SplitButtonStyle.getStyleSheet(undefined, styleProps) : '',ColumnStyle && ColumnStyle.getStyleSheet ? ColumnStyle.getStyleSheet(undefined, styleProps) : '',RowStyle && RowStyle.getStyleSheet ? RowStyle.getStyleSheet(undefined, styleProps) : '',ColumnGroupStyle && ColumnGroupStyle.getStyleSheet ? ColumnGroupStyle.getStyleSheet(undefined, styleProps) : '',DataTableStyle && DataTableStyle.getStyleSheet ? DataTableStyle.getStyleSheet(undefined, styleProps) : '',DataViewStyle && DataViewStyle.getStyleSheet ? DataViewStyle.getStyleSheet(undefined, styleProps) : '',OrderListStyle && OrderListStyle.getStyleSheet ? OrderListStyle.getStyleSheet(undefined, styleProps) : '',OrganizationChartStyle && OrganizationChartStyle.getStyleSheet ? OrganizationChartStyle.getStyleSheet(undefined, styleProps) : '',PaginatorStyle && PaginatorStyle.getStyleSheet ? PaginatorStyle.getStyleSheet(undefined, styleProps) : '',PickListStyle && PickListStyle.getStyleSheet ? PickListStyle.getStyleSheet(undefined, styleProps) : '',TreeStyle && TreeStyle.getStyleSheet ? TreeStyle.getStyleSheet(undefined, styleProps) : '',TreeTableStyle && TreeTableStyle.getStyleSheet ? TreeTableStyle.getStyleSheet(undefined, styleProps) : '',TimelineStyle && TimelineStyle.getStyleSheet ? TimelineStyle.getStyleSheet(undefined, styleProps) : '',VirtualScrollerStyle && VirtualScrollerStyle.getStyleSheet ? VirtualScrollerStyle.getStyleSheet(undefined, styleProps) : '',AccordionStyle && AccordionStyle.getStyleSheet ? AccordionStyle.getStyleSheet(undefined, styleProps) : '',AccordionPanelStyle && AccordionPanelStyle.getStyleSheet ? AccordionPanelStyle.getStyleSheet(undefined, styleProps) : '',AccordionHeaderStyle && AccordionHeaderStyle.getStyleSheet ? AccordionHeaderStyle.getStyleSheet(undefined, styleProps) : '',AccordionContentStyle && AccordionContentStyle.getStyleSheet ? AccordionContentStyle.getStyleSheet(undefined, styleProps) : '',AccordionTabStyle && AccordionTabStyle.getStyleSheet ? AccordionTabStyle.getStyleSheet(undefined, styleProps) : '',CardStyle && CardStyle.getStyleSheet ? CardStyle.getStyleSheet(undefined, styleProps) : '',DeferredContentStyle && DeferredContentStyle.getStyleSheet ? DeferredContentStyle.getStyleSheet(undefined, styleProps) : '',DividerStyle && DividerStyle.getStyleSheet ? DividerStyle.getStyleSheet(undefined, styleProps) : '',FieldsetStyle && FieldsetStyle.getStyleSheet ? FieldsetStyle.getStyleSheet(undefined, styleProps) : '',PanelStyle && PanelStyle.getStyleSheet ? PanelStyle.getStyleSheet(undefined, styleProps) : '',ScrollPanelStyle && ScrollPanelStyle.getStyleSheet ? ScrollPanelStyle.getStyleSheet(undefined, styleProps) : '',SplitterStyle && SplitterStyle.getStyleSheet ? SplitterStyle.getStyleSheet(undefined, styleProps) : '',SplitterPanelStyle && SplitterPanelStyle.getStyleSheet ? SplitterPanelStyle.getStyleSheet(undefined, styleProps) : '',StepperStyle && StepperStyle.getStyleSheet ? StepperStyle.getStyleSheet(undefined, styleProps) : '',StepListStyle && StepListStyle.getStyleSheet ? StepListStyle.getStyleSheet(undefined, styleProps) : '',StepStyle && StepStyle.getStyleSheet ? StepStyle.getStyleSheet(undefined, styleProps) : '',StepItemStyle && StepItemStyle.getStyleSheet ? StepItemStyle.getStyleSheet(undefined, styleProps) : '',StepPanelsStyle && StepPanelsStyle.getStyleSheet ? StepPanelsStyle.getStyleSheet(undefined, styleProps) : '',StepPanelStyle && StepPanelStyle.getStyleSheet ? StepPanelStyle.getStyleSheet(undefined, styleProps) : '',TabViewStyle && TabViewStyle.getStyleSheet ? TabViewStyle.getStyleSheet(undefined, styleProps) : '',TabsStyle && TabsStyle.getStyleSheet ? TabsStyle.getStyleSheet(undefined, styleProps) : '',TabListStyle && TabListStyle.getStyleSheet ? TabListStyle.getStyleSheet(undefined, styleProps) : '',TabStyle && TabStyle.getStyleSheet ? TabStyle.getStyleSheet(undefined, styleProps) : '',TabPanelsStyle && TabPanelsStyle.getStyleSheet ? TabPanelsStyle.getStyleSheet(undefined, styleProps) : '',TabPanelStyle && TabPanelStyle.getStyleSheet ? TabPanelStyle.getStyleSheet(undefined, styleProps) : '',ToolbarStyle && ToolbarStyle.getStyleSheet ? ToolbarStyle.getStyleSheet(undefined, styleProps) : '',ConfirmDialogStyle && ConfirmDialogStyle.getStyleSheet ? ConfirmDialogStyle.getStyleSheet(undefined, styleProps) : '',ConfirmPopupStyle && ConfirmPopupStyle.getStyleSheet ? ConfirmPopupStyle.getStyleSheet(undefined, styleProps) : '',DialogStyle && DialogStyle.getStyleSheet ? DialogStyle.getStyleSheet(undefined, styleProps) : '',DrawerStyle && DrawerStyle.getStyleSheet ? DrawerStyle.getStyleSheet(undefined, styleProps) : '',DynamicDialogStyle && DynamicDialogStyle.getStyleSheet ? DynamicDialogStyle.getStyleSheet(undefined, styleProps) : '',OverlayPanelStyle && OverlayPanelStyle.getStyleSheet ? OverlayPanelStyle.getStyleSheet(undefined, styleProps) : '',PopoverStyle && PopoverStyle.getStyleSheet ? PopoverStyle.getStyleSheet(undefined, styleProps) : '',SidebarStyle && SidebarStyle.getStyleSheet ? SidebarStyle.getStyleSheet(undefined, styleProps) : '',FileUploadStyle && FileUploadStyle.getStyleSheet ? FileUploadStyle.getStyleSheet(undefined, styleProps) : '',BreadcrumbStyle && BreadcrumbStyle.getStyleSheet ? BreadcrumbStyle.getStyleSheet(undefined, styleProps) : '',ContextMenuStyle && ContextMenuStyle.getStyleSheet ? ContextMenuStyle.getStyleSheet(undefined, styleProps) : '',DockStyle && DockStyle.getStyleSheet ? DockStyle.getStyleSheet(undefined, styleProps) : '',MenuStyle && MenuStyle.getStyleSheet ? MenuStyle.getStyleSheet(undefined, styleProps) : '',MenubarStyle && MenubarStyle.getStyleSheet ? MenubarStyle.getStyleSheet(undefined, styleProps) : '',MegaMenuStyle && MegaMenuStyle.getStyleSheet ? MegaMenuStyle.getStyleSheet(undefined, styleProps) : '',PanelMenuStyle && PanelMenuStyle.getStyleSheet ? PanelMenuStyle.getStyleSheet(undefined, styleProps) : '',StepsStyle && StepsStyle.getStyleSheet ? StepsStyle.getStyleSheet(undefined, styleProps) : '',TabMenuStyle && TabMenuStyle.getStyleSheet ? TabMenuStyle.getStyleSheet(undefined, styleProps) : '',TieredMenuStyle && TieredMenuStyle.getStyleSheet ? TieredMenuStyle.getStyleSheet(undefined, styleProps) : '',MessageStyle && MessageStyle.getStyleSheet ? MessageStyle.getStyleSheet(undefined, styleProps) : '',InlineMessageStyle && InlineMessageStyle.getStyleSheet ? InlineMessageStyle.getStyleSheet(undefined, styleProps) : '',ToastStyle && ToastStyle.getStyleSheet ? ToastStyle.getStyleSheet(undefined, styleProps) : '',CarouselStyle && CarouselStyle.getStyleSheet ? CarouselStyle.getStyleSheet(undefined, styleProps) : '',GalleriaStyle && GalleriaStyle.getStyleSheet ? GalleriaStyle.getStyleSheet(undefined, styleProps) : '',ImageStyle && ImageStyle.getStyleSheet ? ImageStyle.getStyleSheet(undefined, styleProps) : '',ImageCompareStyle && ImageCompareStyle.getStyleSheet ? ImageCompareStyle.getStyleSheet(undefined, styleProps) : '',AvatarStyle && AvatarStyle.getStyleSheet ? AvatarStyle.getStyleSheet(undefined, styleProps) : '',AvatarGroupStyle && AvatarGroupStyle.getStyleSheet ? AvatarGroupStyle.getStyleSheet(undefined, styleProps) : '',BadgeStyle && BadgeStyle.getStyleSheet ? BadgeStyle.getStyleSheet(undefined, styleProps) : '',BlockUIStyle && BlockUIStyle.getStyleSheet ? BlockUIStyle.getStyleSheet(undefined, styleProps) : '',ChipStyle && ChipStyle.getStyleSheet ? ChipStyle.getStyleSheet(undefined, styleProps) : '',InplaceStyle && InplaceStyle.getStyleSheet ? InplaceStyle.getStyleSheet(undefined, styleProps) : '',MeterGroupStyle && MeterGroupStyle.getStyleSheet ? MeterGroupStyle.getStyleSheet(undefined, styleProps) : '',OverlayBadgeStyle && OverlayBadgeStyle.getStyleSheet ? OverlayBadgeStyle.getStyleSheet(undefined, styleProps) : '',ScrollTopStyle && ScrollTopStyle.getStyleSheet ? ScrollTopStyle.getStyleSheet(undefined, styleProps) : '',SkeletonStyle && SkeletonStyle.getStyleSheet ? SkeletonStyle.getStyleSheet(undefined, styleProps) : '',ProgressBarStyle && ProgressBarStyle.getStyleSheet ? ProgressBarStyle.getStyleSheet(undefined, styleProps) : '',ProgressSpinnerStyle && ProgressSpinnerStyle.getStyleSheet ? ProgressSpinnerStyle.getStyleSheet(undefined, styleProps) : '',TagStyle && TagStyle.getStyleSheet ? TagStyle.getStyleSheet(undefined, styleProps) : '',TerminalStyle && TerminalStyle.getStyleSheet ? TerminalStyle.getStyleSheet(undefined, styleProps) : '',FormStyle && FormStyle.getStyleSheet ? FormStyle.getStyleSheet(undefined, styleProps) : '',FormFieldStyle && FormFieldStyle.getStyleSheet ? FormFieldStyle.getStyleSheet(undefined, styleProps) : '',BadgeDirectiveStyle && BadgeDirectiveStyle.getStyleSheet ? BadgeDirectiveStyle.getStyleSheet(undefined, styleProps) : '',TooltipStyle && TooltipStyle.getStyleSheet ? TooltipStyle.getStyleSheet(undefined, styleProps) : '',RippleStyle && RippleStyle.getStyleSheet ? RippleStyle.getStyleSheet(undefined, styleProps) : '',StyleClassStyle && StyleClassStyle.getStyleSheet ? StyleClassStyle.getStyleSheet(undefined, styleProps) : '',FocusTrapStyle && FocusTrapStyle.getStyleSheet ? FocusTrapStyle.getStyleSheet(undefined, styleProps) : '',AnimateOnScrollStyle && AnimateOnScrollStyle.getStyleSheet ? AnimateOnScrollStyle.getStyleSheet(undefined, styleProps) : '',KeyFilterStyle && KeyFilterStyle.getStyleSheet ? KeyFilterStyle.getStyleSheet(undefined, styleProps) : ''
].join('');

Theme.setTheme(options?.theme);

const themes = 
[
    BaseStyle && BaseStyle.getCommonThemeStyleSheet ? BaseStyle.getCommonThemeStyleSheet(undefined, styleProps) : '',
    BaseStyle && BaseStyle.getThemeStyleSheet ? BaseStyle.getThemeStyleSheet(undefined, styleProps) : '',BaseComponentStyle && BaseComponentStyle.getThemeStyleSheet ? BaseComponentStyle.getThemeStyleSheet(undefined, styleProps) : '',AutoCompleteStyle && AutoCompleteStyle.getThemeStyleSheet ? AutoCompleteStyle.getThemeStyleSheet(undefined, styleProps) : '',CalendarStyle && CalendarStyle.getThemeStyleSheet ? CalendarStyle.getThemeStyleSheet(undefined, styleProps) : '',CascadeSelectStyle && CascadeSelectStyle.getThemeStyleSheet ? CascadeSelectStyle.getThemeStyleSheet(undefined, styleProps) : '',CheckboxStyle && CheckboxStyle.getThemeStyleSheet ? CheckboxStyle.getThemeStyleSheet(undefined, styleProps) : '',CheckboxGroupStyle && CheckboxGroupStyle.getThemeStyleSheet ? CheckboxGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',ChipsStyle && ChipsStyle.getThemeStyleSheet ? ChipsStyle.getThemeStyleSheet(undefined, styleProps) : '',ColorPickerStyle && ColorPickerStyle.getThemeStyleSheet ? ColorPickerStyle.getThemeStyleSheet(undefined, styleProps) : '',DatePickerStyle && DatePickerStyle.getThemeStyleSheet ? DatePickerStyle.getThemeStyleSheet(undefined, styleProps) : '',DropdownStyle && DropdownStyle.getThemeStyleSheet ? DropdownStyle.getThemeStyleSheet(undefined, styleProps) : '',FloatLabelStyle && FloatLabelStyle.getThemeStyleSheet ? FloatLabelStyle.getThemeStyleSheet(undefined, styleProps) : '',FluidStyle && FluidStyle.getThemeStyleSheet ? FluidStyle.getThemeStyleSheet(undefined, styleProps) : '',IconFieldStyle && IconFieldStyle.getThemeStyleSheet ? IconFieldStyle.getThemeStyleSheet(undefined, styleProps) : '',IftaLabelStyle && IftaLabelStyle.getThemeStyleSheet ? IftaLabelStyle.getThemeStyleSheet(undefined, styleProps) : '',InputChipsStyle && InputChipsStyle.getThemeStyleSheet ? InputChipsStyle.getThemeStyleSheet(undefined, styleProps) : '',InputGroupStyle && InputGroupStyle.getThemeStyleSheet ? InputGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',InputGroupAddonStyle && InputGroupAddonStyle.getThemeStyleSheet ? InputGroupAddonStyle.getThemeStyleSheet(undefined, styleProps) : '',InputIconStyle && InputIconStyle.getThemeStyleSheet ? InputIconStyle.getThemeStyleSheet(undefined, styleProps) : '',InputMaskStyle && InputMaskStyle.getThemeStyleSheet ? InputMaskStyle.getThemeStyleSheet(undefined, styleProps) : '',InputNumberStyle && InputNumberStyle.getThemeStyleSheet ? InputNumberStyle.getThemeStyleSheet(undefined, styleProps) : '',InputOtpStyle && InputOtpStyle.getThemeStyleSheet ? InputOtpStyle.getThemeStyleSheet(undefined, styleProps) : '',InputSwitchStyle && InputSwitchStyle.getThemeStyleSheet ? InputSwitchStyle.getThemeStyleSheet(undefined, styleProps) : '',InputTextStyle && InputTextStyle.getThemeStyleSheet ? InputTextStyle.getThemeStyleSheet(undefined, styleProps) : '',KnobStyle && KnobStyle.getThemeStyleSheet ? KnobStyle.getThemeStyleSheet(undefined, styleProps) : '',ListboxStyle && ListboxStyle.getThemeStyleSheet ? ListboxStyle.getThemeStyleSheet(undefined, styleProps) : '',MultiSelectStyle && MultiSelectStyle.getThemeStyleSheet ? MultiSelectStyle.getThemeStyleSheet(undefined, styleProps) : '',PasswordStyle && PasswordStyle.getThemeStyleSheet ? PasswordStyle.getThemeStyleSheet(undefined, styleProps) : '',RadioButtonStyle && RadioButtonStyle.getThemeStyleSheet ? RadioButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',RadioButtonGroupStyle && RadioButtonGroupStyle.getThemeStyleSheet ? RadioButtonGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',RatingStyle && RatingStyle.getThemeStyleSheet ? RatingStyle.getThemeStyleSheet(undefined, styleProps) : '',SelectStyle && SelectStyle.getThemeStyleSheet ? SelectStyle.getThemeStyleSheet(undefined, styleProps) : '',SelectButtonStyle && SelectButtonStyle.getThemeStyleSheet ? SelectButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',SliderStyle && SliderStyle.getThemeStyleSheet ? SliderStyle.getThemeStyleSheet(undefined, styleProps) : '',TextareaStyle && TextareaStyle.getThemeStyleSheet ? TextareaStyle.getThemeStyleSheet(undefined, styleProps) : '',ToggleButtonStyle && ToggleButtonStyle.getThemeStyleSheet ? ToggleButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',ToggleSwitchStyle && ToggleSwitchStyle.getThemeStyleSheet ? ToggleSwitchStyle.getThemeStyleSheet(undefined, styleProps) : '',TreeSelectStyle && TreeSelectStyle.getThemeStyleSheet ? TreeSelectStyle.getThemeStyleSheet(undefined, styleProps) : '',ButtonStyle && ButtonStyle.getThemeStyleSheet ? ButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',ButtonGroupStyle && ButtonGroupStyle.getThemeStyleSheet ? ButtonGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',SpeedDialStyle && SpeedDialStyle.getThemeStyleSheet ? SpeedDialStyle.getThemeStyleSheet(undefined, styleProps) : '',SplitButtonStyle && SplitButtonStyle.getThemeStyleSheet ? SplitButtonStyle.getThemeStyleSheet(undefined, styleProps) : '',ColumnStyle && ColumnStyle.getThemeStyleSheet ? ColumnStyle.getThemeStyleSheet(undefined, styleProps) : '',RowStyle && RowStyle.getThemeStyleSheet ? RowStyle.getThemeStyleSheet(undefined, styleProps) : '',ColumnGroupStyle && ColumnGroupStyle.getThemeStyleSheet ? ColumnGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',DataTableStyle && DataTableStyle.getThemeStyleSheet ? DataTableStyle.getThemeStyleSheet(undefined, styleProps) : '',DataViewStyle && DataViewStyle.getThemeStyleSheet ? DataViewStyle.getThemeStyleSheet(undefined, styleProps) : '',OrderListStyle && OrderListStyle.getThemeStyleSheet ? OrderListStyle.getThemeStyleSheet(undefined, styleProps) : '',OrganizationChartStyle && OrganizationChartStyle.getThemeStyleSheet ? OrganizationChartStyle.getThemeStyleSheet(undefined, styleProps) : '',PaginatorStyle && PaginatorStyle.getThemeStyleSheet ? PaginatorStyle.getThemeStyleSheet(undefined, styleProps) : '',PickListStyle && PickListStyle.getThemeStyleSheet ? PickListStyle.getThemeStyleSheet(undefined, styleProps) : '',TreeStyle && TreeStyle.getThemeStyleSheet ? TreeStyle.getThemeStyleSheet(undefined, styleProps) : '',TreeTableStyle && TreeTableStyle.getThemeStyleSheet ? TreeTableStyle.getThemeStyleSheet(undefined, styleProps) : '',TimelineStyle && TimelineStyle.getThemeStyleSheet ? TimelineStyle.getThemeStyleSheet(undefined, styleProps) : '',VirtualScrollerStyle && VirtualScrollerStyle.getThemeStyleSheet ? VirtualScrollerStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionStyle && AccordionStyle.getThemeStyleSheet ? AccordionStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionPanelStyle && AccordionPanelStyle.getThemeStyleSheet ? AccordionPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionHeaderStyle && AccordionHeaderStyle.getThemeStyleSheet ? AccordionHeaderStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionContentStyle && AccordionContentStyle.getThemeStyleSheet ? AccordionContentStyle.getThemeStyleSheet(undefined, styleProps) : '',AccordionTabStyle && AccordionTabStyle.getThemeStyleSheet ? AccordionTabStyle.getThemeStyleSheet(undefined, styleProps) : '',CardStyle && CardStyle.getThemeStyleSheet ? CardStyle.getThemeStyleSheet(undefined, styleProps) : '',DeferredContentStyle && DeferredContentStyle.getThemeStyleSheet ? DeferredContentStyle.getThemeStyleSheet(undefined, styleProps) : '',DividerStyle && DividerStyle.getThemeStyleSheet ? DividerStyle.getThemeStyleSheet(undefined, styleProps) : '',FieldsetStyle && FieldsetStyle.getThemeStyleSheet ? FieldsetStyle.getThemeStyleSheet(undefined, styleProps) : '',PanelStyle && PanelStyle.getThemeStyleSheet ? PanelStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollPanelStyle && ScrollPanelStyle.getThemeStyleSheet ? ScrollPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',SplitterStyle && SplitterStyle.getThemeStyleSheet ? SplitterStyle.getThemeStyleSheet(undefined, styleProps) : '',SplitterPanelStyle && SplitterPanelStyle.getThemeStyleSheet ? SplitterPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',StepperStyle && StepperStyle.getThemeStyleSheet ? StepperStyle.getThemeStyleSheet(undefined, styleProps) : '',StepListStyle && StepListStyle.getThemeStyleSheet ? StepListStyle.getThemeStyleSheet(undefined, styleProps) : '',StepStyle && StepStyle.getThemeStyleSheet ? StepStyle.getThemeStyleSheet(undefined, styleProps) : '',StepItemStyle && StepItemStyle.getThemeStyleSheet ? StepItemStyle.getThemeStyleSheet(undefined, styleProps) : '',StepPanelsStyle && StepPanelsStyle.getThemeStyleSheet ? StepPanelsStyle.getThemeStyleSheet(undefined, styleProps) : '',StepPanelStyle && StepPanelStyle.getThemeStyleSheet ? StepPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',TabViewStyle && TabViewStyle.getThemeStyleSheet ? TabViewStyle.getThemeStyleSheet(undefined, styleProps) : '',TabsStyle && TabsStyle.getThemeStyleSheet ? TabsStyle.getThemeStyleSheet(undefined, styleProps) : '',TabListStyle && TabListStyle.getThemeStyleSheet ? TabListStyle.getThemeStyleSheet(undefined, styleProps) : '',TabStyle && TabStyle.getThemeStyleSheet ? TabStyle.getThemeStyleSheet(undefined, styleProps) : '',TabPanelsStyle && TabPanelsStyle.getThemeStyleSheet ? TabPanelsStyle.getThemeStyleSheet(undefined, styleProps) : '',TabPanelStyle && TabPanelStyle.getThemeStyleSheet ? TabPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',ToolbarStyle && ToolbarStyle.getThemeStyleSheet ? ToolbarStyle.getThemeStyleSheet(undefined, styleProps) : '',ConfirmDialogStyle && ConfirmDialogStyle.getThemeStyleSheet ? ConfirmDialogStyle.getThemeStyleSheet(undefined, styleProps) : '',ConfirmPopupStyle && ConfirmPopupStyle.getThemeStyleSheet ? ConfirmPopupStyle.getThemeStyleSheet(undefined, styleProps) : '',DialogStyle && DialogStyle.getThemeStyleSheet ? DialogStyle.getThemeStyleSheet(undefined, styleProps) : '',DrawerStyle && DrawerStyle.getThemeStyleSheet ? DrawerStyle.getThemeStyleSheet(undefined, styleProps) : '',DynamicDialogStyle && DynamicDialogStyle.getThemeStyleSheet ? DynamicDialogStyle.getThemeStyleSheet(undefined, styleProps) : '',OverlayPanelStyle && OverlayPanelStyle.getThemeStyleSheet ? OverlayPanelStyle.getThemeStyleSheet(undefined, styleProps) : '',PopoverStyle && PopoverStyle.getThemeStyleSheet ? PopoverStyle.getThemeStyleSheet(undefined, styleProps) : '',SidebarStyle && SidebarStyle.getThemeStyleSheet ? SidebarStyle.getThemeStyleSheet(undefined, styleProps) : '',FileUploadStyle && FileUploadStyle.getThemeStyleSheet ? FileUploadStyle.getThemeStyleSheet(undefined, styleProps) : '',BreadcrumbStyle && BreadcrumbStyle.getThemeStyleSheet ? BreadcrumbStyle.getThemeStyleSheet(undefined, styleProps) : '',ContextMenuStyle && ContextMenuStyle.getThemeStyleSheet ? ContextMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',DockStyle && DockStyle.getThemeStyleSheet ? DockStyle.getThemeStyleSheet(undefined, styleProps) : '',MenuStyle && MenuStyle.getThemeStyleSheet ? MenuStyle.getThemeStyleSheet(undefined, styleProps) : '',MenubarStyle && MenubarStyle.getThemeStyleSheet ? MenubarStyle.getThemeStyleSheet(undefined, styleProps) : '',MegaMenuStyle && MegaMenuStyle.getThemeStyleSheet ? MegaMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',PanelMenuStyle && PanelMenuStyle.getThemeStyleSheet ? PanelMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',StepsStyle && StepsStyle.getThemeStyleSheet ? StepsStyle.getThemeStyleSheet(undefined, styleProps) : '',TabMenuStyle && TabMenuStyle.getThemeStyleSheet ? TabMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',TieredMenuStyle && TieredMenuStyle.getThemeStyleSheet ? TieredMenuStyle.getThemeStyleSheet(undefined, styleProps) : '',MessageStyle && MessageStyle.getThemeStyleSheet ? MessageStyle.getThemeStyleSheet(undefined, styleProps) : '',InlineMessageStyle && InlineMessageStyle.getThemeStyleSheet ? InlineMessageStyle.getThemeStyleSheet(undefined, styleProps) : '',ToastStyle && ToastStyle.getThemeStyleSheet ? ToastStyle.getThemeStyleSheet(undefined, styleProps) : '',CarouselStyle && CarouselStyle.getThemeStyleSheet ? CarouselStyle.getThemeStyleSheet(undefined, styleProps) : '',GalleriaStyle && GalleriaStyle.getThemeStyleSheet ? GalleriaStyle.getThemeStyleSheet(undefined, styleProps) : '',ImageStyle && ImageStyle.getThemeStyleSheet ? ImageStyle.getThemeStyleSheet(undefined, styleProps) : '',ImageCompareStyle && ImageCompareStyle.getThemeStyleSheet ? ImageCompareStyle.getThemeStyleSheet(undefined, styleProps) : '',AvatarStyle && AvatarStyle.getThemeStyleSheet ? AvatarStyle.getThemeStyleSheet(undefined, styleProps) : '',AvatarGroupStyle && AvatarGroupStyle.getThemeStyleSheet ? AvatarGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',BadgeStyle && BadgeStyle.getThemeStyleSheet ? BadgeStyle.getThemeStyleSheet(undefined, styleProps) : '',BlockUIStyle && BlockUIStyle.getThemeStyleSheet ? BlockUIStyle.getThemeStyleSheet(undefined, styleProps) : '',ChipStyle && ChipStyle.getThemeStyleSheet ? ChipStyle.getThemeStyleSheet(undefined, styleProps) : '',InplaceStyle && InplaceStyle.getThemeStyleSheet ? InplaceStyle.getThemeStyleSheet(undefined, styleProps) : '',MeterGroupStyle && MeterGroupStyle.getThemeStyleSheet ? MeterGroupStyle.getThemeStyleSheet(undefined, styleProps) : '',OverlayBadgeStyle && OverlayBadgeStyle.getThemeStyleSheet ? OverlayBadgeStyle.getThemeStyleSheet(undefined, styleProps) : '',ScrollTopStyle && ScrollTopStyle.getThemeStyleSheet ? ScrollTopStyle.getThemeStyleSheet(undefined, styleProps) : '',SkeletonStyle && SkeletonStyle.getThemeStyleSheet ? SkeletonStyle.getThemeStyleSheet(undefined, styleProps) : '',ProgressBarStyle && ProgressBarStyle.getThemeStyleSheet ? ProgressBarStyle.getThemeStyleSheet(undefined, styleProps) : '',ProgressSpinnerStyle && ProgressSpinnerStyle.getThemeStyleSheet ? ProgressSpinnerStyle.getThemeStyleSheet(undefined, styleProps) : '',TagStyle && TagStyle.getThemeStyleSheet ? TagStyle.getThemeStyleSheet(undefined, styleProps) : '',TerminalStyle && TerminalStyle.getThemeStyleSheet ? TerminalStyle.getThemeStyleSheet(undefined, styleProps) : '',FormStyle && FormStyle.getThemeStyleSheet ? FormStyle.getThemeStyleSheet(undefined, styleProps) : '',FormFieldStyle && FormFieldStyle.getThemeStyleSheet ? FormFieldStyle.getThemeStyleSheet(undefined, styleProps) : '',BadgeDirectiveStyle && BadgeDirectiveStyle.getThemeStyleSheet ? BadgeDirectiveStyle.getThemeStyleSheet(undefined, styleProps) : '',TooltipStyle && TooltipStyle.getThemeStyleSheet ? TooltipStyle.getThemeStyleSheet(undefined, styleProps) : '',RippleStyle && RippleStyle.getThemeStyleSheet ? RippleStyle.getThemeStyleSheet(undefined, styleProps) : '',StyleClassStyle && StyleClassStyle.getThemeStyleSheet ? StyleClassStyle.getThemeStyleSheet(undefined, styleProps) : '',FocusTrapStyle && FocusTrapStyle.getThemeStyleSheet ? FocusTrapStyle.getThemeStyleSheet(undefined, styleProps) : '',AnimateOnScrollStyle && AnimateOnScrollStyle.getThemeStyleSheet ? AnimateOnScrollStyle.getThemeStyleSheet(undefined, styleProps) : '',KeyFilterStyle && KeyFilterStyle.getThemeStyleSheet ? KeyFilterStyle.getThemeStyleSheet(undefined, styleProps) : ''
].join('');

const defineNitroPlugin = (def) => def;
const _1NOEJFVUmrHms_f7z4Exgliy1TtIbZRz_39X34iafxE = defineNitroPlugin(async (nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.unshift(stylesToTop);
    html.head.push(styles);
    html.head.push(themes);
  });
});

const plugins = [
  _s14Swj5WnfUC8gRIih9bsPfujB855hAsdxlz6vIHco,
_1NOEJFVUmrHms_f7z4Exgliy1TtIbZRz_39X34iafxE
];

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"2acfa-A+Mh9AXBcGnRNyKHhWUWajaltnk\"",
    "mtime": "2025-04-10T12:58:07.240Z",
    "size": 175354,
    "path": "../public/favicon.ico"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"70-XhZwsCCGGV27QEKPl1iv2jGHTqk\"",
    "mtime": "2025-04-10T13:01:25.585Z",
    "size": 112,
    "path": "../public/robots.txt"
  },
  "/sitemap.xml": {
    "type": "application/xml",
    "etag": "\"286-qonpcjCzFzsnVlBytc7Q0gUN4hA\"",
    "mtime": "2025-04-10T13:02:23.013Z",
    "size": 646,
    "path": "../public/sitemap.xml"
  },
  "/_nuxt/0Qre1QGV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6fd-1xVr3SFapZLqVIG2HJTZFp7Xchc\"",
    "mtime": "2025-04-18T08:56:47.729Z",
    "size": 1789,
    "path": "../public/_nuxt/0Qre1QGV.js"
  },
  "/_nuxt/0tDdEq8b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ac4-7fCSSnBNUqEuC8HwG12Es1H1Hc8\"",
    "mtime": "2025-04-18T08:56:47.766Z",
    "size": 6852,
    "path": "../public/_nuxt/0tDdEq8b.js"
  },
  "/_nuxt/6czoODYN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3c4-MGr1g0ZT7KhZIF22DrVwiHJBqbo\"",
    "mtime": "2025-04-18T08:56:47.746Z",
    "size": 964,
    "path": "../public/_nuxt/6czoODYN.js"
  },
  "/_nuxt/a2dPSMXm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d3-rZLlGFBxSgC9wtbrGT73Ufku0Kw\"",
    "mtime": "2025-04-18T08:56:47.863Z",
    "size": 467,
    "path": "../public/_nuxt/a2dPSMXm.js"
  },
  "/_nuxt/AF6oAgz6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7e5-HSm33L1j8KiWtcuPAgn2VZ+i+fg\"",
    "mtime": "2025-04-18T08:56:47.773Z",
    "size": 2021,
    "path": "../public/_nuxt/AF6oAgz6.js"
  },
  "/_nuxt/affiliate-1.BdNJ6Plb.jpg": {
    "type": "image/jpeg",
    "etag": "\"31e3-TeqW5g3Z/R0czFbfOgHpScDrm0k\"",
    "mtime": "2025-04-18T08:56:47.632Z",
    "size": 12771,
    "path": "../public/_nuxt/affiliate-1.BdNJ6Plb.jpg"
  },
  "/_nuxt/affiliate-2.Dbyp0-qc.jpg": {
    "type": "image/jpeg",
    "etag": "\"3213-+6aWHsA8f9JM1zLxg5DyunWwq8I\"",
    "mtime": "2025-04-18T08:56:47.630Z",
    "size": 12819,
    "path": "../public/_nuxt/affiliate-2.Dbyp0-qc.jpg"
  },
  "/_nuxt/affiliate-3.CuWs4sPT.jpg": {
    "type": "image/jpeg",
    "etag": "\"3d2c-ONfzNWB1di6wU8Wu28pr9w7AH6U\"",
    "mtime": "2025-04-18T08:56:47.630Z",
    "size": 15660,
    "path": "../public/_nuxt/affiliate-3.CuWs4sPT.jpg"
  },
  "/_nuxt/affiliate-4.DpNJnVQl.jpg": {
    "type": "image/jpeg",
    "etag": "\"3c35-2ojGePJ4HPUIk4IvqG/Y7U/EvAM\"",
    "mtime": "2025-04-18T08:56:47.631Z",
    "size": 15413,
    "path": "../public/_nuxt/affiliate-4.DpNJnVQl.jpg"
  },
  "/_nuxt/affiliate-5.DWbTcf3G.jpg": {
    "type": "image/jpeg",
    "etag": "\"39ef-obKoo8Z5BhkuM8pi931/33g9LxI\"",
    "mtime": "2025-04-18T08:56:47.613Z",
    "size": 14831,
    "path": "../public/_nuxt/affiliate-5.DWbTcf3G.jpg"
  },
  "/_nuxt/affiliate-6._BagaXK3.jpg": {
    "type": "image/jpeg",
    "etag": "\"2efc-6LTF9r/sAh9KZeVx9IUmKj4OLAo\"",
    "mtime": "2025-04-18T08:56:47.631Z",
    "size": 12028,
    "path": "../public/_nuxt/affiliate-6._BagaXK3.jpg"
  },
  "/_nuxt/air-freight._tpWwtrb.jpg": {
    "type": "image/jpeg",
    "etag": "\"2801e-u7TUhyqN4wN8eJkjNeJN9xMC+Rw\"",
    "mtime": "2025-04-18T08:56:47.599Z",
    "size": 163870,
    "path": "../public/_nuxt/air-freight._tpWwtrb.jpg"
  },
  "/_nuxt/B-s30Un5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c0e-vYfMred89tlUyk0FaPhb317Vppc\"",
    "mtime": "2025-04-18T08:56:47.795Z",
    "size": 3086,
    "path": "../public/_nuxt/B-s30Un5.js"
  },
  "/_nuxt/B20SvT0k.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ddc-Pl5J4gyWm2g5v3TySdlFEQ/3Coc\"",
    "mtime": "2025-04-18T08:56:47.698Z",
    "size": 3548,
    "path": "../public/_nuxt/B20SvT0k.js"
  },
  "/_nuxt/B34p35se.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fed-xl0Ui6TA75oo6su0AWBf0LqGzpU\"",
    "mtime": "2025-04-18T08:56:47.820Z",
    "size": 4077,
    "path": "../public/_nuxt/B34p35se.js"
  },
  "/_nuxt/B7wmenLa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"401-u/wbQN3/XpFWpR8omLn68EJPt9E\"",
    "mtime": "2025-04-18T08:56:47.855Z",
    "size": 1025,
    "path": "../public/_nuxt/B7wmenLa.js"
  },
  "/_nuxt/B8y1R3QG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"209c-twgYmvvCWGTv364ME+ZPdeym8o0\"",
    "mtime": "2025-04-18T08:56:47.853Z",
    "size": 8348,
    "path": "../public/_nuxt/B8y1R3QG.js"
  },
  "/_nuxt/Ba4EFJJ7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"48d-R/HE3xNmSaeNrWIjTvbrC3fS+jU\"",
    "mtime": "2025-04-18T08:56:47.865Z",
    "size": 1165,
    "path": "../public/_nuxt/Ba4EFJJ7.js"
  },
  "/_nuxt/BAsvFpjJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"54b7-17o58pCOdSzO6pzvtRwjZsAZuVI\"",
    "mtime": "2025-04-18T08:56:47.843Z",
    "size": 21687,
    "path": "../public/_nuxt/BAsvFpjJ.js"
  },
  "/_nuxt/BCb3ciDz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1bb5-2NXDC5VYzgogaA1UuAiWH/UNpCI\"",
    "mtime": "2025-04-18T08:56:47.775Z",
    "size": 7093,
    "path": "../public/_nuxt/BCb3ciDz.js"
  },
  "/_nuxt/BDm_egGk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"552-QL9qG8jfUS6RAXVIIHfhOPd0bC4\"",
    "mtime": "2025-04-18T08:56:47.863Z",
    "size": 1362,
    "path": "../public/_nuxt/BDm_egGk.js"
  },
  "/_nuxt/BD_eETv7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ddd-ISk/35L+4aD5bc/ZhqywvnIJIBk\"",
    "mtime": "2025-04-18T08:56:47.855Z",
    "size": 3549,
    "path": "../public/_nuxt/BD_eETv7.js"
  },
  "/_nuxt/BeMCNyrY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"271c-GK6R83STr4ew1geNZcykEp2J1Cc\"",
    "mtime": "2025-04-18T08:56:47.747Z",
    "size": 10012,
    "path": "../public/_nuxt/BeMCNyrY.js"
  },
  "/_nuxt/BE_B0s2K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d80-7ANFFCbvZXzgQHebTKFb7oFjVY4\"",
    "mtime": "2025-04-18T08:56:47.753Z",
    "size": 3456,
    "path": "../public/_nuxt/BE_B0s2K.js"
  },
  "/_nuxt/BfHCNKLc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b48-iWjvdDrz14ftOsAdJx+pFs7rlAM\"",
    "mtime": "2025-04-18T08:56:47.684Z",
    "size": 11080,
    "path": "../public/_nuxt/BfHCNKLc.js"
  },
  "/_nuxt/BfXX7_j5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2103-PEiqdKbBtoCowszcTa20etZ8hgg\"",
    "mtime": "2025-04-18T08:56:47.796Z",
    "size": 8451,
    "path": "../public/_nuxt/BfXX7_j5.js"
  },
  "/_nuxt/BFyMTxY_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8037-SmolUFoZMlF7wQ6z8f2v1qUlu20\"",
    "mtime": "2025-04-18T08:56:47.667Z",
    "size": 32823,
    "path": "../public/_nuxt/BFyMTxY_.js"
  },
  "/_nuxt/BFze7Xqc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1bc-RFMxiHymFiMauTlhiYNwX8wAAbo\"",
    "mtime": "2025-04-18T08:56:47.812Z",
    "size": 444,
    "path": "../public/_nuxt/BFze7Xqc.js"
  },
  "/_nuxt/BG8WFidV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1177-HWIeYhfM8NkjtgkTqetHfyXKlfs\"",
    "mtime": "2025-04-18T08:56:47.830Z",
    "size": 4471,
    "path": "../public/_nuxt/BG8WFidV.js"
  },
  "/_nuxt/BH1O5heM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d72-iw05LXJ5Plqwb8vQ5KNwKmCrHTE\"",
    "mtime": "2025-04-18T08:56:47.662Z",
    "size": 3442,
    "path": "../public/_nuxt/BH1O5heM.js"
  },
  "/_nuxt/BiK_rwPo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e7c-8slNojbYoar53ecine68EvV7enY\"",
    "mtime": "2025-04-18T08:56:47.771Z",
    "size": 7804,
    "path": "../public/_nuxt/BiK_rwPo.js"
  },
  "/_nuxt/BITs-jRu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"461-HioY+mK1zOdnK414E/FDMInHmgg\"",
    "mtime": "2025-04-18T08:56:47.802Z",
    "size": 1121,
    "path": "../public/_nuxt/BITs-jRu.js"
  },
  "/_nuxt/Bj1QmlB_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10fc-IGWTKHlzwdWIm2b7VDgxNcdfmA0\"",
    "mtime": "2025-04-18T08:56:47.753Z",
    "size": 4348,
    "path": "../public/_nuxt/Bj1QmlB_.js"
  },
  "/_nuxt/Bk_xG6ia.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d48-C8U8NM17IAEPSR/lYkOFqhc4mnA\"",
    "mtime": "2025-04-18T08:56:47.863Z",
    "size": 3400,
    "path": "../public/_nuxt/Bk_xG6ia.js"
  },
  "/_nuxt/BlBd1IDK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"165b-ZWH3VaHwlppjXrn2TgKcSC9Btnc\"",
    "mtime": "2025-04-18T08:56:47.700Z",
    "size": 5723,
    "path": "../public/_nuxt/BlBd1IDK.js"
  },
  "/_nuxt/BlW6k4sD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"23f6-CrYYIPNVIvdjFLyHzbJCVrKiqk8\"",
    "mtime": "2025-04-18T08:56:47.793Z",
    "size": 9206,
    "path": "../public/_nuxt/BlW6k4sD.js"
  },
  "/_nuxt/BmJu6AM4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3dd-21lGK67QB1cxzPrpwtL/kXtalfo\"",
    "mtime": "2025-04-18T08:56:47.733Z",
    "size": 989,
    "path": "../public/_nuxt/BmJu6AM4.js"
  },
  "/_nuxt/BMXFMeIp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"66-wPnwda+eLoLBTiSyYGFrB3L3LfQ\"",
    "mtime": "2025-04-18T08:56:47.752Z",
    "size": 102,
    "path": "../public/_nuxt/BMXFMeIp.js"
  },
  "/_nuxt/BmzmVpXU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ce-0J9xPhtLbXGqZErud4sn2GK8SL8\"",
    "mtime": "2025-04-18T08:56:47.849Z",
    "size": 462,
    "path": "../public/_nuxt/BmzmVpXU.js"
  },
  "/_nuxt/BNfd79vU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3501-qlSLIO9xckH/TQkSoPz0mWsj0bw\"",
    "mtime": "2025-04-18T08:56:47.781Z",
    "size": 13569,
    "path": "../public/_nuxt/BNfd79vU.js"
  },
  "/_nuxt/BnIrb9Qh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4f0-79TVrhL0V6xi5ZkoqR2GrWytJcU\"",
    "mtime": "2025-04-18T08:56:47.800Z",
    "size": 1264,
    "path": "../public/_nuxt/BnIrb9Qh.js"
  },
  "/_nuxt/BnjfZgYi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1829-2AXjeZo1o3H6D36K1uSse/0drZM\"",
    "mtime": "2025-04-18T08:56:47.682Z",
    "size": 6185,
    "path": "../public/_nuxt/BnjfZgYi.js"
  },
  "/_nuxt/BOXwGcfp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"121-xuUFb2lV0Y9INp4gCZ8CXwbWqpY\"",
    "mtime": "2025-04-18T08:56:47.787Z",
    "size": 289,
    "path": "../public/_nuxt/BOXwGcfp.js"
  },
  "/_nuxt/BP_YvZ_Y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15d1-/ku52fi7rnfASj2N+nq1i6s/0CM\"",
    "mtime": "2025-04-18T08:56:47.665Z",
    "size": 5585,
    "path": "../public/_nuxt/BP_YvZ_Y.js"
  },
  "/_nuxt/Bq0FGjcu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"73f4-8MN3IcgrFvDC5/CQ2LQz+jtyoE4\"",
    "mtime": "2025-04-18T08:56:47.843Z",
    "size": 29684,
    "path": "../public/_nuxt/Bq0FGjcu.js"
  },
  "/_nuxt/BqSeNZ_T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e24-1eaAfRXy0cph6L8IgTBHFBcijv0\"",
    "mtime": "2025-04-18T08:56:47.703Z",
    "size": 7716,
    "path": "../public/_nuxt/BqSeNZ_T.js"
  },
  "/_nuxt/BqZQl0q4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f3-V1S6wlRewLjQ1t+V28HP6h+gJSM\"",
    "mtime": "2025-04-18T08:56:47.823Z",
    "size": 243,
    "path": "../public/_nuxt/BqZQl0q4.js"
  },
  "/_nuxt/Br4JxZ69.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"796-j8oU4T4dzoz7VjYlQ4522DhWRlg\"",
    "mtime": "2025-04-18T08:56:47.820Z",
    "size": 1942,
    "path": "../public/_nuxt/Br4JxZ69.js"
  },
  "/_nuxt/BrXswqlP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ee-9Xz6wdq513KyfDsT1wJuAOUVTrM\"",
    "mtime": "2025-04-18T08:56:47.690Z",
    "size": 750,
    "path": "../public/_nuxt/BrXswqlP.js"
  },
  "/_nuxt/BSjCDGWV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"51cb-kjM0FUEToBhtPYMl7nQf72Uljbg\"",
    "mtime": "2025-04-18T08:56:47.665Z",
    "size": 20939,
    "path": "../public/_nuxt/BSjCDGWV.js"
  },
  "/_nuxt/Bt7jiaQx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"66c9-mmCVpu27wOpwhRImB9jOOmXMyJo\"",
    "mtime": "2025-04-18T08:56:47.784Z",
    "size": 26313,
    "path": "../public/_nuxt/Bt7jiaQx.js"
  },
  "/_nuxt/BU1Dursf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"eda-4uAHWQ1PkhKCHTcy8+tQTqZ8Qxk\"",
    "mtime": "2025-04-18T08:56:47.663Z",
    "size": 3802,
    "path": "../public/_nuxt/BU1Dursf.js"
  },
  "/_nuxt/BxyQc1UV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"13c6-2zxr9V2D6g4ZDUrZfveWqPyZKYg\"",
    "mtime": "2025-04-18T08:56:47.817Z",
    "size": 5062,
    "path": "../public/_nuxt/BxyQc1UV.js"
  },
  "/_nuxt/C0hDOxjr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"66-n3mBznEWfY+9J/l5tNE1yPsq1sM\"",
    "mtime": "2025-04-18T08:56:47.752Z",
    "size": 102,
    "path": "../public/_nuxt/C0hDOxjr.js"
  },
  "/_nuxt/C12EJEmV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"296c-qkEQCiboGC8RdxpNNtpbE+EdqAw\"",
    "mtime": "2025-04-18T08:56:47.793Z",
    "size": 10604,
    "path": "../public/_nuxt/C12EJEmV.js"
  },
  "/_nuxt/C1BUMq9G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5761-qITea3g2yb+ZdlHmwK7PXp88pJo\"",
    "mtime": "2025-04-18T08:56:47.735Z",
    "size": 22369,
    "path": "../public/_nuxt/C1BUMq9G.js"
  },
  "/_nuxt/C2K7bTDj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2121-aFrttelIIzFdm+gNagCr2v/iDDs\"",
    "mtime": "2025-04-18T08:56:47.747Z",
    "size": 8481,
    "path": "../public/_nuxt/C2K7bTDj.js"
  },
  "/_nuxt/C7x0lGyF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"408b-ceyvMXZNr+xlixdBuWie740t3jI\"",
    "mtime": "2025-04-18T08:56:47.697Z",
    "size": 16523,
    "path": "../public/_nuxt/C7x0lGyF.js"
  },
  "/_nuxt/CaDrQuTg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a4-mRUTxxw/YL+/q+OceVkNPr2Teh8\"",
    "mtime": "2025-04-18T08:56:47.685Z",
    "size": 164,
    "path": "../public/_nuxt/CaDrQuTg.js"
  },
  "/_nuxt/cargo-plane.Br_9PT8d.jpg": {
    "type": "image/jpeg",
    "etag": "\"2b777-xRa8y7R9bTUOXW3leUkyxk/CqAw\"",
    "mtime": "2025-04-18T08:56:47.637Z",
    "size": 178039,
    "path": "../public/_nuxt/cargo-plane.Br_9PT8d.jpg"
  },
  "/_nuxt/CCK7mG25.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2805-6aki1xD+kRP0h5AZUGnl+3oQZiM\"",
    "mtime": "2025-04-18T08:56:47.774Z",
    "size": 10245,
    "path": "../public/_nuxt/CCK7mG25.js"
  },
  "/_nuxt/CCrfIVSk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1101-Oxq8dvH3+PfSRxB/cNZ4yVCPM+0\"",
    "mtime": "2025-04-18T08:56:47.846Z",
    "size": 4353,
    "path": "../public/_nuxt/CCrfIVSk.js"
  },
  "/_nuxt/CCrfJtj4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"545a-OoTDYk3BhCBaRSjv7DwBLG+rzQc\"",
    "mtime": "2025-04-18T08:56:47.795Z",
    "size": 21594,
    "path": "../public/_nuxt/CCrfJtj4.js"
  },
  "/_nuxt/CDaEvJw9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b91-ffJ0/F4OkxtCEBiCCUIdtN56Lfg\"",
    "mtime": "2025-04-18T08:56:47.863Z",
    "size": 2961,
    "path": "../public/_nuxt/CDaEvJw9.js"
  },
  "/_nuxt/CdmMgknq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"68-Kbr/xUZxk+TmQozv8BLCCGlPZVQ\"",
    "mtime": "2025-04-18T08:56:47.677Z",
    "size": 104,
    "path": "../public/_nuxt/CdmMgknq.js"
  },
  "/_nuxt/CDZxl_AN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2f66-hCHrajlJ/VhCQek4BDz61mgmTe8\"",
    "mtime": "2025-04-18T08:56:47.665Z",
    "size": 12134,
    "path": "../public/_nuxt/CDZxl_AN.js"
  },
  "/_nuxt/Cf3IWLeX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b1f-6FkhTpkpKzjLP53SdzCztKsQF84\"",
    "mtime": "2025-04-18T08:56:47.855Z",
    "size": 2847,
    "path": "../public/_nuxt/Cf3IWLeX.js"
  },
  "/_nuxt/CglAGSmq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7d8b-+XIQ3izLJ9NPiarUf/GqyUcnxj0\"",
    "mtime": "2025-04-18T08:56:47.840Z",
    "size": 32139,
    "path": "../public/_nuxt/CglAGSmq.js"
  },
  "/_nuxt/CGOSooTt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"547a-+kw7m+98ZshKFl0lRSPRLNA2PmA\"",
    "mtime": "2025-04-18T08:56:47.843Z",
    "size": 21626,
    "path": "../public/_nuxt/CGOSooTt.js"
  },
  "/_nuxt/CGRQmFTT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b27-Kz5V0bnwbJqTJcClayOEMBgf68s\"",
    "mtime": "2025-04-18T08:56:47.805Z",
    "size": 11047,
    "path": "../public/_nuxt/CGRQmFTT.js"
  },
  "/_nuxt/CigOHa55.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c08f-pAAE0UZbG8/R8QqB5+JJXSjgjkQ\"",
    "mtime": "2025-04-18T08:56:47.846Z",
    "size": 49295,
    "path": "../public/_nuxt/CigOHa55.js"
  },
  "/_nuxt/Cjzj9DGm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"14de-tA/iP8FgWA8nIz5+VETU5YWzlq0\"",
    "mtime": "2025-04-18T08:56:47.774Z",
    "size": 5342,
    "path": "../public/_nuxt/Cjzj9DGm.js"
  },
  "/_nuxt/CKayrGSb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c84-D0NjdGzYxW8UBj/e8qpr+SN66g0\"",
    "mtime": "2025-04-18T08:56:47.862Z",
    "size": 3204,
    "path": "../public/_nuxt/CKayrGSb.js"
  },
  "/_nuxt/CLkcT9Q7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4738-fEdcf04Oy/E1YraMhSdEuZ53IgY\"",
    "mtime": "2025-04-18T08:56:47.679Z",
    "size": 18232,
    "path": "../public/_nuxt/CLkcT9Q7.js"
  },
  "/_nuxt/CMF3thFU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b00-XcPCnk+EVqNWAR8HlJBYG2X6tV8\"",
    "mtime": "2025-04-18T08:56:47.751Z",
    "size": 6912,
    "path": "../public/_nuxt/CMF3thFU.js"
  },
  "/_nuxt/CNvx1l84.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"218-S9ieFf+V44T72509hA3kWMUtuj4\"",
    "mtime": "2025-04-18T08:56:47.729Z",
    "size": 536,
    "path": "../public/_nuxt/CNvx1l84.js"
  },
  "/_nuxt/CojV6VIp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"982-xlhTVPBO5kFLWiE0F1km9qWtfgY\"",
    "mtime": "2025-04-18T08:56:47.850Z",
    "size": 2434,
    "path": "../public/_nuxt/CojV6VIp.js"
  },
  "/_nuxt/contact-us.XwfrBarW.jpg": {
    "type": "image/jpeg",
    "etag": "\"1ab03-1KOAKuhoi3CEkDj5vS/teF8dqeg\"",
    "mtime": "2025-04-18T08:56:47.597Z",
    "size": 109315,
    "path": "../public/_nuxt/contact-us.XwfrBarW.jpg"
  },
  "/_nuxt/containers-1.DPhJb9wS.png": {
    "type": "image/png",
    "etag": "\"40ced-eHbitgsepvqcjJIncEoh/VnlHcw\"",
    "mtime": "2025-04-18T08:56:47.600Z",
    "size": 265453,
    "path": "../public/_nuxt/containers-1.DPhJb9wS.png"
  },
  "/_nuxt/containers-2._IwViIP3.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ccad-Hf/kyo/97UdBtN0guMe2RiOMsG0\"",
    "mtime": "2025-04-18T08:56:47.635Z",
    "size": 183469,
    "path": "../public/_nuxt/containers-2._IwViIP3.jpg"
  },
  "/_nuxt/contract-logistics.DUf05ZNN.jpg": {
    "type": "image/jpeg",
    "etag": "\"226dc-p/X9sAgKhHvFdnmExeDLuADO5GU\"",
    "mtime": "2025-04-18T08:56:47.603Z",
    "size": 141020,
    "path": "../public/_nuxt/contract-logistics.DUf05ZNN.jpg"
  },
  "/_nuxt/CoowjaSN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9c1-aVv4zZi6hX5mHJtrMNJISSyGpJM\"",
    "mtime": "2025-04-18T08:56:47.855Z",
    "size": 2497,
    "path": "../public/_nuxt/CoowjaSN.js"
  },
  "/_nuxt/CRIsMSHG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"25e-ftWCeFceqBUkeQW2kFztJMRH+LA\"",
    "mtime": "2025-04-18T08:56:47.802Z",
    "size": 606,
    "path": "../public/_nuxt/CRIsMSHG.js"
  },
  "/_nuxt/CSGNAuZ9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"138c-BHTKAKbdqv2BaTXlPlj1geUFQjI\"",
    "mtime": "2025-04-18T08:56:47.747Z",
    "size": 5004,
    "path": "../public/_nuxt/CSGNAuZ9.js"
  },
  "/_nuxt/CsrZ5yGP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"118a-7GFF+5wI0nCVbhgtq354EomNiZE\"",
    "mtime": "2025-04-18T08:56:47.752Z",
    "size": 4490,
    "path": "../public/_nuxt/CsrZ5yGP.js"
  },
  "/_nuxt/CV9JBGyn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3364-ITDLUUA0dhNDoYP50IxF2GXdPxg\"",
    "mtime": "2025-04-18T08:56:47.805Z",
    "size": 13156,
    "path": "../public/_nuxt/CV9JBGyn.js"
  },
  "/_nuxt/CVi4kMqL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"22af-7M3+P0CYp6Zyz5vhfMShGwF+Va4\"",
    "mtime": "2025-04-18T08:56:47.679Z",
    "size": 8879,
    "path": "../public/_nuxt/CVi4kMqL.js"
  },
  "/_nuxt/CW9WqglX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"be1-4I7l0B8Pc6yBkMIXOjzp8SVSkVs\"",
    "mtime": "2025-04-18T08:56:47.745Z",
    "size": 3041,
    "path": "../public/_nuxt/CW9WqglX.js"
  },
  "/_nuxt/CWa_sc_h.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"89c-OkGHONqMpLkRg99FeSMcshSQCz0\"",
    "mtime": "2025-04-18T08:56:47.745Z",
    "size": 2204,
    "path": "../public/_nuxt/CWa_sc_h.js"
  },
  "/_nuxt/Cx0exLnc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"214-rcepRH+AxROy8LUMS+OaeaANo48\"",
    "mtime": "2025-04-18T08:56:47.790Z",
    "size": 532,
    "path": "../public/_nuxt/Cx0exLnc.js"
  },
  "/_nuxt/Cxq0RZ5w.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f22-WLE0uq7sKR6PuI38Xd8XPFMTHo0\"",
    "mtime": "2025-04-18T08:56:47.745Z",
    "size": 3874,
    "path": "../public/_nuxt/Cxq0RZ5w.js"
  },
  "/_nuxt/CXtoCEMh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"47d-s6rXqfOHaW7Adp3eIm+5m6iXDbU\"",
    "mtime": "2025-04-18T08:56:47.684Z",
    "size": 1149,
    "path": "../public/_nuxt/CXtoCEMh.js"
  },
  "/_nuxt/CybY293E.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4946-WjhEvEqVsAyfjqN0r6tgJ73J8Cc\"",
    "mtime": "2025-04-18T08:56:47.863Z",
    "size": 18758,
    "path": "../public/_nuxt/CybY293E.js"
  },
  "/_nuxt/CyEhuKbL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"52b-JBnI5BhpvT3HPGm/kfMSvSbtE7g\"",
    "mtime": "2025-04-18T08:56:47.821Z",
    "size": 1323,
    "path": "../public/_nuxt/CyEhuKbL.js"
  },
  "/_nuxt/CyExDWfy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a98-hlA5N+aqOo8l3zyZn+FpMyCSYWs\"",
    "mtime": "2025-04-18T08:56:47.817Z",
    "size": 15000,
    "path": "../public/_nuxt/CyExDWfy.js"
  },
  "/_nuxt/CZ1UkT9T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c28-tOS3Msg99EX8chLkUHlGBhBw3nc\"",
    "mtime": "2025-04-18T08:56:47.833Z",
    "size": 11304,
    "path": "../public/_nuxt/CZ1UkT9T.js"
  },
  "/_nuxt/CznFVVkb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"664b-lhs/pp6YpPJ/fbpw8P2oGHB3/y0\"",
    "mtime": "2025-04-18T08:56:47.867Z",
    "size": 26187,
    "path": "../public/_nuxt/CznFVVkb.js"
  },
  "/_nuxt/C_0yHYW4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bc0-1ZAbh3PQo1FMqZKgOIYGNysv9PY\"",
    "mtime": "2025-04-18T08:56:47.665Z",
    "size": 3008,
    "path": "../public/_nuxt/C_0yHYW4.js"
  },
  "/_nuxt/C_iZ8I-T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a02-QL5EzyPpPURfZ7SoHPrn/am2PhQ\"",
    "mtime": "2025-04-18T08:56:47.795Z",
    "size": 6658,
    "path": "../public/_nuxt/C_iZ8I-T.js"
  },
  "/_nuxt/D2I85gBQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"218-0zQaTO9+6gazD+AR1nrLT3ShGPs\"",
    "mtime": "2025-04-18T08:56:47.724Z",
    "size": 536,
    "path": "../public/_nuxt/D2I85gBQ.js"
  },
  "/_nuxt/D4OPpP_b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6e1e-L5RgJr6EhZVUT3hR7KxZLcXadYw\"",
    "mtime": "2025-04-18T08:56:47.773Z",
    "size": 28190,
    "path": "../public/_nuxt/D4OPpP_b.js"
  },
  "/_nuxt/D5U4ZwSl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18c-Y3fMQOo2nUkD7yV4ZE9fLs16+GI\"",
    "mtime": "2025-04-18T08:56:47.686Z",
    "size": 396,
    "path": "../public/_nuxt/D5U4ZwSl.js"
  },
  "/_nuxt/D64qf54c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e83-aKZsxWM/JXVA8m1uXUeUkKbpbrg\"",
    "mtime": "2025-04-18T08:56:47.711Z",
    "size": 3715,
    "path": "../public/_nuxt/D64qf54c.js"
  },
  "/_nuxt/D6XjPm45.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"794-ybXaFrf2UGrihtj1p1svJpEJK44\"",
    "mtime": "2025-04-18T08:56:47.804Z",
    "size": 1940,
    "path": "../public/_nuxt/D6XjPm45.js"
  },
  "/_nuxt/D6zaBMMu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c4c-cqND8Fq9G0mvVUt4x1ueSB6N0OQ\"",
    "mtime": "2025-04-18T08:56:47.821Z",
    "size": 11340,
    "path": "../public/_nuxt/D6zaBMMu.js"
  },
  "/_nuxt/D78rJ8vZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b2-lwv4J5FJvXyKrQ+61fhxzmN3WWY\"",
    "mtime": "2025-04-18T08:56:47.809Z",
    "size": 434,
    "path": "../public/_nuxt/D78rJ8vZ.js"
  },
  "/_nuxt/D7Ir2U6L.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"756d-cOK6lPmpXkFLsmQITuUvZcSmabk\"",
    "mtime": "2025-04-18T08:56:47.709Z",
    "size": 30061,
    "path": "../public/_nuxt/D7Ir2U6L.js"
  },
  "/_nuxt/D88DWzaB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3b21-REDSrdP5vpjXk0Saf5f0VxH8J/k\"",
    "mtime": "2025-04-18T08:56:47.836Z",
    "size": 15137,
    "path": "../public/_nuxt/D88DWzaB.js"
  },
  "/_nuxt/D8avhuev.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"132-qRe/8/wOnFI6gnZEHeKnW/vjF30\"",
    "mtime": "2025-04-18T08:56:47.684Z",
    "size": 306,
    "path": "../public/_nuxt/D8avhuev.js"
  },
  "/_nuxt/DAg9wYFT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3b7-ZxfRzM2m3F40aGA4/Rhj39R/wGE\"",
    "mtime": "2025-04-18T08:56:47.684Z",
    "size": 951,
    "path": "../public/_nuxt/DAg9wYFT.js"
  },
  "/_nuxt/Daha3ykr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6de-JeNe1Zfja4wmMg9yxcxsFxRq1dw\"",
    "mtime": "2025-04-18T08:56:47.698Z",
    "size": 1758,
    "path": "../public/_nuxt/Daha3ykr.js"
  },
  "/_nuxt/DAqEIePz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1147-df0agL1KYVR3dJ1S9yoVa7zJbFY\"",
    "mtime": "2025-04-18T08:56:47.760Z",
    "size": 4423,
    "path": "../public/_nuxt/DAqEIePz.js"
  },
  "/_nuxt/DBIALV1P.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"26b3-OxajrT0rPvpTDedOzPCLPwbmQ4E\"",
    "mtime": "2025-04-18T08:56:47.665Z",
    "size": 9907,
    "path": "../public/_nuxt/DBIALV1P.js"
  },
  "/_nuxt/DCY7k-J1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bbd-b5aVgtSWL0FOE90bCPN2Ljz73Bo\"",
    "mtime": "2025-04-18T08:56:47.665Z",
    "size": 3005,
    "path": "../public/_nuxt/DCY7k-J1.js"
  },
  "/_nuxt/DDS19r0V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1dee-crQLadJv7RC7VKCxjb7v8gyR8Mw\"",
    "mtime": "2025-04-18T08:56:47.843Z",
    "size": 7662,
    "path": "../public/_nuxt/DDS19r0V.js"
  },
  "/_nuxt/default.cVUcnAm7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"189-rQxUTIEBpSpkeIolzojoiIstkbU\"",
    "mtime": "2025-04-18T08:56:47.660Z",
    "size": 393,
    "path": "../public/_nuxt/default.cVUcnAm7.css"
  },
  "/_nuxt/DFoVByr1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10f6-qGuFOdrIL29M6idKFfJqiJrq0Zs\"",
    "mtime": "2025-04-18T08:56:47.670Z",
    "size": 4342,
    "path": "../public/_nuxt/DFoVByr1.js"
  },
  "/_nuxt/DgehqBfD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3dc-rgTeqLzErv1+q2Xtcn1dtNFOLeA\"",
    "mtime": "2025-04-18T08:56:47.724Z",
    "size": 988,
    "path": "../public/_nuxt/DgehqBfD.js"
  },
  "/_nuxt/DgP5q4Bm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"752-QUqIW8SGB9hjN+8Fuyx5UwRSwYg\"",
    "mtime": "2025-04-18T08:56:47.679Z",
    "size": 1874,
    "path": "../public/_nuxt/DgP5q4Bm.js"
  },
  "/_nuxt/Dhoyybcl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"32c9-9C49NYwlDFkUXbPUa+a0Iboz1k8\"",
    "mtime": "2025-04-18T08:56:47.795Z",
    "size": 13001,
    "path": "../public/_nuxt/Dhoyybcl.js"
  },
  "/_nuxt/DHSJuXaH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3dc-3tbvNHJY0YFo2orGTFJorLK6x+I\"",
    "mtime": "2025-04-18T08:56:47.724Z",
    "size": 988,
    "path": "../public/_nuxt/DHSJuXaH.js"
  },
  "/_nuxt/Dhv3wZoS.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"38a-fHA+GYk8h6MRouDSIrlxe6QWrOU\"",
    "mtime": "2025-04-18T08:56:47.806Z",
    "size": 906,
    "path": "../public/_nuxt/Dhv3wZoS.js"
  },
  "/_nuxt/DJhrjPZ4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"62c0-2+XbGyvm3e0yzHqGFZD6E14gbZk\"",
    "mtime": "2025-04-18T08:56:47.831Z",
    "size": 25280,
    "path": "../public/_nuxt/DJhrjPZ4.js"
  },
  "/_nuxt/DK2eP8E6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d-BbNY1cOcOCcrD7z1n4d8pcyOCwo\"",
    "mtime": "2025-04-18T08:56:47.724Z",
    "size": 61,
    "path": "../public/_nuxt/DK2eP8E6.js"
  },
  "/_nuxt/DkbjyAM4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"130-oWKlxakrlm2ymgTBTvzFw+L3Fn8\"",
    "mtime": "2025-04-18T08:56:47.682Z",
    "size": 304,
    "path": "../public/_nuxt/DkbjyAM4.js"
  },
  "/_nuxt/DKDB9jTF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e1-xynLgVA3q/z9kUQMrn/LbeRQn80\"",
    "mtime": "2025-04-18T08:56:47.763Z",
    "size": 225,
    "path": "../public/_nuxt/DKDB9jTF.js"
  },
  "/_nuxt/DKFFXrjY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d42-iXgmLVpmuM4xNM1GcLjCGph/bCY\"",
    "mtime": "2025-04-18T08:56:47.677Z",
    "size": 3394,
    "path": "../public/_nuxt/DKFFXrjY.js"
  },
  "/_nuxt/DkVTiW4O.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d4-G/zMJ1WAhNnTOBa3/o8BjwYaoSA\"",
    "mtime": "2025-04-18T08:56:47.820Z",
    "size": 468,
    "path": "../public/_nuxt/DkVTiW4O.js"
  },
  "/_nuxt/DkvVPrHr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b3-Q91j+NVS6j1Z7mZXjEbH1kpchOw\"",
    "mtime": "2025-04-18T08:56:47.677Z",
    "size": 179,
    "path": "../public/_nuxt/DkvVPrHr.js"
  },
  "/_nuxt/DlAUqK2U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2025-04-18T08:56:47.702Z",
    "size": 91,
    "path": "../public/_nuxt/DlAUqK2U.js"
  },
  "/_nuxt/DlFPt46N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1636a-4xue6GW6laPjIzzEcoUXywVmOyQ\"",
    "mtime": "2025-04-18T08:56:47.697Z",
    "size": 90986,
    "path": "../public/_nuxt/DlFPt46N.js"
  },
  "/_nuxt/DLrBJtzW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4fa9-kW0sy8QuaLJNR0lgSwDEzUjisRA\"",
    "mtime": "2025-04-18T08:56:47.729Z",
    "size": 20393,
    "path": "../public/_nuxt/DLrBJtzW.js"
  },
  "/_nuxt/DMFbTD8B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a1b6-ilmvx8VkX8JPRpGM7fwJx/6Chng\"",
    "mtime": "2025-04-18T08:56:47.709Z",
    "size": 41398,
    "path": "../public/_nuxt/DMFbTD8B.js"
  },
  "/_nuxt/dmhgTScH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"23a3-MtkD/kIVielirXLJWVMwVvYyM2k\"",
    "mtime": "2025-04-18T08:56:47.843Z",
    "size": 9123,
    "path": "../public/_nuxt/dmhgTScH.js"
  },
  "/_nuxt/DnAWv13y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10a0-otad9+JSUb6WTZ18ubPuFl8ob4Q\"",
    "mtime": "2025-04-18T08:56:47.720Z",
    "size": 4256,
    "path": "../public/_nuxt/DnAWv13y.js"
  },
  "/_nuxt/DocMVo39.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2d9-9wk2LfbQZMmfZUHsqYQ8cgmHdQo\"",
    "mtime": "2025-04-18T08:56:47.748Z",
    "size": 729,
    "path": "../public/_nuxt/DocMVo39.js"
  },
  "/_nuxt/DoHkfJpx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11f5-vPKEIGuVdwJM9PT6PkXwMZVgUjY\"",
    "mtime": "2025-04-18T08:56:47.797Z",
    "size": 4597,
    "path": "../public/_nuxt/DoHkfJpx.js"
  },
  "/_nuxt/Dp1EJtU0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d5-tDAc0cWVFy9djI+4JaxqR+pZUVE\"",
    "mtime": "2025-04-18T08:56:47.699Z",
    "size": 469,
    "path": "../public/_nuxt/Dp1EJtU0.js"
  },
  "/_nuxt/DsG6xawa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7654-xHiLpvKlSouKejzgvp5L/4cOVhs\"",
    "mtime": "2025-04-18T08:56:47.780Z",
    "size": 30292,
    "path": "../public/_nuxt/DsG6xawa.js"
  },
  "/_nuxt/DsQcneMW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3a1-y3ibtWdIMuobH3wkEk+2spOq/JA\"",
    "mtime": "2025-04-18T08:56:47.665Z",
    "size": 929,
    "path": "../public/_nuxt/DsQcneMW.js"
  },
  "/_nuxt/Dt1QIskN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"594d-OeXux2Zv8PD2h419fg3GU8ucKv8\"",
    "mtime": "2025-04-18T08:56:47.827Z",
    "size": 22861,
    "path": "../public/_nuxt/Dt1QIskN.js"
  },
  "/_nuxt/DvSjKwhC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2c3f-TfsMj9QuPyzSE9ZFynICpZiiRj4\"",
    "mtime": "2025-04-18T08:56:47.867Z",
    "size": 11327,
    "path": "../public/_nuxt/DvSjKwhC.js"
  },
  "/_nuxt/DwYIVbMJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12f5-vSJk9GvFA6qtdqcNaRfJn+AU3HA\"",
    "mtime": "2025-04-18T08:56:47.724Z",
    "size": 4853,
    "path": "../public/_nuxt/DwYIVbMJ.js"
  },
  "/_nuxt/DxABg0_V.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a3-Oxc5OTzgqCXC206oe77ZrBdvyIg\"",
    "mtime": "2025-04-18T08:56:47.697Z",
    "size": 419,
    "path": "../public/_nuxt/DxABg0_V.js"
  },
  "/_nuxt/DXDYgKHN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4079-c8vLF8f4XknUij1TTkk8dxqh2tU\"",
    "mtime": "2025-04-18T08:56:47.781Z",
    "size": 16505,
    "path": "../public/_nuxt/DXDYgKHN.js"
  },
  "/_nuxt/DYo5oCNH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"465-HE4DLSwj3iO8ZAat3j+xVlgUrK0\"",
    "mtime": "2025-04-18T08:56:47.747Z",
    "size": 1125,
    "path": "../public/_nuxt/DYo5oCNH.js"
  },
  "/_nuxt/DYWFLcZb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2386-AMc321n+ku49KagXxLhys8AMsS8\"",
    "mtime": "2025-04-18T08:56:47.757Z",
    "size": 9094,
    "path": "../public/_nuxt/DYWFLcZb.js"
  },
  "/_nuxt/DzmVOasW.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d5-vqUU41Mf/qAIkyBlmJuuWju3Ykw\"",
    "mtime": "2025-04-18T08:56:47.730Z",
    "size": 981,
    "path": "../public/_nuxt/DzmVOasW.js"
  },
  "/_nuxt/D_4x3YkE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3de-RdxLyHgAo4L4PCeUHSu0P5JUx+c\"",
    "mtime": "2025-04-18T08:56:47.724Z",
    "size": 990,
    "path": "../public/_nuxt/D_4x3YkE.js"
  },
  "/_nuxt/D_kt0qkk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3f33-CfJTOWV04u8exIOLx3DWpKpj3bk\"",
    "mtime": "2025-04-18T08:56:47.773Z",
    "size": 16179,
    "path": "../public/_nuxt/D_kt0qkk.js"
  },
  "/_nuxt/D_LpeG6J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"172-jG5KCjMrGjMih5z1inV2yYrLq4c\"",
    "mtime": "2025-04-18T08:56:47.726Z",
    "size": 370,
    "path": "../public/_nuxt/D_LpeG6J.js"
  },
  "/_nuxt/entry.DNszYId5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"951d-ad6kLWrd8X+PzIEg+B1eNJYJ8f0\"",
    "mtime": "2025-04-18T08:56:47.637Z",
    "size": 38173,
    "path": "../public/_nuxt/entry.DNszYId5.css"
  },
  "/_nuxt/eNUaKOhF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9eeb-LQqLSWoIYUgHrPfEgld7CtdUlwk\"",
    "mtime": "2025-04-18T08:56:47.687Z",
    "size": 40683,
    "path": "../public/_nuxt/eNUaKOhF.js"
  },
  "/_nuxt/error-404.C3V-3Mc4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"de4-tk05rgubWwonEl8hX4lgLuosKN0\"",
    "mtime": "2025-04-18T08:56:47.637Z",
    "size": 3556,
    "path": "../public/_nuxt/error-404.C3V-3Mc4.css"
  },
  "/_nuxt/error-500.dGVH929u.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75c-KF6NWZfD3QI/4EI5b2MfK1uNuAg\"",
    "mtime": "2025-04-18T08:56:47.640Z",
    "size": 1884,
    "path": "../public/_nuxt/error-500.dGVH929u.css"
  },
  "/_nuxt/EYFpthL3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"285e-r34Ak7g0bblFSpEbr1G6pKtLumk\"",
    "mtime": "2025-04-18T08:56:47.821Z",
    "size": 10334,
    "path": "../public/_nuxt/EYFpthL3.js"
  },
  "/_nuxt/faq.DKjcXN9X.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"9a1-+FD4Omnn5+iE7fGkiZWle7FyGUM\"",
    "mtime": "2025-04-18T08:56:47.658Z",
    "size": 2465,
    "path": "../public/_nuxt/faq.DKjcXN9X.css"
  },
  "/_nuxt/fBIZX7qm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1370-aiUOum1JfKE74t0uV7TYCx3Nk0M\"",
    "mtime": "2025-04-18T08:56:47.704Z",
    "size": 4976,
    "path": "../public/_nuxt/fBIZX7qm.js"
  },
  "/_nuxt/fCjlYKwn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3137-FW0eKPXMlR0fB+m3HZ+yQgooXQE\"",
    "mtime": "2025-04-18T08:56:47.698Z",
    "size": 12599,
    "path": "../public/_nuxt/fCjlYKwn.js"
  },
  "/_nuxt/FPRklOwp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1471-2QZ2DwrgCiFXeJuDRs0iy6QyVzI\"",
    "mtime": "2025-04-18T08:56:47.819Z",
    "size": 5233,
    "path": "../public/_nuxt/FPRklOwp.js"
  },
  "/_nuxt/g0waoi1n.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ca-7GCTRXjJGCaXz0u/UvPQBljJivo\"",
    "mtime": "2025-04-18T08:56:47.722Z",
    "size": 458,
    "path": "../public/_nuxt/g0waoi1n.js"
  },
  "/_nuxt/GaiXfFpf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e74-yQFDV2cZG8RdqglkGZjGY40GnTM\"",
    "mtime": "2025-04-18T08:56:47.697Z",
    "size": 3700,
    "path": "../public/_nuxt/GaiXfFpf.js"
  },
  "/_nuxt/GmeQbAAY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"306-L10gY2jKG8aga9wh+CeVQgOZJQM\"",
    "mtime": "2025-04-18T08:56:47.773Z",
    "size": 774,
    "path": "../public/_nuxt/GmeQbAAY.js"
  },
  "/_nuxt/gPK0ByQQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"68423-yQELa7Y0bfav7SBK6Ne/XrDerpw\"",
    "mtime": "2025-04-18T08:56:47.662Z",
    "size": 427043,
    "path": "../public/_nuxt/gPK0ByQQ.js"
  },
  "/_nuxt/GQLcbJV4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"107f-yvyEHlycKWbc6Tvy1R5ME4r07+g\"",
    "mtime": "2025-04-18T08:56:47.723Z",
    "size": 4223,
    "path": "../public/_nuxt/GQLcbJV4.js"
  },
  "/_nuxt/harbour-2.COSspqt0.jpg": {
    "type": "image/jpeg",
    "etag": "\"48736-+bahLvsKLnngeJYRjU9XuYR8A0U\"",
    "mtime": "2025-04-18T08:56:47.598Z",
    "size": 296758,
    "path": "../public/_nuxt/harbour-2.COSspqt0.jpg"
  },
  "/_nuxt/harbour.CKvyC_6P.jpg": {
    "type": "image/jpeg",
    "etag": "\"39b3f-SJzH8syz29Tup2K8Lkvp87uTaE4\"",
    "mtime": "2025-04-18T08:56:47.597Z",
    "size": 236351,
    "path": "../public/_nuxt/harbour.CKvyC_6P.jpg"
  },
  "/_nuxt/hero-img.DVYsMQ7Y.jpg": {
    "type": "image/jpeg",
    "etag": "\"3b807-biUFzadyOBdgD3fqYn8NN8UWLqI\"",
    "mtime": "2025-04-18T08:56:47.598Z",
    "size": 243719,
    "path": "../public/_nuxt/hero-img.DVYsMQ7Y.jpg"
  },
  "/_nuxt/hNHHL7RM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6c9-KiKlF1SJuTIJeT7MCWpNZLffiAc\"",
    "mtime": "2025-04-18T08:56:47.797Z",
    "size": 1737,
    "path": "../public/_nuxt/hNHHL7RM.js"
  },
  "/_nuxt/HVs8G2si.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1662-TDL8z4CoZXd2h4n2fRbSzlS58L4\"",
    "mtime": "2025-04-18T08:56:47.782Z",
    "size": 5730,
    "path": "../public/_nuxt/HVs8G2si.js"
  },
  "/_nuxt/index.Dgn10e2J.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4e-ogrhnVrT/1UdfgxuXUSuie24cfk\"",
    "mtime": "2025-04-18T08:56:47.657Z",
    "size": 78,
    "path": "../public/_nuxt/index.Dgn10e2J.css"
  },
  "/_nuxt/index.DPJtpnW2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"11d6-aowAMSfBkK0u6aeHmvHhCmalzWY\"",
    "mtime": "2025-04-18T08:56:47.658Z",
    "size": 4566,
    "path": "../public/_nuxt/index.DPJtpnW2.css"
  },
  "/_nuxt/index.DXSZnCIU.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"126-DtCI9C98NG/qGL9Qi9ElIJ7lTMg\"",
    "mtime": "2025-04-18T08:56:47.658Z",
    "size": 294,
    "path": "../public/_nuxt/index.DXSZnCIU.css"
  },
  "/_nuxt/jfX0-rg6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e7-B6q2Qe0eeyIVnbyuCKkqWuFb2g8\"",
    "mtime": "2025-04-18T08:56:47.710Z",
    "size": 743,
    "path": "../public/_nuxt/jfX0-rg6.js"
  },
  "/_nuxt/KTpBsuh_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"eba-/65gyDQipFCbhecnh9CvtRbHO18\"",
    "mtime": "2025-04-18T08:56:47.850Z",
    "size": 3770,
    "path": "../public/_nuxt/KTpBsuh_.js"
  },
  "/_nuxt/leaflet-marker-shadow.9UJSYqx2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3abd-HnkrdQa6RargrZaBPlODiWeIl5U\"",
    "mtime": "2025-04-18T08:56:47.659Z",
    "size": 15037,
    "path": "../public/_nuxt/leaflet-marker-shadow.9UJSYqx2.css"
  },
  "/_nuxt/liquid-transportation.CR0OZOQ2.jpg": {
    "type": "image/jpeg",
    "etag": "\"23c9f-vU59AsaFCOhnaJiWlhvDKBv51dE\"",
    "mtime": "2025-04-18T08:56:47.637Z",
    "size": 146591,
    "path": "../public/_nuxt/liquid-transportation.CR0OZOQ2.jpg"
  },
  "/_nuxt/LjIk1yXD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d10-hXgMC5flYzIbvjBwwA6FonZtb40\"",
    "mtime": "2025-04-18T08:56:47.677Z",
    "size": 3344,
    "path": "../public/_nuxt/LjIk1yXD.js"
  },
  "/_nuxt/local-shipping.BoR0q-Ae.jpg": {
    "type": "image/jpeg",
    "etag": "\"25bb8-IS3jJWQmQndM0e4ZbTFYY1EJTas\"",
    "mtime": "2025-04-18T08:56:47.599Z",
    "size": 154552,
    "path": "../public/_nuxt/local-shipping.BoR0q-Ae.jpg"
  },
  "/_nuxt/location-picker.DWmbf2ks.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d02-vpA06M3pU0eHskNEhwF5n/0zBQY\"",
    "mtime": "2025-04-18T08:56:47.644Z",
    "size": 3330,
    "path": "../public/_nuxt/location-picker.DWmbf2ks.css"
  },
  "/_nuxt/Lwt39ek_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bb4-ybNt0gW8X0snPXW0sVA+FizCfuI\"",
    "mtime": "2025-04-18T08:56:47.733Z",
    "size": 2996,
    "path": "../public/_nuxt/Lwt39ek_.js"
  },
  "/_nuxt/M1RVPDDQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17d0-clQuI/ti4FGlrsLVKqewlrJD7UU\"",
    "mtime": "2025-04-18T08:56:47.703Z",
    "size": 6096,
    "path": "../public/_nuxt/M1RVPDDQ.js"
  },
  "/_nuxt/M8OPAEgC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"15b7-WIgLZ0zS7FHsIpz/DF+HLTvPP+4\"",
    "mtime": "2025-04-18T08:56:47.831Z",
    "size": 5559,
    "path": "../public/_nuxt/M8OPAEgC.js"
  },
  "/_nuxt/map.BZ4e9yGq.jpg": {
    "type": "image/jpeg",
    "etag": "\"21bad-eLSp73HvnjSUINI4gUkQCgqB43A\"",
    "mtime": "2025-04-18T08:56:47.597Z",
    "size": 138157,
    "path": "../public/_nuxt/map.BZ4e9yGq.jpg"
  },
  "/_nuxt/mSkvzYyn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ebd2-mvDoQvq8q+fj6fuwX1G+OPMZXVc\"",
    "mtime": "2025-04-18T08:56:47.677Z",
    "size": 60370,
    "path": "../public/_nuxt/mSkvzYyn.js"
  },
  "/_nuxt/my-button.DbGaJKpp.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1a2-juOErqoz4amWeCGrC9RdcOuTA48\"",
    "mtime": "2025-04-18T08:56:47.659Z",
    "size": 418,
    "path": "../public/_nuxt/my-button.DbGaJKpp.css"
  },
  "/_nuxt/m_FpzeNm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"24a59-V6DX6biQJDsNnA0s9vOZj7HVHxI\"",
    "mtime": "2025-04-18T08:56:47.867Z",
    "size": 150105,
    "path": "../public/_nuxt/m_FpzeNm.js"
  },
  "/_nuxt/Nk1YLvwy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"466-2wVXq71jh9SiZvsItYQTDqbjII8\"",
    "mtime": "2025-04-18T08:56:47.780Z",
    "size": 1126,
    "path": "../public/_nuxt/Nk1YLvwy.js"
  },
  "/_nuxt/nl9pgiPC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"617-ge+EeVWU0exw96v3RW0fp/fXJek\"",
    "mtime": "2025-04-18T08:56:47.747Z",
    "size": 1559,
    "path": "../public/_nuxt/nl9pgiPC.js"
  },
  "/_nuxt/nRX-tm7z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"34bd-8Rr1O/nElWYJ5oDPAVU/kHDKhSc\"",
    "mtime": "2025-04-18T08:56:47.830Z",
    "size": 13501,
    "path": "../public/_nuxt/nRX-tm7z.js"
  },
  "/_nuxt/Nsryctux.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c1-VizF884EUwOBW6S11kHaD5dFqqs\"",
    "mtime": "2025-04-18T08:56:47.827Z",
    "size": 193,
    "path": "../public/_nuxt/Nsryctux.js"
  },
  "/_nuxt/ocean-freight.De-yiPm3.jpg": {
    "type": "image/jpeg",
    "etag": "\"33fa4-Gj4euNj/nKtqTyfL9JuFDlfoC8Q\"",
    "mtime": "2025-04-18T08:56:47.600Z",
    "size": 212900,
    "path": "../public/_nuxt/ocean-freight.De-yiPm3.jpg"
  },
  "/_nuxt/odhPzOxb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1082-NtYpHKKVgmeJZkc9sHkuM5UW1b4\"",
    "mtime": "2025-04-18T08:56:47.847Z",
    "size": 4226,
    "path": "../public/_nuxt/odhPzOxb.js"
  },
  "/_nuxt/oDmbv1s-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"232f-SU5XtqP8w+e8HQWFatBVmOI1wcM\"",
    "mtime": "2025-04-18T08:56:47.827Z",
    "size": 9007,
    "path": "../public/_nuxt/oDmbv1s-.js"
  },
  "/_nuxt/OzVdpHWM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fe6-4dPnitgotRXmMfwA+8oUhCAXe/Y\"",
    "mtime": "2025-04-18T08:56:47.843Z",
    "size": 4070,
    "path": "../public/_nuxt/OzVdpHWM.js"
  },
  "/_nuxt/package-tracker.Bv6CtHKM.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"28d-XFvlTcAFcZ/UvFsLVx6rPhSZvbI\"",
    "mtime": "2025-04-18T08:56:47.660Z",
    "size": 653,
    "path": "../public/_nuxt/package-tracker.Bv6CtHKM.css"
  },
  "/_nuxt/packaging-solutions.fYBEyneB.jpg": {
    "type": "image/jpeg",
    "etag": "\"23b27-Vp54gES+KbgG3BScvxRiRW6S2EQ\"",
    "mtime": "2025-04-18T08:56:47.637Z",
    "size": 146215,
    "path": "../public/_nuxt/packaging-solutions.fYBEyneB.jpg"
  },
  "/_nuxt/pjINWgZp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6b7-jOUeU6EqgDZdK0mXmyr1p2SvucY\"",
    "mtime": "2025-04-18T08:56:47.729Z",
    "size": 1719,
    "path": "../public/_nuxt/pjINWgZp.js"
  },
  "/_nuxt/plane-1.BqWFxyBk.jpg": {
    "type": "image/jpeg",
    "etag": "\"fc3a-NdyE5biubD7Y6mHaVyIXUKNO6Cc\"",
    "mtime": "2025-04-18T08:56:47.596Z",
    "size": 64570,
    "path": "../public/_nuxt/plane-1.BqWFxyBk.jpg"
  },
  "/_nuxt/plane-2.CVVZJYjG.jpg": {
    "type": "image/jpeg",
    "etag": "\"4fe11-aMqoH49IjMGCPaLs/Bn5fZgK0Gc\"",
    "mtime": "2025-04-18T08:56:47.572Z",
    "size": 327185,
    "path": "../public/_nuxt/plane-2.CVVZJYjG.jpg"
  },
  "/_nuxt/port.eE3hQtWt.jpg": {
    "type": "image/jpeg",
    "etag": "\"21773-fG1m75wscuulPnIXfIgQotqqQH0\"",
    "mtime": "2025-04-18T08:56:47.636Z",
    "size": 137075,
    "path": "../public/_nuxt/port.eE3hQtWt.jpg"
  },
  "/_nuxt/primeicons.C6QP2o4f.woff2": {
    "type": "font/woff2",
    "etag": "\"894c-g3wSebavnSl/NP20Pm/MkgannzI\"",
    "mtime": "2025-04-18T08:56:47.597Z",
    "size": 35148,
    "path": "../public/_nuxt/primeicons.C6QP2o4f.woff2"
  },
  "/_nuxt/primeicons.DMOk5skT.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"14ca4-4k7BPpU2bIK6aaghv2Wg6u8pRQw\"",
    "mtime": "2025-04-18T08:56:47.597Z",
    "size": 85156,
    "path": "../public/_nuxt/primeicons.DMOk5skT.eot"
  },
  "/_nuxt/primeicons.Dr5RGzOO.svg": {
    "type": "image/svg+xml",
    "etag": "\"539fd-oHrjkCfBp4C0L9gvrXV1wpJNnSg\"",
    "mtime": "2025-04-18T08:56:47.635Z",
    "size": 342525,
    "path": "../public/_nuxt/primeicons.Dr5RGzOO.svg"
  },
  "/_nuxt/primeicons.MpK4pl85.ttf": {
    "type": "font/ttf",
    "etag": "\"14bf4-O4eMp+iJRajsJYFIELlTZ9iXeuY\"",
    "mtime": "2025-04-18T08:56:47.603Z",
    "size": 84980,
    "path": "../public/_nuxt/primeicons.MpK4pl85.ttf"
  },
  "/_nuxt/primeicons.WjwUDZjB.woff": {
    "type": "font/woff",
    "etag": "\"14c40-Nh469xu05RX+6tL3hzSKkqVScVg\"",
    "mtime": "2025-04-18T08:56:47.598Z",
    "size": 85056,
    "path": "../public/_nuxt/primeicons.WjwUDZjB.woff"
  },
  "/_nuxt/q75s-Qtn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"aa37-l8HyVBalOtxzDOw6gqiQjZh3OA0\"",
    "mtime": "2025-04-18T08:56:47.685Z",
    "size": 43575,
    "path": "../public/_nuxt/q75s-Qtn.js"
  },
  "/_nuxt/q84rxccz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"32595-JHovfBd3hD2jqkOqNJ+phIf7VbY\"",
    "mtime": "2025-04-18T08:56:47.739Z",
    "size": 206229,
    "path": "../public/_nuxt/q84rxccz.js"
  },
  "/_nuxt/QJDTCWOX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"12444-p7q6gmbmCnAcFjZjAGeuoDqmXM8\"",
    "mtime": "2025-04-18T08:56:47.796Z",
    "size": 74820,
    "path": "../public/_nuxt/QJDTCWOX.js"
  },
  "/_nuxt/QrWvGmxL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39a-ASok0+jMsSqbM0cirV2PqM/XnPc\"",
    "mtime": "2025-04-18T08:56:47.724Z",
    "size": 922,
    "path": "../public/_nuxt/QrWvGmxL.js"
  },
  "/_nuxt/QZngG9DN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"64ec-KUJ7Euf5ojc8+TQSOt5gJ7EV/3Q\"",
    "mtime": "2025-04-18T08:56:47.778Z",
    "size": 25836,
    "path": "../public/_nuxt/QZngG9DN.js"
  },
  "/_nuxt/s34Qsfc2.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4c8-Ig/K6i8fd+75pI+0vehGNSKpuE0\"",
    "mtime": "2025-04-18T08:56:47.684Z",
    "size": 1224,
    "path": "../public/_nuxt/s34Qsfc2.js"
  },
  "/_nuxt/specilaized-transport.BPYZ_nMy.jpg": {
    "type": "image/jpeg",
    "etag": "\"32fae-kDnVfwKJmwdUL3vWXm8tXEqQAQY\"",
    "mtime": "2025-04-18T08:56:47.601Z",
    "size": 208814,
    "path": "../public/_nuxt/specilaized-transport.BPYZ_nMy.jpg"
  },
  "/_nuxt/testimonial-1.CiMZxCPs.jpg": {
    "type": "image/jpeg",
    "etag": "\"a7e9-VS1tU5XnBB7A2G9vAuqpuc0pZag\"",
    "mtime": "2025-04-18T08:56:47.633Z",
    "size": 42985,
    "path": "../public/_nuxt/testimonial-1.CiMZxCPs.jpg"
  },
  "/_nuxt/testimonial-2.BuUnG5AN.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b0dc-N46GN/ZhByvuxXf6lBDkMkSIc8M\"",
    "mtime": "2025-04-18T08:56:47.632Z",
    "size": 110812,
    "path": "../public/_nuxt/testimonial-2.BuUnG5AN.jpg"
  },
  "/_nuxt/testimonial-3.CzRsfp8l.jpg": {
    "type": "image/jpeg",
    "etag": "\"62d8-KlU6kdPHm38PcPiP68sg4wUH25U\"",
    "mtime": "2025-04-18T08:56:47.634Z",
    "size": 25304,
    "path": "../public/_nuxt/testimonial-3.CzRsfp8l.jpg"
  },
  "/_nuxt/testimonial-4.BzW7y0tV.jpg": {
    "type": "image/jpeg",
    "etag": "\"cb56-fD6u6K4Vy1v/9elV/Jg7ttw1Wlo\"",
    "mtime": "2025-04-18T08:56:47.634Z",
    "size": 52054,
    "path": "../public/_nuxt/testimonial-4.BzW7y0tV.jpg"
  },
  "/_nuxt/toqUjj4p.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3482-W4jllNxPvG9KuqJA9W88dv3/Z6o\"",
    "mtime": "2025-04-18T08:56:47.774Z",
    "size": 13442,
    "path": "../public/_nuxt/toqUjj4p.js"
  },
  "/_nuxt/V_FlH8S5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5a9-PvQaDqCviuiArU/Wa75mBIzzLdk\"",
    "mtime": "2025-04-18T08:56:47.702Z",
    "size": 1449,
    "path": "../public/_nuxt/V_FlH8S5.js"
  },
  "/_nuxt/WA397jPl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7677-aYqI1c86C02AoCCc4cRSZzaluI4\"",
    "mtime": "2025-04-18T08:56:47.839Z",
    "size": 30327,
    "path": "../public/_nuxt/WA397jPl.js"
  },
  "/_nuxt/warehouse-workers-1.CHNCgOuT.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a34a-7/P0YTaBDuTKxSZBp0UOpgeyyUk\"",
    "mtime": "2025-04-18T08:56:47.636Z",
    "size": 107338,
    "path": "../public/_nuxt/warehouse-workers-1.CHNCgOuT.jpg"
  },
  "/_nuxt/warehouse-workers-2.Bq6v_lcg.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a407-bPgWMwvc2O4QOjlb/9NYd7ESksE\"",
    "mtime": "2025-04-18T08:56:47.598Z",
    "size": 173063,
    "path": "../public/_nuxt/warehouse-workers-2.Bq6v_lcg.jpg"
  },
  "/_nuxt/warehouse-_-distribution.MFE1E3R0.jpg": {
    "type": "image/jpeg",
    "etag": "\"3529a-n3ERiAasq/yaI0YutRuA19L8HgI\"",
    "mtime": "2025-04-18T08:56:47.603Z",
    "size": 217754,
    "path": "../public/_nuxt/warehouse-_-distribution.MFE1E3R0.jpg"
  },
  "/_nuxt/warehousing.DBxumjN7.jpg": {
    "type": "image/jpeg",
    "etag": "\"290d6-jyw5lUJXE8fJPGC7+MNwKpcQdMI\"",
    "mtime": "2025-04-18T08:56:47.601Z",
    "size": 168150,
    "path": "../public/_nuxt/warehousing.DBxumjN7.jpg"
  },
  "/_nuxt/XXYxF3Cw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b4-i/pMwvu4kX32JLF42hgrqhLMsxI\"",
    "mtime": "2025-04-18T08:56:47.697Z",
    "size": 436,
    "path": "../public/_nuxt/XXYxF3Cw.js"
  },
  "/_nuxt/y247-ruQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d9-cl/AM5UZ+cXChAeE3B0+NagDzVE\"",
    "mtime": "2025-04-18T08:56:47.697Z",
    "size": 217,
    "path": "../public/_nuxt/y247-ruQ.js"
  },
  "/_nuxt/YurRnfYA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b5e3-12KLIrIRA9aMzWtneyzmtCc5ACE\"",
    "mtime": "2025-04-18T08:56:47.772Z",
    "size": 46563,
    "path": "../public/_nuxt/YurRnfYA.js"
  },
  "/_nuxt/yvUaokSs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"939-DZ1d5cbYatzAsInsLPDBYiq/obw\"",
    "mtime": "2025-04-18T08:56:47.826Z",
    "size": 2361,
    "path": "../public/_nuxt/yvUaokSs.js"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-unbY/iEYzlhovgiNW6Fa8otpJrQ\"",
    "mtime": "2025-04-18T08:57:56.629Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/6f52418f-669a-4b08-a6c4-33489fa7f57b.json": {
    "type": "application/json",
    "etag": "\"8b-qLJvQaZ2/hO9NTWWD3P88nNbbII\"",
    "mtime": "2025-04-18T08:57:56.630Z",
    "size": 139,
    "path": "../public/_nuxt/builds/meta/6f52418f-669a-4b08-a6c4-33489fa7f57b.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};
const basename = function(p, extension) {
  const segments = normalizeWindowsPath(p).split("/");
  let lastSegment = "";
  for (let i = segments.length - 1; i >= 0; i--) {
    const val = segments[i];
    if (val) {
      lastSegment = val;
      break;
    }
  }
  return extension && lastSegment.endsWith(extension) ? lastSegment.slice(0, -extension.length) : lastSegment;
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta/":{"maxAge":31536000},"/_nuxt/builds/":{"maxAge":1},"/_nuxt/":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _WfdDzh = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const collections = {
  'lucide': () => import('./icons.mjs').then(m => m.default),
  'my-icon': () => ({"prefix":"my-icon","icons":{"plane":{"width":76,"height":66,"body":"<g fill=\"none\"><path d=\"M17.3047 55.4348H53.1743\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M34.333 40.4762L49.855 31.1313\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M9.69531 37.8881L15.7105 43.9033\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M1 35.7143L7.01521 41.7295\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M15.7687 35.4431L25.2262 44.5152C26.4873 45.7263 28.0962 46.488 29.8137 46.6871C31.5313 46.8862 33.2657 46.5121 34.759 45.6203L72.7396 23.0042L68.0735 17.1446C66.8598 15.6259 65.1558 14.602 63.2695 14.2579C61.3832 13.9138 59.439 14.2723 57.7882 15.2684L46.6499 21.9762L31.5981 16.8362L27.4589 18.6609C27.1492 18.7968 26.8779 19.0105 26.6701 19.2821C26.4622 19.5537 26.3244 19.8746 26.2694 20.2151C26.2144 20.5556 26.244 20.9049 26.3554 21.2306C26.4669 21.5564 26.6565 21.8481 26.907 22.079L34.6085 29.1722L27.5843 33.2842L20.5602 30.2002L16.3457 32.0506C16.0391 32.1856 15.7701 32.3967 15.5632 32.6649C15.3563 32.9332 15.2179 33.25 15.1606 33.5868C15.1034 33.9236 15.129 34.2697 15.2351 34.5938C15.3413 34.918 15.5247 35.2098 15.7687 35.4431V35.4431Z\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M68.9352 18.4782C62.9052 23.2142 56.9528 23.8095 52.6309 18.4782L56.0268 16.2708C60.2468 13.5278 65.8664 14.4887 68.9352 18.4782Z\" fill=\"#FFD550\" stroke=\"#1C1F35\" stroke-width=\"2\"/></g>"},"quote":{"width":33,"height":22,"body":"<g fill=\"none\"><path d=\"M13.2686 0.508209C13.7696 0.508209 14.1991 0.687152 14.5569 1.04504C14.8433 1.40292 14.9864 1.83239 14.9864 2.33343C14.9864 2.90605 14.879 3.47867 14.6643 4.05129L8.97391 18.7604C8.61603 19.4762 8.25814 20.0488 7.90025 20.4783C7.47079 20.9793 6.7908 21.2298 5.8603 21.2298L2.31722 21.2298C1.7446 21.2298 1.31514 21.0151 1.02883 20.5856C0.670943 20.1562 0.563577 19.5836 0.706732 18.8678L3.06878 3.62182C3.14036 2.76289 3.42667 2.01133 3.92771 1.36714C4.42875 0.794518 5.18032 0.508208 6.1824 0.508208L13.2686 0.508209ZM30.4471 0.50821C30.9482 0.50821 31.3776 0.687153 31.7355 1.04504C32.0218 1.40293 32.165 1.83239 32.165 2.33343C32.165 2.90605 32.0576 3.47867 31.8429 4.05129L26.1525 18.7604C25.7946 19.4762 25.4009 20.0488 24.9714 20.4783C24.542 20.9793 23.8978 21.2298 23.0389 21.2298L19.4958 21.2298C18.9232 21.2298 18.4937 21.0151 18.2074 20.5857C17.8495 20.1562 17.7421 19.5836 17.8853 18.8678L20.2473 3.62182C20.3189 2.7629 20.6052 2.01134 21.1063 1.36714C21.6073 0.794519 22.3231 0.50821 23.2536 0.50821L30.4471 0.50821Z\" fill=\"#091242\"/></g>"},"ship":{"width":52,"height":56,"body":"<g fill=\"none\"><path d=\"M25.6602 7.16494V1\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M50.3195 35.9345C46.5692 49.035 29.2046 53.6073 26.1221 54.3265C25.8187 54.4037 25.5008 54.4037 25.1974 54.3265C22.1149 53.6073 4.75034 49.035 1 35.9345V27.1494C0.999964 26.7167 1.13652 26.295 1.39021 25.9445C1.64389 25.594 2.00176 25.3324 2.4128 25.1972L25.0176 17.6452C25.436 17.5164 25.8835 17.5164 26.3019 17.6452L48.9067 25.1972C49.3178 25.3324 49.6756 25.594 49.9293 25.9445C50.183 26.295 50.3195 26.7167 50.3195 27.1494V35.9345Z\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M26.1271 47.6652C23.6883 47.1036 9.94964 43.5341 6.98242 33.3066\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M6.98242 9.98273V23.1361L25.5288 16.5551L44.0752 23.1361V9.98273C44.0752 8.32587 42.7321 6.98273 41.0752 6.98273H9.98242C8.32557 6.98273 6.98242 8.32587 6.98242 9.98273Z\" fill=\"#FFD550\" stroke=\"#1C1F35\" stroke-width=\"2\"/>\n<path d=\"M25.6602 37.9898V17.5427\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M30.9141 36.8963L30.9141 28.5205\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M11.7695 17.7516V11.7689\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M48.8613 20.1447V9.37579\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g>"},"star":{"width":30,"height":28,"body":"<g fill=\"none\"><path d=\"M14.0489 0.92705C14.3483 0.00573921 15.6517 0.00574017 15.9511 0.927051L18.5922 9.05573C18.7261 9.46775 19.1101 9.74671 19.5433 9.74671L28.0903 9.74671C29.059 9.74671 29.4618 10.9863 28.6781 11.5557L21.7634 16.5795C21.4129 16.8342 21.2663 17.2855 21.4001 17.6976L24.0413 25.8262C24.3406 26.7475 23.2862 27.5137 22.5025 26.9443L15.5878 21.9205C15.2373 21.6658 14.7627 21.6658 14.4122 21.9205L7.49755 26.9443C6.71383 27.5137 5.65936 26.7475 5.95871 25.8262L8.59987 17.6976C8.73375 17.2855 8.58709 16.8342 8.2366 16.5795L1.32194 11.5557C0.538223 10.9863 0.940999 9.74671 1.90972 9.74671L10.4567 9.74671C10.8899 9.74671 11.2739 9.46775 11.4078 9.05573L14.0489 0.92705Z\" fill=\"#FDAF3B\"/></g>"},"truck":{"width":62,"height":62,"body":"<g fill=\"none\"><path d=\"M42.0713 28.7857V18.8214H47.6681C50.5026 18.8214 53.0574 20.5309 54.1387 23.151L56.1791 28.095C56.3149 28.4241 56.073 28.7857 55.7169 28.7857H42.0713Z\" fill=\"#FFD550\" stroke=\"#1C1F35\" stroke-width=\"2\"/>\n<path d=\"M4.42871 35.4286H42.0716\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M45.3929 53.1429C49.0616 53.1429 52.0357 50.1688 52.0357 46.5C52.0357 42.8313 49.0616 39.8571 45.3929 39.8571C41.7241 39.8571 38.75 42.8313 38.75 46.5C38.75 50.1688 41.7241 53.1429 45.3929 53.1429Z\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M16.6067 53.1429C20.2755 53.1429 23.2496 50.1688 23.2496 46.5C23.2496 42.8313 20.2755 39.8571 16.6067 39.8571C12.938 39.8571 9.96387 42.8313 9.96387 46.5C9.96387 50.1688 12.938 53.1429 16.6067 53.1429Z\" fill=\"#FFD550\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M38.75 45.3929H23.25\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M9.90907 45.3929H6.31085C5.81168 45.3929 5.33295 45.1887 4.97998 44.8254C4.62701 44.462 4.42871 43.9692 4.42871 43.4554V16.3304C4.42871 15.8165 4.62701 15.3237 4.97998 14.9603C5.33295 14.597 5.81168 14.3929 6.31085 14.3929H42.0716V40.3554\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M42.0713 28.7857H57.5713V43.5476C57.5713 44.037 57.3672 44.5063 57.0038 44.8524C56.6405 45.1984 56.1476 45.3928 55.6338 45.3928H51.8972\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M8.85742 28.0946L8.85742 18.8214\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M28.7854 31L38.0586 31\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M28.786 49.7144L32.1074 49.7144\" stroke=\"#1C1F35\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g>"},"warehouse":{"width":57,"height":46,"body":"<g fill=\"none\"><path d=\"M2.04785 45H54.4288\" stroke=\"#141414\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M32.4285 45V2.91304C32.4285 2.40567 32.2235 1.91908 31.8587 1.56032C31.4938 1.20155 30.9989 1 30.4829 1H7.13601C6.62001 1 6.12514 1.20155 5.76028 1.56032C5.39541 1.91908 5.19043 2.40567 5.19043 2.91304V45\" stroke=\"#141414\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M32.4287 13.5714H48.2859C49.9427 13.5714 51.2859 14.9146 51.2859 16.5714V43.9524H32.4287V13.5714Z\" fill=\"#FFD550\" stroke=\"#141414\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M13.5713 10.4286H20.9046\" stroke=\"#141414\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M1 40.8095L0.999999 26.1428\" stroke=\"#141414\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M55.4766 30.3333L55.4766 15.6667\" stroke=\"#141414\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M35.5713 9.38095L42.9046 9.38095\" stroke=\"#141414\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M16.7139 26.1429H24.0472\" stroke=\"#141414\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M13.5713 35.5714H20.9046\" stroke=\"#141414\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M39.7617 35.5714H43.9522\" stroke=\"#141414\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M39.7617 26.1429H43.9522\" stroke=\"#141414\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g>"}}}),
};

const DEFAULT_ENDPOINT = "https://api.iconify.design";
const _usZmxt = defineCachedEventHandler(async (event) => {
  const url = getRequestURL(event);
  if (!url)
    return createError$1({ status: 400, message: "Invalid icon request" });
  const options = useAppConfig().icon;
  const collectionName = event.context.params?.collection?.replace(/\.json$/, "");
  const collection = collectionName ? await collections[collectionName]?.() : null;
  const apiEndPoint = options.iconifyApiEndpoint || DEFAULT_ENDPOINT;
  const icons = url.searchParams.get("icons")?.split(",");
  if (collection) {
    if (icons?.length) {
      const data = getIcons(
        collection,
        icons
      );
      consola.debug(`[Icon] serving ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from bundled collection`);
      return data;
    }
  }
  if (options.fallbackToApi === true || options.fallbackToApi === "server-only") {
    const apiUrl = new URL("./" + basename(url.pathname) + url.search, apiEndPoint);
    consola.debug(`[Icon] fetching ${(icons || []).map((i) => "`" + collectionName + ":" + i + "`").join(",")} from iconify api`);
    if (apiUrl.host !== new URL(apiEndPoint).host) {
      return createError$1({ status: 400, message: "Invalid icon request" });
    }
    try {
      const data = await $fetch(apiUrl.href);
      return data;
    } catch (e) {
      consola.error(e);
      if (e.status === 404)
        return createError$1({ status: 404 });
      else
        return createError$1({ status: 500, message: "Failed to fetch fallback icon" });
    }
  }
  return createError$1({ status: 404 });
}, {
  group: "nuxt",
  name: "icon",
  getKey(event) {
    const collection = event.context.params?.collection?.replace(/\.json$/, "") || "unknown";
    const icons = String(getQuery(event).icons || "");
    return `${collection}_${icons.split(",")[0]}_${icons.length}_${hash$1(icons)}`;
  },
  swr: true,
  maxAge: 60 * 60 * 24 * 7
  // 1 week
});

const _u4fgzM = eventHandler(async (event) => {
  await clearUserSession(event);
  return { loggedOut: true };
});

const _VdrY1g = eventHandler(async (event) => {
  const session = await getUserSession(event);
  if (Object.keys(session).length > 0) {
    await sessionHooks.callHookParallel("fetch", session, event);
  }
  const { secure, ...data } = session;
  return data;
});

const _jcIQY3 = lazyEventHandler(() => {
  const opts = useRuntimeConfig().ipx || {};
  const fsDir = opts?.fs?.dir ? (Array.isArray(opts.fs.dir) ? opts.fs.dir : [opts.fs.dir]).map((dir) => isAbsolute(dir) ? dir : fileURLToPath(new URL(dir, globalThis._importMeta_.url))) : void 0;
  const fsStorage = opts.fs?.dir ? ipxFSStorage({ ...opts.fs, dir: fsDir }) : void 0;
  const httpStorage = opts.http?.domains ? ipxHttpStorage({ ...opts.http }) : void 0;
  if (!fsStorage && !httpStorage) {
    throw new Error("IPX storage is not configured!");
  }
  const ipxOptions = {
    ...opts,
    storage: fsStorage || httpStorage,
    httpStorage
  };
  const ipx = createIPX(ipxOptions);
  const ipxHandler = createIPXH3Handler(ipx);
  return useBase(opts.baseURL, ipxHandler);
});

const _lazy_GgKNdb = () => import('../routes/api/auth/login.post.mjs');
const _lazy_dxNAcp = () => import('../routes/api/auth/register.post.mjs');
const _lazy_46hlfs = () => import('../routes/api/mail.post.mjs');
const _lazy_G_smR6 = () => import('../routes/api/orders/_id_.delete.mjs');
const _lazy_oW1rgn = () => import('../routes/api/orders/_id_.get.mjs');
const _lazy_pbBLZM = () => import('../routes/api/orders/_id_.put.mjs');
const _lazy_TSpXpv = () => import('../routes/api/orders/count.mjs');
const _lazy_zMiljQ = () => import('../routes/api/index.get.mjs');
const _lazy_n96i9r = () => import('../routes/api/index.post.mjs');
const _lazy_VqViVo = () => import('../routes/api/orders/track/_trackingNumber_.get.mjs');
const _lazy_yAIfuK = () => import('../routes/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _WfdDzh, lazy: false, middleware: true, method: undefined },
  { route: '/api/auth/login', handler: _lazy_GgKNdb, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/register', handler: _lazy_dxNAcp, lazy: true, middleware: false, method: "post" },
  { route: '/api/mail', handler: _lazy_46hlfs, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/:id', handler: _lazy_G_smR6, lazy: true, middleware: false, method: "delete" },
  { route: '/api/orders/:id', handler: _lazy_oW1rgn, lazy: true, middleware: false, method: "get" },
  { route: '/api/orders/:id', handler: _lazy_pbBLZM, lazy: true, middleware: false, method: "put" },
  { route: '/api/orders/count', handler: _lazy_TSpXpv, lazy: true, middleware: false, method: undefined },
  { route: '/api/orders', handler: _lazy_zMiljQ, lazy: true, middleware: false, method: "get" },
  { route: '/api/orders', handler: _lazy_n96i9r, lazy: true, middleware: false, method: "post" },
  { route: '/api/orders/track/:trackingNumber', handler: _lazy_VqViVo, lazy: true, middleware: false, method: "get" },
  { route: '/__nuxt_error', handler: _lazy_yAIfuK, lazy: true, middleware: false, method: undefined },
  { route: '/api/_nuxt_icon/:collection', handler: _usZmxt, lazy: false, middleware: false, method: undefined },
  { route: '/api/_auth/session', handler: _u4fgzM, lazy: false, middleware: false, method: "delete" },
  { route: '/api/_auth/session', handler: _VdrY1g, lazy: false, middleware: false, method: "get" },
  { route: '/_ipx/**', handler: _jcIQY3, lazy: false, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_yAIfuK, lazy: true, middleware: false, method: undefined }
];

function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const nodeHandler = toNodeListener(h3App);
  const localCall = (aRequest) => b(nodeHandler, aRequest);
  const localFetch = (input, init) => {
    if (!input.toString().startsWith("/")) {
      return globalThis.fetch(input, init);
    }
    return O(
      nodeHandler,
      input,
      init
    ).then((response) => normalizeFetchResponse(response));
  };
  const $fetch = createFetch({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp = createNitroApp();
function useNitroApp() {
  return nitroApp;
}
runNitroPlugins(nitroApp);

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    debug("received shut down signal", signal);
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((error) => {
      debug("server shut down error occurred", error);
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    debug("Destroy Connections : " + (force ? "forced close" : "close"));
    let counter = 0;
    let secureCounter = 0;
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        counter++;
        destroy(socket);
      }
    }
    debug("Connections destroyed : " + counter);
    debug("Connection Counter    : " + connectionCounter);
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        secureCounter++;
        destroy(socket);
      }
    }
    debug("Secure Connections destroyed : " + secureCounter);
    debug("Secure Connection Counter    : " + secureConnectionCounter);
  }
  server.on("request", (req, res) => {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", () => {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", () => {
    debug("closed");
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      debug("Close http server");
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    debug("shutdown signal - " + sig);
    if (options.development) {
      debug("DEV-Mode - immediate forceful shutdown");
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          debug("executing finally()");
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      debug(`waitForReadyToShutDown... ${totalNumInterval}`);
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        debug("All connections closed. Continue to shutting down");
        return Promise.resolve(false);
      }
      debug("Schedule the next waitForReadyToShutdown");
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    debug("shutting down");
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      debug("Do onShutdown now");
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((error) => {
      const errString = typeof error === "string" ? error : JSON.stringify(error);
      debug(errString);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT || "", 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((error) => {
          console.error(error);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

export { defu as A, hasProtocol as B, joinURL as C, withQuery as D, sanitizeStatusCode as E, isScriptProtocol as F, executeAsync as G, appendResponseHeader as H, defuFn as I, klona as J, hash$1 as K, parseQuery as L, withTrailingSlash as M, withoutTrailingSlash as N, trapUnhandledNodeErrors as a, useNitroApp as b, defineEventHandler as c, destr as d, createError$1 as e, setUserSession as f, readBody as g, useNodeMailer as h, requireUserSession as i, getRouterParam as j, getQuery as k, randomString as l, buildAssetsURL as m, getResponseStatusText as n, getResponseStatus as o, defineRenderHandler as p, publicAssetsURL as q, readValidatedBody as r, setupGracefulShutdown as s, toNodeListener as t, useRuntimeConfig as u, getRouteRules as v, createHooks as w, getContext as x, toRouteMatcher as y, createRouter$1 as z };
//# sourceMappingURL=nitro.mjs.map
