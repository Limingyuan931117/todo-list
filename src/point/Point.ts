class Point {
  public readonly x: number;
  public readonly y: number;
  public readonly radius: number | undefined;
  public readonly color: string;

  public constructor(
    x: number,
    y: number,
    radius: number | undefined,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  public move(deltaX: number, deltaY: number) {
    return new Point(this.x + deltaX, this.y + deltaY, this.radius, this.color);
  }

  public changeColor(color: string) {
    return new Point(this.x, this.y, this.radius, color);
  }

  public changeRadius(radius: number | undefined) {
    return new Point(this.x, this.y, radius, this.color);
  }
}

export default Point;
