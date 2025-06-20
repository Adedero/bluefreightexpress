const site = {
  name: "Next Port Express",
  abbr: "NPE",
  emails: [
    "info@nextportexpress.com",
    "expressnextport@gmail.com"
  ],
  address: "Office 810, Messeplatz 1",
  city: "Basel",
  state: "Basel-Stadt",
  country: "Switzerland",
  countryAbbr: "CH",
  openHours: "Mon - Sat 9.00 - 18.00\nSunday Closed"
};
const priorities = ["low", "medium", "high"];
const orderStatuses = ["processing", "shipped", "in transit", "delivered", "cancelled"];
const freightModes = ["air", "ocean", "road"];
const deliveryModes = ["home", "pickup station"];
const trackingUpdateSeverities = ["info", "success", "error"];

export { deliveryModes as d, freightModes as f, orderStatuses as o, priorities as p, site as s, trackingUpdateSeverities as t };
//# sourceMappingURL=index.mjs.map
