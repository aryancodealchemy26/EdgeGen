import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (!sc.hasNextLine()) return;
        String s = sc.nextLine();
        
        char[] arr = s.toCharArray();
        int n = arr.length;
        // Manual swap logic
        for (int i = 0; i <= n / 2; i++) {
            char temp = arr[i];
            arr[i] = arr[n - 1 - i];
            arr[n - 1 - i] = temp;
        }
        System.out.println(new String(arr));

        sc.close();
    }
}