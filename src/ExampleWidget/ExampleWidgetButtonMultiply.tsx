import { useCallback } from "react";

import { ExampleModelHooks } from "./ExampleWidgetModel";

const ExampleWidgetButtonMulti = ExampleModelHooks.withModel<{scale: number}>(({
	model: exampleModel,
	scale,
}) => {
	const onClick = useCallback(() => {
		exampleModel.multiplyCount(scale)
	}, [scale])

	return <button onClick={onClick}>multiply by {scale}</button>
})

export default ExampleWidgetButtonMulti
