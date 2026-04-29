class Solution {

    private List<Integer> countChars(String str) {
        List<Integer> count = new ArrayList(Collections.nCopies(27, 0));
        int base = (int) 'a';

        for (int i = 0; i < str.length(); i++) {
            int curr = (int) str.charAt(i);
            int idx = curr-base;

            count.set(idx, count.get(idx) + 1);
        }

        return count;
    }

    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> groups = new HashMap();

        for (String str : strs) {
            String key = this.countChars(str).toString();

            if (groups.get(key) == null) groups.put(key, new ArrayList());
            groups.get(key).add(str);
        }

        System.out.println(groups);
        
        List<List<String>> res = new ArrayList(new ArrayList());
        for (List<String> group : groups.values()) {
            res.add(group);
        } 

        return res;
    }
}
