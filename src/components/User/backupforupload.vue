<template>
  <div class="tag_summary">
    <div class="add_tag ui_button primary fullwidth">添加一条新贴士
    </div>
  </div>
  <div class="tag_content">
    <div class="tag_left">
      <div class="tag_details">
        <div class="tag_name">行前准备</div>
        <div class="tip_label">行前准备贴士</div>
      </div>
      <div class="tip_show_select ui_button standard">修改</div>
    </div>
    <div class="tag_right clearfix">
                    <textarea class="tag_desc ui_textarea" data-minlen="20"
                              placeholder="跟旅行者分享你的经历吧~有什么经验或者建议尽管提出来吧！喜爱和吐槽也欢迎分享！"></textarea>
      <div class="characterCounter" data-plural-msg="XLENGTH 个字符 (最少 20 个)">0 个字符 (最少 20 个)</div>
      <div class="tag_photos">
        <span class="photo_label">照片：</span>
        <ul class="photo_uploads"></ul>
        <span class="add_photo ui_button secondary ui_icon plus"></span>
      </div>
      <div class="tag_buttons">
        <div class="tag_submit ui_button primary">保存
          <span class="ui_loader">
                        <span></span><span></span><span></span><span></span><span></span>
                      </span>
        </div>
      </div>
    </div>
  </div>
  <div class="tip_entry"><input type="text" class="ui_input_text" placeholder="请输入贴士类型">
    <div class="tip_input_buttons">
      <div class="ui_button standard tip_input_close">返回</div>
      <div class="ui_button primary tip_input_save">保存</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "blackboard"
    }
</script>

<style scoped>

</style>
