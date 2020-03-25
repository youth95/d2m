import { Point } from './point';

/**
 * test Point.constructor
 */
const point_constructor_test_set = [
  [new Point(), [0, 0, 0, 0]],
  [new Point(1), [1, 0, 1, 0]],
  [new Point(3, 4), [3, 4, 5, Math.atan2(4, 3)]],
  [new Point(5, Math.atan2(4, 3), true), [3, 4, 5, Math.atan2(4, 3)]],
];
test.each(point_constructor_test_set)(
  'Point.constructor %s',
  (point: Point, expected) => {
    expect([Math.round(point.x), Math.round(point.y), point.r, point.theta]).toEqual(expected);
  }
);

/**
 * test point.distance
 */
const point_distance_test_set = [
  [new Point(), new Point(), 0]
];
test.each(point_distance_test_set)(
  'point.distance %s %s',
  (p0: Point, p1: Point, dis: number) => {
    expect(p0.distance(p1)).toBe(dis);
  }
);

/**
 * test point.clone and point.equal
 */
const point_clone_test_set = [
  [new Point()]
];
test.each(point_clone_test_set)(
  '%s.clone()',
  (input) => {
    expect(input.clone().equal(input)).toBe(true);
  }
);

/**
 * test point.valueOf
 */
const point_value_of_test_set = [
  [new Point(), [0, 0]]
];
test.each(point_value_of_test_set)(
  '%s.valueOf()',
  (input, expected) => {
    expect(input.valueOf()).toEqual(expected);
  }
);

/**
 * test point.vector
 */
const point_vector_test_set = [
  [new Point(), new Point(), [0, 0]]
];
test.each(point_vector_test_set)(
  '%s.vector()',
  (input: Point, input2: Point, expected) => {
    expect(input.vector(input2).valueOf()).toEqual(expected);
  }
);

/**
 * test point.lineTo
 */
const point_line_to_test_set = [
  [new Point(), new Point(1, 1), [1, -1, 0, 0, 1, 0, 1]],
  [new Point(), new Point(-1, -1), [-1, 1, 0, -1, 0, -1, 0]],
];
test.each(point_line_to_test_set)(
  '%s.lineTo %s',
  (input: Point, input2: Point, expected) => {
    expect(input.lineTo(input2).valueOf()).toEqual(expected);
  }
);
