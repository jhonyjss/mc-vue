import { mount } from "@vue/test-utils";
import AppStats from "@/components/AppStats.vue";
import Container from "@/components/layout/Container.vue";
import StatsResult from "@/components/StatsResult.vue";

import { describe, expect, it } from "vitest";
describe("AppStats.vue", () => {
  it("Should render Container.vue component", () => {
    const wrapper = mount(AppStats);

    const container = wrapper.findComponent(Container); // => finds container by component instance
    expect(container.exists()).toBe(true);
  });

  it("Should render StatsResult.vue component", () => {
    const wrapper = mount(AppStats);

    const container = wrapper.findComponent(StatsResult); // => finds container by component instance
    expect(container.exists()).toBe(true);
  });

  it("Should find input type file", () => {
    const wrapper = mount(AppStats);

    const div = wrapper.find('input[type="file"]');
    expect(div.exists()).toBe(true);
  });

  it("Should find input type text", () => {
    const wrapper = mount(AppStats);

    const div = wrapper.find('input[type="text"]');
    expect(div.exists()).toBe(true);
  });

  it("Should load data maths array", () => {
    const wrapper = mount(AppStats, {
      data() {
        return {
          maths: ["mean", "median", "std deviation", "mode"],
        };
      },
    });

    expect(wrapper.vm.maths).toMatchObject([
      "mean",
      "median",
      "std deviation",
      "mode",
    ]);
  });
});
