export interface BaseElement<T> {
  /**
   * 复制对象
   */
  clone(): T;

  /**
   * 原始值
   */
  valueOf(): any;

  /**
   * 文本打印
   */
  toString(): string;

  /**
   * 判断是否与目标元素相等
   * @param t 目标元素
   */
  equal(t: T): boolean;
}