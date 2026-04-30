class Solution {
    public LinkedList<Integer> traverse(int node, Map<Integer, Set<Integer>> graph, Set<Integer> path,  Set<Integer> visited) {
        if (path.contains(node)) return null;
        if (visited.contains(node)) return new LinkedList<Integer>();
        if (graph.get(node) == null) {
            visited.add(node);
            return new LinkedList<Integer>(List.of(node));
        }

        path.add(node);
        LinkedList<Integer> res = new LinkedList<Integer>();

        for (Integer prereq : graph.get(node)) {
            LinkedList<Integer> completed = this.traverse(prereq, graph, path, visited);

            if (completed == null) return null;
            res.addAll(completed); 
        }

        visited.add(node);
        res.add(node);
        path.remove(node);

        System.out.println(res);

        return res;
    }

    public int[] findOrder(int numCourses, int[][] prerequisites) {
        Map<Integer, Set<Integer>> graph = new HashMap<>();
        Set<Integer> visited = new HashSet<>();
        List<Integer> res = new ArrayList();

        for (int i = 0; i < prerequisites.length; i++) {
            int course = prerequisites[i][0];
            int prereq = prerequisites[i][1];

            if (graph.get(course) == null) graph.put(course, new HashSet<Integer>());
            graph.get(course).add(prereq);
        }

        for (Integer startNode : graph.keySet()) {
            Set<Integer> path = new HashSet<>();
            List<Integer> completed = this.traverse(startNode, graph, path, visited);

            if (completed == null) return new int[0];
            res.addAll(completed);
        }

        for (int i = 0; i < numCourses; i++) {
            if (!visited.contains(i)) res.add(i);
        }

        return res.stream()
                  .mapToInt(Integer::intValue) 
                  .toArray();
    }
}

// [0, 1] => 1 is prereq of 0
// courses from 0 to numCourses - 1
// return a valid order or an empty array

