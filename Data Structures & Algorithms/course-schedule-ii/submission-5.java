class Solution {
    public boolean traverse(int node, Map<Integer, 
                            Set<Integer>> graph, Set<Integer> path,  
                            Set<Integer> visited, List<Integer> order) {

        if (path.contains(node)) return false;
        if (visited.contains(node)) return true;

        path.add(node);

        for (Integer prereq : graph.getOrDefault(node, Collections.emptySet())) {
            if (!this.traverse(prereq, graph, path, visited, order)) {
                 return false;
            }
        }

        order.add(node);
        visited.add(node);
        path.remove(node);

        return true;
    }

    public int[] findOrder(int numCourses, int[][] prerequisites) {
        Map<Integer, Set<Integer>> graph = new HashMap<>();
        Set<Integer> visited = new HashSet<>();
        List<Integer> order = new ArrayList();

        for (int i = 0; i < prerequisites.length; i++) {
            int course = prerequisites[i][0];
            int prereq = prerequisites[i][1];

            if (graph.get(course) == null) graph.put(course, new HashSet<Integer>());
            graph.get(course).add(prereq);
        }

        Set<Integer> path = new HashSet<>();

        for (int i = 0; i < numCourses; i++) {
            if (!this.traverse(i, graph, path, visited, order)) {
                return new int[0];
            }
        }

        return order.stream()
                    .mapToInt(Integer::intValue) 
                    .toArray();
    }
}

// [0, 1] => 1 is prereq of 0
// courses from 0 to numCourses - 1
// return a valid order or an empty array

