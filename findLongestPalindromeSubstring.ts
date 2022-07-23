const findLongestPalindromeSubstring = (txt: string) => {
    const txtLength = txt.length
    if (txtLength > 2) {
        let start: number = 0
        let maxLength: number = 1

        for (let charIndex of [...Array(txtLength).keys()]) {
            let leftPointer = charIndex - 1
            let rightPointer = charIndex + 1

            while (rightPointer < txtLength && txt.charAt(rightPointer) == txt.charAt(charIndex)) {
                rightPointer = rightPointer + 1
            }

            while (leftPointer >= 0 && txt.charAt(leftPointer) == txt.charAt(charIndex))
                leftPointer = leftPointer - 1

            while (leftPointer >= 0 && rightPointer < txtLength  && txt.charAt(leftPointer) == txt.charAt(rightPointer)) {
                leftPointer = leftPointer - 1
                rightPointer = rightPointer + 1
            }

            let longLength = rightPointer - leftPointer - 1
            if (maxLength < longLength) {
                maxLength = longLength
                start = leftPointer + 1
            }
        }
        return txt.substring(start,start + maxLength)
    } else {
        return txt
    }
}

const test_case_1 = 'babad'
const test_case_2 = 'cbbd'
let result_test_1 = findLongestPalindromeSubstring(test_case_1)
let result_test_2 = findLongestPalindromeSubstring(test_case_2)


