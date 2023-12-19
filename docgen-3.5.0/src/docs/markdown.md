This section shows examples of how to write content with [markdown](https://www.markdownguide.org/). DocGen uses a
markdown standard called CommonMark (see the [CommonMark Spec](http://spec.commonmark.org) for more detailed
information).

<style>
.reference pre, .reference table, .reference blockquote {
  margin: 0;
}
.reference .codeCell pre {
  border: none;
  border-radius: 0;
}
.reference .codeCell {
  padding: 0;
}
</style>

<div>

<table class="reference" style="width: 100%">

<tr><th>Element</th><th>What you type</th><th>What it looks like in DocGen</th></tr>

<tr>
 <td class="r1">Page Heading</td>
 <td class="codeCell"><pre><code>  
  # Page Heading
 </code></pre></td>
 <td>
  <p class="dg-fakeHeading" style="font-size: 20px; padding-bottom: 6px;">Page Heading</p>
</td>
</tr>

<tr>
 <td class="r1">Section Heading</td>
 <td class="codeCell"><pre><code> 
  ## Section Heading
 </code></pre></td>
 <td>
  <p class="dg-fakeHeading" style="font-size: 18px; padding-bottom: 4px;">Section Heading</p>
 </td>
</tr>

<tr>
 <td class="r1">Minor Heading</td>
 <td class="codeCell"><pre><code> 
  ### Minor Heading
 </code></pre></td>
 <td>
  <p class="dg-fakeHeading" style="font-size: 16px; padding-bottom: 4px;">Minor Heading</p>
 </td>
</tr>

<tr>
 <td class="r1">Fake Heading<br />(not in PDF contents list)</td>
 <td class="codeCell"><pre><code> 
  &lt;p class="dg-fakeHeading">Fake&lt;/p>
 </code></pre></td>
 <td>
  <p class="dg-fakeHeading">Fake</p>
 </td>
</tr>

<tr>
 <td class="r1">Emphasis (italic)</td>
 <td class="codeCell"><pre><code> 
  This text has *emphasis*
 </code></pre></td>
 <td>This text has <em>emphasis</em></td>
</tr>

<tr>
 <td class="r1">Strong (bold)</td>
 <td class="codeCell"><pre><code> 
  This text is **bold**
 </code></pre></td>
 <td>This text is <strong>bold</strong></td>
</tr>

<tr>
 <td class="r1">Block quotes</td>
<td class="codeCell"><pre><code>   
  > This is a block quote.
 </code></pre></td>
 <td><blockquote>This is a block quote</blockquote></td>
</tr>

<tr>
 <td class="r1">Code block<br/> (indent with tab)</td>
 <td class="codeCell"><pre><code> 
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;int some_code=0
 </code></pre></td>
 <td><pre><code>int some_code=0;</code></pre></td>
</tr>

<tr>
 <td class="r1">Unordered List</td>
 <td class="codeCell"><pre><code> 
  * unordered list
  * (items)
 </code></pre></td>
 <td><ul><li>unordered list</li><li>(items)</li></ul></td>
</tr>

<tr>
 <td class="r1">Ordered List</td>
 <td class="codeCell"><pre><code> 
  1. ordered list
  2. (items)
 </code></pre></td>
 <td><ol><li>ordered list</li><li>(items)</li></ol></td>
</tr>

<tr>
 <td class="r1">External Links</td>
 <td class="codeCell"><pre><code> 
  [link](http://www.google.com)
 </code></pre></td>
 <td><a href="http://www.google.com">link</a></td>
</tr>

<tr>
 <td class="r1">Links to a local file</td>
 <td class="codeCell"><pre><code> 
  [attachment](user_guide.pdf)
 </code></pre></td>
 <td><a href="user_guide.pdf">attachment</a></td>
</tr>

<tr>
 <td class="r1">Diagrams<br/> (embedding images)</td>
 <td class="codeCell"><pre><code> 
  ![](files/images/logo.svg)
 </code></pre></td>
 <td><img src="files/images/logo.svg"></td>
</tr>

<tr>
 <td class="r1">Simple table</td>
 <td class="codeCell"><pre><code>  
  | Cell 1 | Cell 2 | Cell 3 |
  | Cell 4 | Cell 5 | Cell 6 |
 </code></pre></td>
 <td>
 
  <table style="width:300px;">
   <tr><td>Cell 1</td><td>Cell 2</td><td>Cell 3</td></tr>
   <tr><td>Cell 4</td><td>Cell 5</td><td>Cell 6</td></tr>
  </table>
  
 </td>
</tr>

</table>
</div>