import { useState } from "react";
import { useMutation } from "convex/react";

export const useApiMutation = (mutationFunction: any) => {
    const [pending, setPeding] = useState(false);
    const apiMutation = useMutation(mutationFunction);

    const mutation = (payload: any) => {
        setPeding(true);
        return apiMutation(payload)
            .finally(() => setPeding(false))
            .then((result) => {
                return result;
            })
            .catch((error) => {
                throw error;
            })
    }

    return {
        mutation,
        pending,
    }
}