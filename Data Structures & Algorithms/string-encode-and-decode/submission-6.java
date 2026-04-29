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
        List<String> res = new ArrayList();

        for (int i = 0; i < str.length(); i++) {
            StringBuilder sb = new StringBuilder();
            while (str.charAt(i) != '#') {
                sb.append(str.charAt(i));
                i++;
            }

            int count = Integer.parseInt(sb.toString());
            i++;

            res.add(str.substring(i, i+count));
            i += count-1;
        }

        return res;
    }
}

// <char-count>#<string>