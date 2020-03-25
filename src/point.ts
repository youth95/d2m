import { Vector } from './vector';
import { BaseElement } from './base_element';
import { LineSegment } from './line_segment';

/**
 * 点
 */
export class Point implements BaseElement<Point> {

  /**
   * 直角坐标系 x
   */
  readonly x: number;

  /**
   * 直角坐标系 y
   */
  readonly y: number;

  /**
   * 极坐标 r
   */
  readonly r: number;

  /**
   * 极坐标 θ
   */
  readonly theta: number;

  /**
   * 实例化一个点对象
   * @param x x 或 r
   * @param y y 或 theta
   * @param asPolar 是否作为极坐标
   */
  constructor(x: number = 0, y: number = 0, asPolar: boolean = false) {
    if (asPolar) {
      this.r = x;
      this.theta = y;
      this.y = Math.sin(this.theta) * this.r;
      this.x = Math.cos(this.theta) * this.r;
    } else {
      this.x = x;
      this.y = y;
      this.r = Math.sqrt(this.x * this.x + this.y * this.y);
      this.theta = Math.atan2(this.y, this.x);
    }
  }

  /**
   * 计算与目标点之间的距离
   * @param p 目标点
   */
  distance(p: Point): number {
    return Math.sqrt((p.x - this.x) * (p.x - this.x) + (p.y - this.y) * (p.y - this.y));
  }

  /**
   * 计算与目标点形成的向量
   * @param p 目标点
   */
  vector(p: Point): Vector {
    return new Vector(p.x - this.x, p.y - this.y);
  }

  /**
   * 向目标点生成一条线段
   * @param p 目标点
   */
  lineTo(p: Point): LineSegment {
    const { x: x1, y: y1 } = this;
    const { x: x2, y: y2 } = p;
    return new LineSegment(
      [y2 - y1, x1 - x2, x2 * y1 - x1 * y2],
      x1 < x2 ? [x1, x2] : [x2, x1],
      y1 < y2 ? [y1, y2] : [y2, y1],
    )
  }

  clone(): Point {
    return new Point(this.x, this.y);
  }
  valueOf(): number[] {
    return [this.x, this.y];
  }
  toString(): string {
    return `p(${this.x},${this.y})`;
  }
  equal(t: Point): boolean {
    return this.x === t.x && this.y == t.y;
  }


}