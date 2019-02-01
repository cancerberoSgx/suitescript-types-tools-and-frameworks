
// // TODO: move this to misc-utils or separate project
// export function expectCompile(config: ExpectCompileConfig){
//   function test(){
//     const {diagnosticMessages, diagnosticFormatted, sourceFile} = compile(config.code)
//     if(config.expectSuccess){
//       expect(diagnosticFormatted).toBeFalsy()
//     }
//     else {
//       expect(diagnosticFormatted).toBeTruthy()
//     }
//     if(config.expectErrorMsgToContain){
//       expect(diagnosticFormatted).toContain(config.expectErrorMsgToContain)
//     }
//     if(config.emittedCodeToContain || config.emittedCodeNotToContain){
//       const o = sourceFile.getEmitOutput().getOutputFiles().map(f=>f.getText()).join('\n')
//       expectCodeToContain(o, config.emittedCodeToContain)
//       expectCodeNotToContain(o, config.emittedCodeNotToContain)
//     }
//   }
//   if(config.it){
//     it(config.it, ()=>test())
//   }
//   else if(config.fit){
//     fit(config.fit, ()=>test())
//   }
//   else {
//     test()
//   }
// }

// export function expectCompileSuccess(config: ExpectCompileConfig){
//   expectCompile({...config, expectSuccess: true})
// }

// export function expectCompileFail(config: ExpectCompileConfig){
//   expectCompile({...config, expectSuccess: false})
// }

// let project:Project
// let sourceFile: SourceFile
// export function compile(code:string): {diagnostics: Diagnostic[], diagnosticFormatted: string, sourceFile: SourceFile, diagnosticMessages: string}{
//   if(!project) {
//     project = new Project({tsConfigFilePath: './tsconfig.json'})
//   }
//   if(!sourceFile) {
//     sourceFile = project.createSourceFile(`./src/_expectCompile_tmp_${Date.now()}.ts`, code)
//   }
//   else {
//     sourceFile.replaceWithText(code)
//   }
//   const diagnostics = sourceFile.getPreEmitDiagnostics()
//   const diagnosticMessages = ''//= diagnostics.map(d=>{
//   //   const s = d.getMessageText()
//   //   if((s as any).getMessageText){
//   //     return (s as any).getMessageText()
//   //   }else {
//   //     return d
//   //   }
//   // }).join('\n')
//   // console.log(diagnosticMessages);
//   const diagnosticFormatted = project.formatDiagnosticsWithColorAndContext(diagnostics)
//   return {diagnostics, diagnosticFormatted, sourceFile , diagnosticMessages}
// }

// interface ExpectCompileConfig{
//   code: string
//   expectSuccess?: boolean
//   /** wraps the test in an synch it() using it as description */
//   it?: string
//   fit?: string
//   expectErrorMsgToContain?: string, 
//   emittedCodeToContain?: string
//   emittedCodeNotToContain?: string
// }

// export function expectCodeEquals(a?: string, b?: string) {
//   // console.log(a, b);
//   if(!a||!b)return false
//   expect(a.replace(/\s+/gm, ' ').trim()).toEqual(b.replace(/\s+/gm, ' ').trim())
// }

// export function expectCodeToContain(a?: string, b?: string) {
//   // console.log(a, b);
//   if(!a||!b)return false
//   expect(a.replace(/\s+/gm, ' ').trim()).toContain(b.replace(/\s+/gm, ' ').trim())
// }

// export function expectCodeNotToContain(a?: string, b?: string) {
//   // console.log(a, b);
//   if(!a||!b)return false
//   expect(a.replace(/\s+/gm, ' ').trim()).not.toContain(b.replace(/\s+/gm, ' ').trim())
// }
