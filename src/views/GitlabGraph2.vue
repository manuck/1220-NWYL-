<template>
  <div>
    <Navbar />
    <br />
    <GitlabGraph></GitlabGraph>
  </div>
</template>

<script >
import GitlabGraph from "@/components/gitlab/GitlabGraph";
import Navbar from "@/components/mainview/Navbar";

export default {
  name: "GitlabGraph2",
  components: {
    GitlabGraph,
    Navbar
  }
};
</script>
