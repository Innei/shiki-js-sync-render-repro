import {
  createHighlighterCoreSync,
  createJavaScriptRegexEngine,
} from 'shiki/index.mjs'
import cpp from 'shiki/langs/cpp.mjs'
import nord from 'shiki/themes/nord.mjs'

const time = Date.now()
const js = createJavaScriptRegexEngine()
const shiki = createHighlighterCoreSync({
  themes: [nord],
  langs: [cpp],
  engine: js,
})
const code = `...

pid_t pid = zygote::ForkCommon(env, /* is_system_server= */ false, fds_to_close, fds_to_ignore,  true);

if (pid == 0) {  

    SpecializeCommon(env, uid, gid, gids, runtime_flags, rlimits, capabilities, capabilities,  

                     mount_external, se_info, nice_name, false, is_child_zygote == JNI_TRUE,  

                     instruction_set, app_data_dir, is_top_app == JNI_TRUE, pkg_data_info_list,  

                     allowlisted_data_info_list, mount_data_dirs == JNI_TRUE, 

                     mount_storage_dirs == JNI_TRUE);  

}

return pid;`
shiki.codeToHtml(code, {
  lang: 'c++',
  theme: 'nord',
})

console.log('Time:', `${Date.now() - time}ms`)
