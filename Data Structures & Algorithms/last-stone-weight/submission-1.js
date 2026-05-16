class Solution {
    /**
     
     cada elemento representa o peso de uma pedra

     temos que selecionar as duas mais pesadas

     se as duas sao iguais, as duas sao removidas
     se um é maior que a outra, a mais leve é removida (destruída)

     isso deve ser feito até não sobrarem mais pedras ou sobrar uma pedra

     se sobra uma, retorna o peso dela, se não, 0

     1. Ordenar em ordem dec e iterar fazendo comparações 2 a 2, ajusta o passo conforme os pesos
     //O(nlogn) tempo & O(1) espaço

     2. Usar um heap máximo, loop fzd um pop() e um peek(), se os pesos forem iguais faz outro pop()
    //O(nlogn) tempo & O(n) espaco

     */

    add(heap, val) {
        heap.push(val);
        heap.sort((a,b) => a-b);
    }

    heapify(stones) {
        return stones.sort((a,b) => a-b);
    }

    lastStoneWeight(stones) { //O(nlogn) 
        let heap = this.heapify(stones);

        while (heap.length > 1) {
            console.log(heap)

            const x = heap.pop(),
                  y = heap.pop(),
                  diff = Math.abs(x-y);
            
            if (diff > 0) {
                this.add(heap, diff);
            }
        }

        

        if (!heap.length) return 0;
        return heap[0];
    }

    // buildHeap (heap) {
    //     return heap.sort((a,b) => a-b);
    // };


    // extractMax (heap) {
    //     return heap.pop();
    // };

    // add (heap, val) {
    //     heap.push(val);
    //     heap.sort((a,b) => a-b);
    // };

    // peak (heap) {
    //     return heap[heap.length-1];
    // }

    // lastStoneWeight(stones) { //O(nlogn) 
    //     const heap = this.buildHeap(stones); //O(n) time and space - simulating a heap
        
    //     while (heap.length > 1) { //O(n) amortizado - simulating a heap
    //         const first = this.extractMax(heap); //O(logn) - simulating a heap
    //         const second = this.extractMax(heap); //O(logn) - simulating a heap

    //         if (first !== second) { 
    //             this.add(heap, first-second); //O(logn) - simulating a heap
    //         }
    //     }

    //     return heap.length ? this.peak(heap): 0; //O(1) - simulating a heap; 
    // }
}
