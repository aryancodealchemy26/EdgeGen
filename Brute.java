import java.util.Scanner;

public class Brute {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextLine()) return;
        String input = sc.nextLine();
        
        // The guaranteed correct way
        System.out.println(new StringBuilder(input).reverse().toString());
    }
}