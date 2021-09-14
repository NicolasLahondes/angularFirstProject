export class Book {
  private _id: number;
  private _title: string;
  private _author: string;
  private _status: string;

  static bookLength = 1;

  constructor(title: string, author: string, status: string) {
    this._id = Book.bookLength;
    this._title = title;
    this._author = author;
    this._status = status;

    Book.bookLength++;
  }

  /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }

  /**
   * Getter title
   * @return {string}
   */
  public get title(): string {
    return this._title;
  }

  /**
   * Getter author
   * @return {string}
   */
  public get author(): string {
    return this._author;
  }

  /**
   * Getter status
   * @return {string}
   */
  public get status(): string {
    return this._status;
  }

  /**
   * Setter id
   * @param {number} value
   */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter title
   * @param {string} value
   */
  public set title(value: string) {
    this._title = value;
  }

  /**
   * Setter author
   * @param {string} value
   */
  public set author(value: string) {
    this._author = value;
  }

  /**
   * Setter status
   * @param {string} value
   */
  public set status(value: string) {
    this._status = value;
  }
}
