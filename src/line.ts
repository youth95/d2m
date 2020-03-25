/**
 * 线
 */

import { Point } from "./point";
import { VALUE_IS_ARBITRARY_ERROR } from "./errors";
import { BaseElement } from "./base_element";

export class Line implements BaseElement<Line> {
  constructor(
    public params: LineParams
  ) { }


  /**
   * 计算点在直线中的值
   * @param p 需要带入的点
   * @complexity O(1)
   */
  public eval(p: Point) {
    const { x, y } = p;
    return this.params[0] * x + this.params[1] * y + this.params[2];
  }

  /**
   * 通过y求x
   * @param y y值
   * @complexity O(1)
   */
  public evalX(y: number) {
    if (this.params[0] === 0)
      throw VALUE_IS_ARBITRARY_ERROR;
    return - (this.params[1] * y + this.params[2]) / this.params[0];
  }

  /**
   * 通过x求y
   * @param x x值
   * @complexity O(1)
   */
  public evalY(x: number) {
    if (this.params[1] === 0)
      throw VALUE_IS_ARBITRARY_ERROR;
    return - (this.params[0] * x + this.params[2]) / this.params[1];
  }

  /**
   * 判断多个点是否在线的同一侧
   * @param line 线
   * @param ps 点集合
   * @complexity O(n)
   */
  public isIpsilaterals(...ps: Point[]) {
    let p = ps[0];
    for (const t of ps)
      if (this.eval(t) !== 0) {
        p = t;
        break;
      }
    for (let i = 0; i < ps.length; i++)
      if (this.eval(p) * this.eval(ps[i]) < 0) {
        return false;
      }
    return true;
  }


  /**
   * 判断直线是否相等
   * @param line 直线
   * @complexity O(1)
   */
  public equal(line: Line) {
    return line.params[0] === this.params[0]
      && line.params[1] === this.params[1]
      && line.params[2] === this.params[2]
  }

  /**
   * 拷贝一个直线
   * @complexity O(1)
   */
  public clone(): Line {
    return new Line(this.params);
  }

  pointIsIn(p: Point): boolean {
    return this.eval(p) === 0;
  }

  valueOf(): number[] {
    return this.params;
  }

  toString(): string {
    return `l(${this.params.join(',')})`;
  }
}

/**
 * 线 长度为3 的直线参数 分别表示 Ax+ By+ C = 0 
 */
export type LineParams = number[];

/**
 * 直线函数
 */
export type LineFN = (p: Point) => number;
