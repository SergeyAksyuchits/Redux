import { increment, decrement } from "../slice/slice";
import { useDispatch, useSelector } from "react-redux";

function Task() {

    const dispatch = useDispatch()
    const controlButton = useSelector((all) => all.controlButton)

    return (<>

        <h1>{controlButton}</h1>
        <button onClick={() => dispatch(increment())}>show</button>
        <button onClick={() => dispatch(decrement())}>hide</button>
    </>)


}
export default Task