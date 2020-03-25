import { UNREALIZED_ERROR } from "./errors";
import { LineSegment } from './line_segment';

/**
 * 矩形
 */
export class Rect {
  /**
   * 计算与目标矩形的交集矩形,若不存在交集矩形则返回null
   * @param rect 目标矩形
   * @complexity
   */
  rectIntersection(rect: Rect): Rect | null {
    throw UNREALIZED_ERROR;
  }

  /**
   * 计算与目标矩形的距离线段, 以当前矩形的相邻边的中点为y或x, 若矩形相交或矩形边、顶点重合则返回null
   * @param rect 目标矩形
   */
  distanceLineSegment(rect: Rect): LineSegment {
    throw UNREALIZED_ERROR;
  }
}