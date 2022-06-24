import { useCallback } from "react";

import { ExampleModelHooks } from "./ExampleWidgetModel";

const ExampleWidgetButtonReset = ExampleModelHooks.withModel(({
	model: exampleModel,
}) => {
	const dispatchClearEvent = exampleModel.useEvent('clear')

	const clear = useCallback(() => {
		dispatchClearEvent()
	}, [])

	return <button onClick={clear}>reset</button>
})

export default ExampleWidgetButtonReset
