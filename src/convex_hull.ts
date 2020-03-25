import { Point } from './point';
import { UNREALIZED_ERROR } from './errors';

/**
 * 凸包对象
 */
export class ConvexHull {

  constructor(
    public readonly points
  ) { }
  /**
   * 判断目标点是否在本凸包内
   * @param p 目标点
   */
  pointIsIn(p: Point): boolean {
    throw UNREALIZED_ERROR;
  }
}
