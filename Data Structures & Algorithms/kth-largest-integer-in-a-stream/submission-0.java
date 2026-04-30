class KthLargest {
    private final int k;
    private final PriorityQueue<Integer> minHeap;

    public KthLargest(int k, int[] nums) {
        this.minHeap = new PriorityQueue<>();
        this.k = k;

        // O(n * log(n))
        for (int num : nums) {
            this.minHeap.offer(num);

            if (this.minHeap.size() > this.k) this.minHeap.poll();
        }
    }
    
    // O(log(n))
    public int add(int val) {
        this.minHeap.offer(val);

        if (this.minHeap.size() > this.k) {
            this.minHeap.poll();
        }

        return this.minHeap.peek();
    }
}
