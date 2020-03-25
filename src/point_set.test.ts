import { PointSet } from './point_set';
import { Point } from './point';
import { ConvexHull } from './convex_hull';

/**
 * test pointSet.convexHull
 */
const point_set_convex_hull = [
  // 一个三角形
  [new PointSet([
    new Point(0, 0),
    new Point(10, 20),
    new Point(0, 40),
  ]), new ConvexHull([
    new Point(0, 0),
    new Point(10, 20),
    new Point(0, 40),
  ])],

  // 三角形内存在一点
  [new PointSet([
    new Point(0, 0),
    new Point(10, 20),
    new Point(10, 10),
    new Point(0, 40),
  ]), new ConvexHull([
    new Point(0, 0),
    new Point(10, 20),
    new Point(0, 40),
  ])],

  // 三角形内外均存在一点
  [new PointSet([
    new Point(0, 0),
    new Point(10, 20),
    new Point(10, 10),
    new Point(20, 20),
    new Point(0, 40),
  ]), new ConvexHull([
    new Point(0, 0),
    new Point(20, 20),
    new Point(10, 20),
    new Point(0, 40),
  ])],
];
test.each(point_set_convex_hull)(
  '%s.convexHull',
  (input: PointSet, expected) => {
    expect(input.convexHull()).toEqual(expected)
  }
);