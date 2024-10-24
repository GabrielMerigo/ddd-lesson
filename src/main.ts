import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/orderItem";

const address = new Address("Rua Dois", 123, "91060-530", "Lasar Segall");
let customer = new Customer("123", "Gabriel", address, false);

const item1 = new OrderItem("1", "item 2", 10, "productId", 2);
const item2 = new OrderItem("1", "item 2", 15, "productId", 2);

const order = new Order("1", customer.id, [item1, item2]);
