build: init clean
	stack exec site build

watch: init
	stack exec site watch

init: 
	chcp 65001

clean:
	stack exec site clean