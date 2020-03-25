/**
 * 线段
 */

import { Line, LineParams } from "./line";
import { BaseElement } from "./base_element";
import { UNREALIZED_ERROR } from "./errors";
import { Point } from "./point";

export class LineSegment extends Line implements BaseElement<LineSegment> {
  /**
   * 线段
   * @param params 直线参数
   * @param xRange 横坐标范围
   * @param yRange 纵坐标范围
   */
  constructor(
    public params: LineParams,
    public xRange: number[],
    public yRange: number[],
  ) {
    super(params);
  }

  // pointIsIn(p: Point): boolean {
  //   const [x1, x2] = this.xRange;
  //   const [y1, y2] = this.yRange;
  //   const { x, y } = p;
  //   return super.pointIsIn(p) && x1 <= x && x <= x2 && y1 <= y && y <= y2;
  // }

  clone(): LineSegment {
    throw UNREALIZED_ERROR;
  }
  valueOf() {
    return [...this.params, ...this.xRange, ...this.yRange];
  }
  toString(): string {
    throw UNREALIZED_ERROR;
  }
  equal(t: LineSegment): boolean {
    throw UNREALIZED_ERROR;
  }
}