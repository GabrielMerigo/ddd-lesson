import Address from "./address";
import Customer from "./customer";

describe("Customer Unit Tests", () => {
  it("should throw error when ID is empty", () => {
    expect(() => {
      const address = new Address("Street", 123, "Zip", "City");

      new Customer("", "Jhon", address, false);
    }).toThrow("Id is required");
  });

  it("should throw error when Name is empty", () => {
    expect(() => {
      const address = new Address("Street", 123, "Zip", "City");

      new Customer("uuid", "", address, false);
    }).toThrow("Name is required");
  });

  it("should change name", () => {
    const address = new Address("Street", 123, "Zip", "City");
    const customer = new Customer("uuid", "my full name", address, false);

    expect(customer.name).toStrictEqual("my full name");
    customer.changeName("new name");
    expect(customer.name).toStrictEqual("new name");
  });

  it("should throw error when user enter an empty name", () => {
    expect(() => {
      const address = new Address("Street", 123, "Zip", "City");
      const customer = new Customer("uuid", "my full name", address, false);

      customer.changeName("");
    }).toThrow("Name is required");
  });

  it("should activate customer", () => {
    const address = new Address("Street", 123, "Zip", "City");
    const customer = new Customer("uuid", "my full name", address, false);

    customer.activate();

    expect(customer.active).toBe(true);
  });

  it("should deactivate customer", () => {
    const address = new Address("Street", 123, "Zip", "City");
    const customer = new Customer("uuid", "my full name", address, false);

    customer.activate();
    customer.deactivate();

    expect(customer.active).toBe(false);
  });
});