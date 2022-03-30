---
layout: default
title: TIL
---

<article class="post">
    <header class="post header">
        <div class="post-title">TIL</div>
    </header>
    <div class="post-content">
        <ul class="post-list">
            {% assign category = page.category | default: page.title %}
            {% for post in site.categories[category] %}
            <li class="post-list-item">
                {%- assign date_format = "%Y/%m/%d" -%}
                <span class="post-date">{{ post.date | date: date_format }}</span>
                <a class="post-link" href="{{ post.url|relative_url }}" style="color:black">
                    {{ post.title | escape}}
                </a>
            </li>
            {% endfor %}
        </ul>
    </div>
</article>
