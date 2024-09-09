import {
  createHighlighterCoreSync,
  createJavaScriptRegexEngine,
} from 'shiki/index.mjs'
import c from 'shiki/langs/c.mjs'
import cpp from 'shiki/langs/cpp.mjs'
import nord from 'shiki/themes/nord.mjs'

setTimeout(() => {
  const time = Date.now()
  const js = createJavaScriptRegexEngine()
  const shiki = createHighlighterCoreSync({
    themes: [nord],
    langs: [cpp, c],
    engine: js,
  })
  const code = `static int binder_translate_binder(struct flat_binder_object *fp,  
  
                                     struct binder_transaction *t,  
  
                                     struct binder_thread *thread)  
  
  {  
  
      struct binder_node *node;  
  
      struct binder_proc *proc = thread->proc;  
  
      struct binder_proc *target_proc = t->to_proc;  
  
      struct binder_ref_data rdata;  
  
      int ret = 0;  
  
    
  
      node = binder_get_node(proc, fp->binder);  
  
      if (!node) {  
  
          node = binder_new_node(proc, fp);  
  
          if (!node)  
  
              return -ENOMEM;  
  
      }  
  
      ...  
  
      ret = binder_inc_ref_for_node(target_proc, node,  
  
                                    fp->hdr.type == BINDER_TYPE_BINDER,  
  
                                    &thread->todo, &rdata);  
  
      ...  
  
      if (fp->hdr.type == BINDER_TYPE_BINDER)  
  
          fp->hdr.type = BINDER_TYPE_HANDLE;  
  
      else  
  
          fp->hdr.type = BINDER_TYPE_WEAK_HANDLE;  
  
      fp->binder = 0;  
  
      fp->handle = rdata.desc;  
  
      fp->cookie = 0;  
  
    
  
      ...  
  
      done:  
  
      binder_put_node(node);  
  
      return ret;  
  
  }`
  shiki.codeToHtml(code, {
    lang: 'c',
    theme: 'nord',
  })

  alert('Render time:' + `${Date.now() - time}ms`)
}, 300)
