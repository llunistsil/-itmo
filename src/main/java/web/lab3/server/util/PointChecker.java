package web.lab3.server.util;
public class PointChecker {
    public static boolean isPointIsnideArea(double x, double y, double r) {
        return isPointInsideTriangle(x, y, r) || isPointInsideRectangle(x, y, r) || isPointInsideCircle(x, y, r);
    }

    private static boolean isPointInsideTriangle(double x, double y, double r) {
        boolean isXInRange = (x <= 0 ) && (x >= (-r));
        boolean isYInRange = (y >= 0) && (y <= r / 2);
        boolean isFormula = y<=(x+r)/2;
        return isXInRange && isYInRange && isFormula;
    }

    private static boolean isPointInsideRectangle(double x, double y, double r) {
        boolean isXInRange = (x >= 0) && (x <= r);
        boolean isYInRange = (y <= 0) && (y >= (-r)/2);
        return isXInRange && isYInRange;
    }

    private static boolean isPointInsideCircle(double x, double y, double r) {
        boolean isXInRange = (x <= 0) && (x >= (-r)/2);
        boolean isYInRange = (y <= 0) && (y >= (-r)/2);
        boolean isFormula = (x*x + y*y) <= r;
        return isXInRange && isYInRange && isFormula;
    }
}
