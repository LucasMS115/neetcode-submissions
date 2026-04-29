class Solution {
    public String encode(List<String> strs) {
        StringBuilder sb = new StringBuilder();

        for (String str : strs) {
            sb.append(str.length());
            sb.append("#");
            sb.append(str);
        }

        return sb.toString();
    }

    public List<String> decode(String str) {
        System.out.println(str);
        
        List<String> res = new ArrayList();

        for (int i = 0; i < str.length(); i++) {
            System.out.println(i);

            StringBuilder sb = new StringBuilder();
            while (str.charAt(i) != '#') {
                sb.append(str.charAt(i));
                i++;
            }

            int count = Integer.parseInt(sb.toString());
            i++;

            System.out.println(count);
            System.out.println(i+count);

            res.add(str.substring(i, i+count));
            i += count-1;

            System.out.println("zxxxxxxxxxxxxxxxxxxz");
        }

        return res;
    }
}

// <char-count><string>