build: 
	make init
	stack exec site build

watch: 
	make init
	stack exec site watch

init: 
	chcp 65001