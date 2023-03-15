/**
 * Credit for original code goes to:
 * https://humanwhocodes.com/blog/2012/11/27/computer-science-in-javascript-quicksort/
 * 
 * This is a sligntly amended iterative version
 * @author Dmitri Dimov
 */


class IterativeQuickSort {
    constructor(items, left, right){
        this.items = items;
        this.left = left;
        this.right = right;
    }

    IterativeQuickSort(){
        if(Array.isArray(this.items) === true && typeof this.left === 'number' && typeof this.right === 'number'){
            let pivotIndex = -1;
            while (this.items.length > 1) {
                //select partition
                pivotIndex = this.partition();
                if (this.left < pivotIndex - 1) {
                    this.right = pivotIndex - 1;
                    continue;
                }
                if (pivotIndex < this.right) {
                    this.left = pivotIndex;
                    continue;
                }
                else if(this.right < this.left){
                    break;
                }
                else if(pivotIndex === this.right){
                    this.left = this.right + 1;
                    this.right = this.items.length - 1;
                    continue;
                }
                else if(this.right < this.left || this.right === this.left && this.right === this.items.length - 1){
                    break;
                }
            }
        }
    }

    swap(firstIndex, secondIndex){
        let temp = this.items[firstIndex];
        this.items[firstIndex] = this.items[secondIndex];
        this.items[secondIndex] = temp;
    }

    partition() {
        let pivot   = this.items[Math.floor((this.right + this.left) / 2)],
            i       = this.left,
            j       = this.right;
        while (i <= j) {
            while (this.items[i] < pivot) {
                i++;
            }
            while (this.items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(i, j);
                i++;
                j--;
            }
        }
        return i;
    }

    getItems(){
        return this.items;
    }
}

export default  IterativeQuickSort;