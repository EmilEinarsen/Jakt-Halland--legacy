
export function markdown(input) {
	const symbolsDatas = [
		{
			symbol: '*',
			class: 'bold',
		},
		{
			symbol: '|',
			class: 'italic',
		}
	]
	const combinationsDatas = [
		{ combo: '* ', replacement: '• ', },
		{ combo: '> ', replacement: '<span class="tab">',},
		{ combo: '<! ', replacement: '<ol class="bullet-list">',},
		{ combo: ' !>', replacement: '</ol>',},
		{ combo: '<0 ', replacement: '<ol class="number-list">',},
		{ combo: ' 0>', replacement: '</ol>',},
		{ combo: '<-', replacement: '<li>',},
		{ combo: '->', replacement: '</li>',},
	]
	
	let output = '', classes = '', isSymbol, index = 0
	const charArr = input.split('')
	
	while(index < charArr.length) {
		isSymbol = false
		symbolsDatas.forEach(symbolData => {
			if(charArr[index] === symbolData.symbol) {
				isSymbol = true
				if(symbolData.isAlive) {
					if(charArr[index-1] === ' ') addToOutput(charArr[index])
					else {
						addToOutput(tags(false))
						removeClass(symbolData.class)
						symbolData.isAlive = false
					}
				} else {
					if(charArr[index+1] === ' ') addToOutput(charArr[index])
					else {
						if(!hasAClose(index, symbolData.symbol)) return addToOutput(charArr[index])
						addClass(symbolData.class)
						addToOutput(tags(true, symbolData.class))
						symbolData.isAlive = true
					}
				}
			}
		})
		if(!isSymbol) addToOutput(charArr[index])
		index++
	}

	index = 0
	combinationsDatas.forEach(combinationData => {
		while ((index = output.indexOf(combinationData.combo, index)) > -1) {
			output = output.replace(combinationData.combo, combinationData.replacement)
			index += combinationData.combo.length
		}
			
	})

	return output


	function addToOutput(text) { output += text }
	function tags(opening, className) {
		return opening ? 
			classes.indicesOf(' ').length === 1 ? `<span class="${className}">` : `</span><span class="${classes}">`
			: `</span>`
	}
	function addClass(className){
		classes += `${className} `
	}
	function removeClass(className) {
		classes = classes.replace(`${className} `, '')
	}
	function hasAClose(index, symbol) {
		while(index < charArr.length) {
			if(charArr[index] === symbol)
				if(charArr[index-1] !== ' ') 
					return true
			index++
		}
	}
}

function addTabAtCursor(target) {
	const tab = '\t'
	const {startIndex, endIndex} = tools.getSelectedText(target)
	target.value = target.value.replaceBetween(tab, startIndex, endIndex)
	tools.putCursorAtIndex(target, startIndex+1)
}