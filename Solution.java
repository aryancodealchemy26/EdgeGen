import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextLine()) return;
        String input = sc.nextLine();
        
        // A simple reversal logic
        StringBuilder sb = new StringBuilder(input);
        System.out.println(sb.reverse().toString());
    }
}