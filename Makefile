PROJECT=dbonedesktop

default: ui win32
publish: ui pubWin32

ui:
	@echo 'start build ui'
	@rm -rf dist/*
	@yarn run build

win32:
	@echo 'start build win32'
	@rm -rf release/*
	@cd client && yarn run build:win && cd ..

pubWin32:
	@echo 'start build win32'
	@rm -rf release/*
	@cd client && yarn run pub:win && cd ..
