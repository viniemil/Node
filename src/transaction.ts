import crypto from "crypto";

export abstract class Transaction {
  private _id: string;
  private _value: number;
  private _type: "income" | "outcome";

  constructor(value: number, type: "income" | "outcome") {
    this._id = crypto.randomUUID();
    this._value = value;
    this._type = type;
  }

  get id() {
    return this._id;
  }
  get value() {
    return this._value;
  }
  get type() {
    return this._type;
  }
}
