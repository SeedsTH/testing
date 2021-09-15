import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Posts from "@/components/Posts.vue";

describe("Posts.vue", () => {
  it("renders h4 tag", () => {
    const msg = "new message";
    const wrapper = shallowMount(Posts);
    expect(
      wrapper
        .find("h4")
        .text()
        .equal("Post list")
    );
  });
});
