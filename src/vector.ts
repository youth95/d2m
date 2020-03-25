import { BaseElement } from "./base_element";
import { UNREALIZED_ERROR } from "./errors";

/**
 * 向量
 */
export class Vector implements BaseElement<Vector> {
  /**
   * 直角坐标系 x
   */
  readonly x: number;

  /**
   * 直角坐标系 y
   */
  readonly y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * 返回与目标向量的叉积
   * @param v 目标向量
   */
  cross(v: Vector): number {
    const { x: x1, y: y1 } = this;
    const { x: x2, y: y2 } = v;
    return x1 * y2 + x2 * y1;
  }


  clone(): Vector {
    throw UNREALIZED_ERROR;
  }
  valueOf() {
    return [this.x, this.y];
  }
  toString(): string {
    throw UNREALIZED_ERROR;
  }
  equal(t: Vector): boolean {
    throw UNREALIZED_ERROR;
  }
}