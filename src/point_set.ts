import { UNREALIZED_ERROR, POINTS_TOO_LESS, POINTS_COLLINEAR } from './errors';
import { ConvexHull } from './convex_hull';
import { Rect } from './rect';
import { Line } from './line';
import { Point } from './point';
/**
 * 点集合
 */
export class PointSet {

  constructor(
    public readonly points: Point[],
  ) { }

  /**
   * 返回点集合的凸包
   */
  convexHull(): ConvexHull {
    // 错误处理
    if (this.points.length < 3) {
      throw POINTS_TOO_LESS;
    } else if (this.points.length === 3 && this.points[0].lineTo(this.points[1]).pointIsIn(this.points[2])) {
      throw POINTS_COLLINEAR;
    }
    // 1. 将点按极角大小,从小到大排序,极角相等的,按半径从小到大排序
    const cmp = (a: Point, b: Point) => {
      if (a.theta === b.theta) {
        return a.r - b.r;
      } else {
        return a.theta - b.theta;
      }
    }
    const points = [...this.points].sort(cmp);
    // 2. 逐个扫描并将点加入hull,若发现新点与hull最后一个点构成的向量与前驱向量叉积大于0 则先将hull的最后一个点移除
    const hull: Point[] = [points[0], points[1]];
    for (let i = 2; i < points.length; i++) {
      const v1 = hull[hull.length - 2].vector(hull[hull.length - 1]);
      const v2 = hull[hull.length - 1].vector(points[i]);
      if (v1.cross(v2) > 0) {
        hull.pop();
      }
      hull.push(points[i]);
    }
    return new ConvexHull(hull);
  }

  /**
   * 返回点集合的最小外接矩形 (不旋转的)
   */
  minRect(): Rect {
    // 计算点集的X范围和Y范围即可
    throw UNREALIZED_ERROR;
  }

  /**
   * 返回点集合的拟合直线
   */
  lineFitting(): Line {
    throw UNREALIZED_ERROR;
  }
}