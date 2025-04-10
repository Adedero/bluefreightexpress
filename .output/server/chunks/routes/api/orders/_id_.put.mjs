import { c as defineEventHandler, h as requireUserSession, i as getRouterParam, g as readBody, e as createError } from '../../../_/nitro.mjs';
import { O as Order } from '../../../_/order.model.mjs';
import { U as User } from '../../../_/user.model.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'node:path';
import 'nodemailer';
import '@dword-design/functions';
import 'ipx';
import 'mongoose';
import '../../../_/db.mjs';
import 'argon2';

const _id__put = defineEventHandler(async (event) => {
  await requireUserSession(event);
  const id = getRouterParam(event, "id");
  const order = await readBody(event);
  if (!order) {
    throw createError({
      statusCode: 400,
      statusMessage: "No order data provided"
    });
  }
  if (!order.user) {
    throw createError({
      statusCode: 400,
      statusMessage: "User is required"
    });
  }
  if (!order.destination) {
    throw createError({
      statusCode: 400,
      statusMessage: "Destination is required"
    });
  }
  let orderToUpdate = await Order.findById(id).populate("user");
  if (!orderToUpdate) {
    throw createError({
      statusCode: 404,
      statusMessage: "Order not found"
    });
  }
  if (order.user.name !== orderToUpdate.user.name || order.user.email !== orderToUpdate.user.email) {
    if (order.user.email !== orderToUpdate.user.email) {
      const existingUser = await User.findOne({ email: order.user.email });
      if (existingUser) {
        throw createError({
          statusCode: 400,
          statusMessage: "Email already exists"
        });
      }
    }
    const user = await User.findOne({ email: orderToUpdate.user.email });
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: "User not found"
      });
    }
    user.name = order.user.name;
    user.email = order.user.email;
    await user.save();
  }
  if (!order.items || order.items.length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: "At least one item is required"
    });
  }
  order.items = order.items.map((item) => {
    delete item._id;
    return item;
  });
  order.trackingUpdates = order.trackingUpdates.map((update) => {
    delete update._id;
    return update;
  });
  order.trackingUpdates.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  orderToUpdate.status = order.status;
  orderToUpdate.freightMode = order.freightMode;
  orderToUpdate.deliveryMode = order.deliveryMode;
  orderToUpdate.destination = order.destination;
  orderToUpdate.items = order.items;
  orderToUpdate.totalPrice = order.totalPrice;
  orderToUpdate.trackingUpdates = order.trackingUpdates;
  orderToUpdate.estimatedDelivery = order.estimatedDelivery;
  await orderToUpdate.save();
  return { order: orderToUpdate };
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
