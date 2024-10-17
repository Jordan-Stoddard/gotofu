import { trigger } from "@prismatic-io/spectral";

export const goTofuTrigger = trigger({
  display: {
    label: "GoTofu Trigger",
    description: "A webhook trigger for receiving events from GoTofu",
  },
  perform: async (context, payload, params) => {
    return Promise.resolve({
      payload,
    });
  },
  inputs: {},
  synchronousResponseSupport: "valid",
  scheduleSupport: "valid",
});

export default { goTofuTrigger };
