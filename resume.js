(function () {
        "use strict";

        const state = {
          experience: [
            {
              company: "PixelCraft Studio",
              role: "UI Developer",
              dates: "2024 - Present",
              bullets: [
                "Designed responsive dashboards for hiring and analytics workflows.",
                "Improved reusable component styling for better consistency.",
                "Reduced layout friction across mobile and desktop screens.",
              ],
            },
          ],
          education: [
            {
              school: "R.V. College of Engineering",
              degree: "B.E. in Computer Science",
              dates: "2019 - 2023",
            },
          ],
          skills: ["HTML", "CSS", "Responsive UI", "Accessibility"],
        };

        const $ = (sel, root) => (root || document).querySelector(sel);

        function escapeHtml(str) {
          return (str || "").replace(
            /[&<>"']/g,
            (c) =>
              ({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              })[c],
          );
        }

        /* ---------- experience form rows ---------- */
        function renderExperienceForm() {
          const list = $("#experience-list");
          list.innerHTML = "";
          state.experience.forEach((exp, idx) => {
            const block = document.createElement("div");
            block.className = "entry-block";
            block.innerHTML = `
        <div class="entry-top">
          <span>Role ${idx + 1}</span>
          ${state.experience.length > 1 ? `<button type="button" class="icon-btn" data-remove-exp="${idx}" aria-label="Remove role">✕</button>` : ""}
        </div>
        <div class="form-grid">
          <label>Company
            <input type="text" data-exp="${idx}" data-field="company" value="${escapeHtml(exp.company)}" />
          </label>
          <label>Role
            <input type="text" data-exp="${idx}" data-field="role" value="${escapeHtml(exp.role)}" />
          </label>
          <label>Dates
            <input type="text" data-exp="${idx}" data-field="dates" value="${escapeHtml(exp.dates)}" />
          </label>
        </div>
        <label>Impact points</label>
        <div data-bullets="${idx}" style="display:grid;gap:8px;"></div>
        <button type="button" class="add-btn" data-add-bullet="${idx}">+ Add bullet</button>
      `;
            list.appendChild(block);

            const bulletsWrap = $(`[data-bullets="${idx}"]`, block);
            exp.bullets.forEach((b, bIdx) => {
              const row = document.createElement("div");
              row.className = "bullet-row";
              row.innerHTML = `
          <input type="text" data-exp="${idx}" data-bullet="${bIdx}" value="${escapeHtml(b)}" />
          ${exp.bullets.length > 1 ? `<button type="button" class="icon-btn" data-remove-bullet="${idx}:${bIdx}" aria-label="Remove bullet">✕</button>` : ""}
        `;
              bulletsWrap.appendChild(row);
            });
          });
        }

        function renderEducationForm() {
          const list = $("#education-list");
          list.innerHTML = "";
          state.education.forEach((edu, idx) => {
            const block = document.createElement("div");
            block.className = "entry-block";
            block.innerHTML = `
        <div class="entry-top">
          <span>Education ${idx + 1}</span>
          ${state.education.length > 1 ? `<button type="button" class="icon-btn" data-remove-edu="${idx}" aria-label="Remove education">✕</button>` : ""}
        </div>
        <div class="form-grid">
          <label>School
            <input type="text" data-edu="${idx}" data-field="school" value="${escapeHtml(edu.school)}" />
          </label>
          <label>Degree
            <input type="text" data-edu="${idx}" data-field="degree" value="${escapeHtml(edu.degree)}" />
          </label>
          <label>Dates
            <input type="text" data-edu="${idx}" data-field="dates" value="${escapeHtml(edu.dates)}" />
          </label>
        </div>
      `;
            list.appendChild(block);
          });
        }

        function renderSkillsForm() {
          const wrap = $("#skills-form-list");
          wrap.innerHTML = "";
          state.skills.forEach((skill, idx) => {
            const tag = document.createElement("span");
            tag.className = "skill-tag-form";
            tag.innerHTML = `${escapeHtml(skill)} <button type="button" data-remove-skill="${idx}" aria-label="Remove skill">✕</button>`;
            wrap.appendChild(tag);
          });
        }

        /* ---------- preview ---------- */
        function renderPreview() {
          $("#prev-name").textContent = $("#f-name").value || "Your name";
          $("#prev-title").textContent = $("#f-title").value || "Job title";
          $("#prev-summary").textContent = $("#f-summary").value || "";

          const contact = $("#prev-contact");
          contact.innerHTML = "";
          const email = $("#f-email").value.trim();
          const phone = $("#f-phone").value.trim();
          const location = $("#f-location").value.trim();
          const link = $("#f-link").value.trim();
          [
            email
              ? `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`
              : null,
            phone ? escapeHtml(phone) : null,
            location ? escapeHtml(location) : null,
            link
              ? `<a href="${escapeHtml(link)}" target="_blank" rel="noopener">${escapeHtml(link.replace(/^https?:\/\//, ""))}</a>`
              : null,
          ]
            .filter(Boolean)
            .forEach((item) => {
              const li = document.createElement("li");
              li.innerHTML = item;
              contact.appendChild(li);
            });

          const expWrap = $("#prev-experience");
          expWrap.innerHTML = "";
          if (state.experience.length) {
            state.experience.forEach((exp) => {
              const group = document.createElement("div");
              group.className = "exp-group";
              const bullets = exp.bullets
                .filter((b) => b.trim())
                .map((b) => `<li>${escapeHtml(b)}</li>`)
                .join("");
              group.innerHTML = `
          <div class="resume-item">
            <div><strong>${escapeHtml(exp.role || "Role")}</strong> <span>${escapeHtml(exp.company || "Company")}</span></div>
            <small>${escapeHtml(exp.dates || "")}</small>
          </div>
          ${bullets ? `<ul class="resume-bullets">${bullets}</ul>` : ""}
        `;
              expWrap.appendChild(group);
            });
          } else {
            expWrap.innerHTML = `<p class="empty-note">Add a role to see it here.</p>`;
          }

          const eduWrap = $("#prev-education");
          eduWrap.innerHTML = "";
          if (state.education.length) {
            state.education.forEach((edu) => {
              const group = document.createElement("div");
              group.className = "edu-group";
              group.innerHTML = `
          <div class="resume-item">
            <div><strong>${escapeHtml(edu.degree || "Degree")}</strong> <span>${escapeHtml(edu.school || "School")}</span></div>
            <small>${escapeHtml(edu.dates || "")}</small>
          </div>
        `;
              eduWrap.appendChild(group);
            });
          } else {
            eduWrap.innerHTML = `<p class="empty-note">Add your education to see it here.</p>`;
          }

          const skillsWrap = $("#prev-skills");
          skillsWrap.innerHTML = state.skills.length
            ? state.skills.map((s) => `<span>${escapeHtml(s)}</span>`).join("")
            : `<p class="empty-note">Add skills to see them here.</p>`;

          updateStats();
        }

        function updateStats() {
          const fields = [
            "f-name",
            "f-title",
            "f-email",
            "f-phone",
            "f-location",
            "f-summary",
          ];
          const filled = fields.filter(
            (id) => $("#" + id).value.trim().length > 0,
          ).length;
          const pct = Math.round((filled / fields.length) * 100);
          $("#stat-complete").textContent = pct + "%";

          let sections = 0;
          if (state.experience.some((e) => e.company || e.role)) sections++;
          if (state.education.some((e) => e.school || e.degree)) sections++;
          if (state.skills.length) sections++;
          if ($("#f-summary").value.trim()) sections++;
          $("#stat-sections").textContent = sections;
        }

        function renderAll() {
          renderExperienceForm();
          renderEducationForm();
          renderSkillsForm();
          renderPreview();
        }

        /* ---------- events ---------- */
        document.addEventListener("input", (e) => {
          const t = e.target;

          if (
            [
              "f-name",
              "f-title",
              "f-email",
              "f-phone",
              "f-location",
              "f-link",
              "f-summary",
            ].includes(t.id)
          ) {
            renderPreview();
            return;
          }
          if (t.dataset.exp !== undefined && t.dataset.field) {
            state.experience[+t.dataset.exp][t.dataset.field] = t.value;
            renderPreview();
            return;
          }
          if (t.dataset.exp !== undefined && t.dataset.bullet !== undefined) {
            state.experience[+t.dataset.exp].bullets[+t.dataset.bullet] =
              t.value;
            renderPreview();
            return;
          }
          if (t.dataset.edu !== undefined && t.dataset.field) {
            state.education[+t.dataset.edu][t.dataset.field] = t.value;
            renderPreview();
            return;
          }
        });

        document.addEventListener("click", (e) => {
          const t = e.target;

          if (t.id === "add-experience") {
            state.experience.push({
              company: "",
              role: "",
              dates: "",
              bullets: [""],
            });
            renderExperienceForm();
            renderPreview();
            return;
          }
          if (t.id === "add-education") {
            state.education.push({ school: "", degree: "", dates: "" });
            renderEducationForm();
            renderPreview();
            return;
          }
          if (t.id === "add-skill") {
            const input = $("#f-skill-input");
            const val = input.value.trim();
            if (val) {
              state.skills.push(val);
              input.value = "";
              renderSkillsForm();
              renderPreview();
            }
            return;
          }
          if (t.id === "print-btn") {
            window.print();
            return;
          }

          const removeExp = t.dataset.removeExp;
          if (removeExp !== undefined) {
            state.experience.splice(+removeExp, 1);
            renderExperienceForm();
            renderPreview();
            return;
          }
          const removeBullet = t.dataset.removeBullet;
          if (removeBullet !== undefined) {
            const [expIdx, bIdx] = removeBullet.split(":").map(Number);
            state.experience[expIdx].bullets.splice(bIdx, 1);
            renderExperienceForm();
            renderPreview();
            return;
          }
          if (t.dataset.addBullet !== undefined) {
            state.experience[+t.dataset.addBullet].bullets.push("");
            renderExperienceForm();
            renderPreview();
            return;
          }
          const removeEdu = t.dataset.removeEdu;
          if (removeEdu !== undefined) {
            state.education.splice(+removeEdu, 1);
            renderEducationForm();
            renderPreview();
            return;
          }
          const removeSkill = t.dataset.removeSkill;
          if (removeSkill !== undefined) {
            state.skills.splice(+removeSkill, 1);
            renderSkillsForm();
            renderPreview();
            return;
          }
        });

        $("#f-skill-input").addEventListener("keydown", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            $("#add-skill").click();
          }
        });

        $("#builder-form").addEventListener("submit", (e) =>
          e.preventDefault(),
        );

        $("#contact-form").addEventListener("submit", (e) => {
          e.preventDefault();
          const name = $("#c-name").value.trim();
          const note = $("#contact-note");
          note.hidden = false;
          note.textContent = name
            ? `Thanks, ${name} — we'll reply by email shortly.`
            : "Thanks — we'll reply by email shortly.";
          $("#contact-form").reset();
        });

        renderAll();
      })();