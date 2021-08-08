
// leetcode  #997 小镇法官
// https://leetcode.com/problems/find-the-town-judge/
// 核心判断： 谁的票数 = 小镇人数 - 1 ，谁就是法官
// 思路： 投票计数，被投+1，投了-1
// 时间复杂度： O(n) , 空间复杂度：O(n)

const n = 3
const trust = [[1, 3], [2, 3], [3,1]]


var findJudge = function (n, trust) {
	if (n > 0 && Array.isArray(trust)) {

		const voteCounts = new Array(n).fill(0)
		trust.map((i) => {
			const [a, b] = i
			--voteCounts[a - 1]
			++voteCounts[b - 1]
		})

		for (let j = 0; j < voteCounts.length; j++) {
			let item = voteCounts[j]

			if (item === n - 1) {
				return j

			}

		}

		return -1


	} else {
		return -1
	}
};

console.log(findJudge(n, trust))