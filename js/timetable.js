const SUPABASE_URL = 'https://duxyczrninmfryosbjzy.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1eHljenJuaW5tZnJ5b3Nianp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwOTg3NDksImV4cCI6MjA4NzY3NDc0OX0.dEy7ticDAIXv-8FrQ34b2FfLbi-S9Dx8xwTVWXr64zc';
  const APP_BUILD_VERSION = '20260304-35';
  const LOCALHOST_AUTH_REDIRECT_URL = 'http://127.0.0.1:5500/index.html';
  const THEME_PRESETS = [
    { bg: '#f5f0e8', paper: '#fffdf7', ink: '#1a1208', accent: '#c84b11', line: '#d9d0bc', cellHover: '#fff3e0', shadow: 'rgba(0,0,0,0.08)' },
    { bg: '#dfeeff', paper: '#f5faff', ink: '#0b2440', accent: '#2563eb', line: '#bcd0ea', cellHover: '#dbeafe', shadow: 'rgba(37,99,235,0.18)' },
    { bg: '#e3f7e9', paper: '#f5fff8', ink: '#0f2d1f', accent: '#15803d', line: '#b7dfc5', cellHover: '#dcfce7', shadow: 'rgba(21,128,61,0.18)' },
    { bg: '#ffe5ea', paper: '#fff7f9', ink: '#3c1420', accent: '#e11d48', line: '#efbdca', cellHover: '#ffe4ea', shadow: 'rgba(225,29,72,0.18)' },
    { bg: '#fff0d6', paper: '#fff8ea', ink: '#3d280a', accent: '#d97706', line: '#ecd1a4', cellHover: '#ffedd5', shadow: 'rgba(217,119,6,0.18)' },
    { bg: '#dfe3e8', paper: '#f1f4f7', ink: '#111827', accent: '#475569', line: '#c2cbd6', cellHover: '#e2e8f0', shadow: 'rgba(71,85,105,0.18)' },
    { bg: '#efe4ff', paper: '#f8f2ff', ink: '#2b1145', accent: '#7c3aed', line: '#d4baf0', cellHover: '#ede9fe', shadow: 'rgba(124,58,237,0.18)' },
    { bg: '#def6ee', paper: '#f3fffa', ink: '#0f3328', accent: '#0f766e', line: '#b9e1d6', cellHover: '#ccfbf1', shadow: 'rgba(15,118,110,0.18)' }
  ];
  const THEME_EVENT_PATTERNS = [
    { base: 'rgba(200,75,17,0.06)', deep: 'rgba(79,70,229,0.12)', meeting: 'rgba(220,38,38,0.12)', lunch: 'rgba(245,158,11,0.16)', break: 'rgba(245,158,11,0.16)', project: 'rgba(6,95,70,0.14)' },
    { base: 'rgba(37,99,235,0.08)', deep: 'rgba(29,78,216,0.16)', meeting: 'rgba(59,130,246,0.18)', lunch: 'rgba(14,116,144,0.18)', break: 'rgba(14,116,144,0.18)', project: 'rgba(6,182,212,0.18)' },
    { base: 'rgba(21,128,61,0.08)', deep: 'rgba(22,163,74,0.16)', meeting: 'rgba(101,163,13,0.18)', lunch: 'rgba(132,204,22,0.18)', break: 'rgba(132,204,22,0.18)', project: 'rgba(5,150,105,0.18)' },
    { base: 'rgba(225,29,72,0.08)', deep: 'rgba(190,24,93,0.16)', meeting: 'rgba(225,29,72,0.20)', lunch: 'rgba(244,114,182,0.18)', break: 'rgba(244,114,182,0.18)', project: 'rgba(236,72,153,0.18)' },
    { base: 'rgba(217,119,6,0.08)', deep: 'rgba(245,158,11,0.16)', meeting: 'rgba(234,88,12,0.18)', lunch: 'rgba(251,191,36,0.22)', break: 'rgba(251,191,36,0.22)', project: 'rgba(180,83,9,0.18)' },
    { base: 'rgba(71,85,105,0.08)', deep: 'rgba(51,65,85,0.16)', meeting: 'rgba(71,85,105,0.18)', lunch: 'rgba(100,116,139,0.18)', break: 'rgba(100,116,139,0.18)', project: 'rgba(30,41,59,0.18)' },
    { base: 'rgba(124,58,237,0.08)', deep: 'rgba(109,40,217,0.18)', meeting: 'rgba(168,85,247,0.18)', lunch: 'rgba(192,132,252,0.20)', break: 'rgba(192,132,252,0.20)', project: 'rgba(147,51,234,0.18)' },
    { base: 'rgba(15,118,110,0.08)', deep: 'rgba(13,148,136,0.16)', meeting: 'rgba(20,184,166,0.18)', lunch: 'rgba(45,212,191,0.20)', break: 'rgba(45,212,191,0.20)', project: 'rgba(5,150,105,0.18)' }
  ];
  const TABLE_CELL_PATTERNS = [
    ['rgba(248,239,229,0.74)', 'rgba(236,225,211,0.74)', 'rgba(244,232,220,0.74)', 'rgba(230,218,205,0.74)'],
    ['rgba(224,239,255,0.78)', 'rgba(213,232,252,0.78)', 'rgba(236,245,255,0.78)', 'rgba(204,225,249,0.78)'],
    ['rgba(227,246,233,0.78)', 'rgba(213,239,221,0.78)', 'rgba(240,252,244,0.78)', 'rgba(203,232,212,0.78)'],
    ['rgba(255,230,237,0.78)', 'rgba(248,216,226,0.78)', 'rgba(255,241,246,0.78)', 'rgba(243,205,218,0.78)'],
    ['rgba(255,241,217,0.80)', 'rgba(248,231,198,0.80)', 'rgba(255,248,232,0.80)', 'rgba(242,221,180,0.80)'],
    ['rgba(225,231,238,0.80)', 'rgba(210,219,230,0.80)', 'rgba(236,241,247,0.80)', 'rgba(198,208,221,0.80)'],
    ['rgba(239,227,255,0.80)', 'rgba(228,210,249,0.80)', 'rgba(248,241,255,0.80)', 'rgba(217,194,243,0.80)'],
    ['rgba(222,245,236,0.80)', 'rgba(205,236,224,0.80)', 'rgba(239,253,247,0.80)', 'rgba(190,226,212,0.80)']
  ];
  const THEME_PRESET_NAMES = ['Classic', 'Ocean', 'Forest', 'Rose', 'Sunset', 'Slate', 'Violet', 'Mint'];
  let supabaseClient = null;
  let isAppAuthenticated = false;
  let isAdmin = true;
  let nowLineTimer = null;
  let weekOffset = 0;
  const SCHEDULE_YEAR = 2026;
  let selectedEditableCell = null;
  let selectedRowIndex = null;
  let selectedColumnIndex = null;
  const changeHistory = [];
  const MAX_HISTORY = 60;
  let activeView = 'timetable';
  let calendarMonthDate = new Date(SCHEDULE_YEAR, new Date().getMonth(), 1);
  let selectedCountryCode = 'ZA';
  let holidayDates = new Map();
  let holidayList = [];
  let userCalendarEvents = {};
  let nowLineTheme = 'cyan';
  let autoJumpToNowOnOpen = false;
  let activeThemePresetIndex = 0;
  let activeCellsPresetIndex = 0;
  let authMode = 'signin';
  let currentUserId = null;
  let customizeFailedAttempts = 0;
  let customizeUnlockBlockedUntil = 0;
  const CUSTOMIZE_MAX_FAILED_ATTEMPTS = 3;
  const CUSTOMIZE_LOCKOUT_MS = 60 * 1000;
  const CUSTOMIZE_LOCKOUT_STORAGE_PREFIX = 'customize_unlock_lockout_';
  const SIMPLE_CUSTOMIZE_MODE_STORAGE_KEY = 'simple_customize_mode';
  const CUSTOMIZE_TAB_STORAGE_KEY = 'customize_active_tab';
  const TIMEZONE_STORAGE_KEY = 'timetable_selected_timezone';
  const TIMETABLE_SCOPE_STORAGE_KEY = 'timetable_scope_mode';
  const TIMETABLE_SWIPE_HINT_STORAGE_KEY = 'timetable_swipe_hint_dismissed';
  const MOBILE_MANUAL_SCROLL_ONLY = true;
  const RESET_PASSWORD_COOLDOWN_MS = 30 * 1000;
  let resetPasswordBlockedUntil = 0;
  let resetPasswordCooldownTimer = null;
  let timetableScope = 'week';
  let focusedDayColumn = 2;
  let calendarEventEditorState = null;
  let activeCustomizeTab = 'layout';
  let showCustomizeAdvanced = false;
  let activeCellEditorInput = null;
  let touchNavStartX = 0;
  let touchNavStartY = 0;
  let touchNavTracking = false;
  let calendarCollapsedMobile = true;
  let actionDialogResolver = null;
  let helpRegionalTimeTimer = null;
  let selectedTimeZone = '';
  let columnThemePresetIndices = {};
  const DEFAULT_COLOR_PRESETS = ['#dbeafe', '#e9d5ff', '#dcfce7', '#fee2e2', '#fef3c7', '#cffafe', '#fce7f3', '#e5e7eb'];
  let colorPresets = [...DEFAULT_COLOR_PRESETS];
  const DEFAULT_TIME_SETTINGS = {
    intervalMinutes: 60,
    startMinute: 9 * 60,
    endMinute: 16 * 60,
    fullDay: false
  };
  let timeSettings = { ...DEFAULT_TIME_SETTINGS };

  const countryOptions = [
    'ZA', 'US', 'GB', 'AU', 'NZ', 'CA', 'IE', 'DE', 'FR', 'ES',
    'IT', 'NL', 'BE', 'CH', 'SE', 'NO', 'DK', 'FI', 'PL', 'IN', 'JP', 'BR'
  ];

  const defaultRows = [
    ['9:00 AM', 'Standup', 'Deep Work', 'Team Meeting', 'Deep Work', 'Review', '', ''],
    ['10:00 AM', 'Deep Work', 'Deep Work', 'Planning', 'Workshop', 'Deep Work', '', ''],
    ['11:00 AM', 'Deep Work', 'Meetings', 'Deep Work', 'Meetings', 'Admin', '', ''],
    ['12:00 PM', 'Lunch', 'Lunch', 'Lunch', 'Lunch', 'Lunch', '', ''],
    ['1:00 PM', 'Emails', 'Design', 'Emails', 'Design', '1:1s', '', ''],
    ['2:00 PM', 'Project A', 'Project B', 'Project A', 'Project B', 'Wrap Up', '', ''],
    ['3:00 PM', 'Project A', 'Project B', 'Project A', 'Project B', '', '', ''],
    ['4:00 PM', 'Review', 'Review', 'Review', 'Review', '', '', ''],
  ];

  const INITIAL_STATE = {
    title: 'My Weekly Schedule',
    subtitle: '',
    weekOffset: 0,
    headerLabels: ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    rows: defaultRows.map(row => [...row]),
    timeSettings: { ...DEFAULT_TIME_SETTINGS },
    colorPresets: [...DEFAULT_COLOR_PRESETS],
    themePresetIndex: 0,
    cellsPresetIndex: 0,
    selectedCountryCode: 'ZA',
    columnThemePresetIndices: {},
    customColors: [],
    userCalendarEvents: {},
    nowLineTheme: 'cyan',
    autoJumpToNowOnOpen: false
  };

  function getColCount() {
    const headerRow = document.getElementById('header-row');
    return headerRow.querySelectorAll('th').length - 1; // exclude action col
  }

  function normalizeThemePresetIndex(index) {
    const parsed = Number(index);
    if (!Number.isInteger(parsed) || parsed < 0 || parsed >= THEME_PRESETS.length) {
      return 0;
    }
    return parsed;
  }

  function updateThemePresetActiveState() {
    const activePreviewIndex = normalizeThemePresetIndex(activeCellsPresetIndex);

    for (let i = 0; i < THEME_PRESETS.length; i++) {
      const button = document.getElementById(`theme-preset-${i}`);
      if (!button) continue;
      button.classList.toggle('active', i === activePreviewIndex);
      button.title = THEME_PRESET_NAMES[i] || `Theme ${i + 1}`;
    }

    const presetSelect = document.getElementById('color-preset-select');
    if (presetSelect) {
      presetSelect.value = String(activePreviewIndex);
      presetSelect.title = THEME_PRESET_NAMES[activePreviewIndex] || 'Theme preset';
    }
  }

  function hexToRgba(hex, alpha) {
    const sanitized = String(hex || '').replace('#', '').trim();
    if (!/^[0-9a-fA-F]{6}$/.test(sanitized)) {
      return `rgba(0, 0, 0, ${alpha})`;
    }

    const red = parseInt(sanitized.slice(0, 2), 16);
    const green = parseInt(sanitized.slice(2, 4), 16);
    const blue = parseInt(sanitized.slice(4, 6), 16);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  function getThemeEventPattern(index) {
    const normalizedIndex = normalizeThemePresetIndex(index);
    return THEME_EVENT_PATTERNS[normalizedIndex] || THEME_EVENT_PATTERNS[0];
  }

  function getTableCellPattern(index) {
    const normalizedIndex = normalizeThemePresetIndex(index);
    return TABLE_CELL_PATTERNS[normalizedIndex] || TABLE_CELL_PATTERNS[0];
  }

  function getTableCellPatternColor(index, rowIndex, columnIndex) {
    const pattern = getTableCellPattern(index);
    const slot = Math.abs((rowIndex * 2) + columnIndex) % pattern.length;
    return pattern[slot];
  }

  function applyThemeVariables(theme, presetIndex = 0) {
    const pattern = getThemeEventPattern(presetIndex);
    const root = document.documentElement;
    root.style.setProperty('--bg', theme.bg);
    root.style.setProperty('--paper', theme.paper);
    root.style.setProperty('--ink', theme.ink);
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--line', theme.line);
    root.style.setProperty('--cell-hover', theme.cellHover);
    root.style.setProperty('--shadow', theme.shadow);
    root.style.setProperty('--header-grad-start', hexToRgba(theme.paper, 0.96));
    root.style.setProperty('--header-grad-end', hexToRgba(theme.bg, 0.92));
    root.style.setProperty('--panel-grad-start', hexToRgba(theme.paper, 0.82));
    root.style.setProperty('--panel-grad-end', hexToRgba(theme.bg, 0.90));
    root.style.setProperty('--toolbar-bg', hexToRgba(theme.paper, 0.94));
    root.style.setProperty('--table-head-bg', hexToRgba(theme.paper, 0.98));
    root.style.setProperty('--accent-soft', hexToRgba(theme.accent, 0.10));
    root.style.setProperty('--accent-mid', hexToRgba(theme.accent, 0.20));
    root.style.setProperty('--focus-bg', hexToRgba(theme.accent, 0.12));
    root.style.setProperty('--event-chip-base', pattern.base);
    root.style.setProperty('--event-chip-deep', pattern.deep);
    root.style.setProperty('--event-chip-meeting', pattern.meeting);
    root.style.setProperty('--event-chip-lunch', pattern.lunch);
    root.style.setProperty('--event-chip-break', pattern.break);
    root.style.setProperty('--event-chip-project', pattern.project);
  }

  function applyThemePreset(index, options = {}) {
    const { pushHistory = true } = options;
    const normalizedIndex = normalizeThemePresetIndex(index);

    if (pushHistory) {
      pushHistorySnapshot();
    }

    activeThemePresetIndex = normalizedIndex;
    applyThemeVariables(THEME_PRESETS[activeThemePresetIndex], activeThemePresetIndex);
    updateThemePresetActiveState();
    saveStateForCurrentUser();
  }

  function onThemePresetSelectChange() {
    const presetSelect = document.getElementById('color-preset-select');
    if (!presetSelect) return;
    const presetIndex = normalizeThemePresetIndex(presetSelect.value);
    presetSelect.title = THEME_PRESET_NAMES[presetIndex] || 'Theme preset';
  }

  function normalizeColumnThemePresetIndices(raw) {
    if (!raw || typeof raw !== 'object') {
      return {};
    }

    const normalized = {};
    Object.entries(raw).forEach(([columnKey, presetIndex]) => {
      const columnIndex = Number(columnKey);
      if (!Number.isInteger(columnIndex) || columnIndex < 0) return;
      normalized[columnIndex] = normalizeThemePresetIndex(presetIndex);
    });

    return normalized;
  }

  function clearColumnThemeVisual(columnIndex) {
    const headerCell = document.querySelectorAll('#header-row th')[columnIndex];
    if (headerCell) {
      headerCell.classList.remove('column-themed');
      headerCell.style.removeProperty('--column-theme-bg');
    }

    document.querySelectorAll('#tbody tr').forEach((row) => {
      const td = row.children[columnIndex];
      if (!td) return;
      td.classList.remove('column-themed');
      td.style.removeProperty('--column-theme-bg');
      td.style.removeProperty('--column-theme-cell-bg');
      td.style.removeProperty('--column-event-chip-base');
      td.style.removeProperty('--column-event-chip-deep');
      td.style.removeProperty('--column-event-chip-meeting');
      td.style.removeProperty('--column-event-chip-lunch');
      td.style.removeProperty('--column-event-chip-break');
      td.style.removeProperty('--column-event-chip-project');
    });
  }

  function applyColumnThemeVisual(columnIndex, presetIndex) {
    const normalizedPresetIndex = normalizeThemePresetIndex(presetIndex);
    const theme = THEME_PRESETS[normalizedPresetIndex];
    const pattern = getThemeEventPattern(normalizedPresetIndex);
    if (!theme) return;

    const headerCell = document.querySelectorAll('#header-row th')[columnIndex];
    if (headerCell) {
      headerCell.classList.add('column-themed');
      headerCell.style.setProperty('--column-theme-bg', hexToRgba(theme.paper, 0.98));
    }

    document.querySelectorAll('#tbody tr').forEach((row, rowIndex) => {
      const td = row.children[columnIndex];
      if (!td) return;
      td.classList.add('column-themed');
      td.style.setProperty('--column-theme-bg', hexToRgba(theme.cellHover, 0.95));
      td.style.setProperty('--column-theme-cell-bg', getTableCellPatternColor(normalizedPresetIndex, rowIndex, columnIndex));
      td.style.setProperty('--column-event-chip-base', pattern.base);
      td.style.setProperty('--column-event-chip-deep', pattern.deep);
      td.style.setProperty('--column-event-chip-meeting', pattern.meeting);
      td.style.setProperty('--column-event-chip-lunch', pattern.lunch);
      td.style.setProperty('--column-event-chip-break', pattern.break);
      td.style.setProperty('--column-event-chip-project', pattern.project);
    });
  }

  function renderColumnThemePresets() {
    const colCount = getColCount();

    for (let i = 0; i < colCount; i++) {
      clearColumnThemeVisual(i);
    }

    Object.entries(columnThemePresetIndices).forEach(([columnKey, presetIndex]) => {
      const columnIndex = Number(columnKey);
      if (!Number.isInteger(columnIndex) || columnIndex < 0 || columnIndex >= colCount) {
        delete columnThemePresetIndices[columnKey];
        return;
      }
      applyColumnThemeVisual(columnIndex, presetIndex);
    });
  }

  function getTargetColumnIndexForPreset() {
    if (selectedColumnIndex !== null && selectedColumnIndex >= 0 && selectedColumnIndex < getColCount()) {
      return selectedColumnIndex;
    }

    if (selectedEditableCell) {
      const td = selectedEditableCell.closest('td');
      if (td && td.parentElement) {
        const index = Array.from(td.parentElement.children).indexOf(td);
        if (index >= 0 && index < getColCount()) {
          return index;
        }
      }
    }

    return null;
  }

  function applyThemePresetToSelectedColumn(index, options = {}) {
    if (!isAdmin) return;

    const { pushHistory = true } = options;
    const targetColumn = getTargetColumnIndexForPreset();
    if (targetColumn === null) {
      showToast('Select a column header or a cell in that column first');
      return;
    }

    if (pushHistory) {
      pushHistorySnapshot();
    }

    const normalizedIndex = normalizeThemePresetIndex(index);
    columnThemePresetIndices[targetColumn] = normalizedIndex;
    activeCellsPresetIndex = normalizedIndex;
    renderColumnThemePresets();
    updateThemePresetActiveState();
    saveStateForCurrentUser();
  }

  function applyThemePresetToAllCells(index, options = {}) {
    if (!isAdmin) return;

    const { pushHistory = true } = options;
    if (pushHistory) {
      pushHistorySnapshot();
    }

    const normalizedIndex = normalizeThemePresetIndex(index);
    const next = {};
    for (let columnIndex = 1; columnIndex < getColCount(); columnIndex++) {
      next[columnIndex] = normalizedIndex;
    }

    columnThemePresetIndices = next;
    activeCellsPresetIndex = normalizedIndex;
    renderColumnThemePresets();
    updateThemePresetActiveState();
    saveStateForCurrentUser();
  }

  function applyThemePresetFromChip(index) {
    applyThemePresetToAllCells(index);
  }

  function shiftColumnThemePresetsAfterRemoval(removedIndex) {
    const next = {};
    Object.entries(columnThemePresetIndices).forEach(([columnKey, presetIndex]) => {
      const columnIndex = Number(columnKey);
      if (columnIndex === removedIndex) return;
      if (columnIndex > removedIndex) {
        next[columnIndex - 1] = presetIndex;
        return;
      }
      next[columnIndex] = presetIndex;
    });
    columnThemePresetIndices = next;
  }

  function clearCellSelection() {
    if (!selectedEditableCell) return;
    selectedEditableCell.classList.remove('selected-cell');
    selectedEditableCell = null;
  }

  function clearRowSelection() {
    document.querySelectorAll('#tbody tr.selected-row').forEach(row => row.classList.remove('selected-row'));
    selectedRowIndex = null;
  }

  function clearColumnSelection() {
    document.querySelectorAll('#header-row th.selected-column').forEach(th => th.classList.remove('selected-column'));
    document.querySelectorAll('#tbody td.selected-column').forEach(td => td.classList.remove('selected-column'));
    selectedColumnIndex = null;
    updateThemePresetActiveState();
  }

  function selectRowByIndex(rowIndex) {
    const rows = Array.from(document.querySelectorAll('#tbody tr'));
    if (rowIndex < 0 || rowIndex >= rows.length) return;

    clearCellSelection();
    clearColumnSelection();
    clearRowSelection();

    selectedRowIndex = rowIndex;
    rows[rowIndex].classList.add('selected-row');
  }

  function selectColumnByIndex(columnIndex) {
    if (columnIndex < 0 || columnIndex >= getColCount()) return;

    clearCellSelection();
    clearRowSelection();
    clearColumnSelection();

    selectedColumnIndex = columnIndex;
    const headerCell = document.querySelectorAll('#header-row th')[columnIndex];
    if (headerCell) headerCell.classList.add('selected-column');

    document.querySelectorAll('#tbody tr').forEach(row => {
      const td = row.children[columnIndex];
      if (td) td.classList.add('selected-column');
    });

    updateThemePresetActiveState();
  }

  function bindHeaderSelection() {
    document.querySelectorAll('#header-row th input').forEach(input => {
      if (input.dataset.selectionBound === '1') return;
      input.dataset.selectionBound = '1';
      input.addEventListener('click', (event) => {
        event.stopPropagation();
        const headerCell = input.closest('th');
        const headerCells = Array.from(document.querySelectorAll('#header-row th'));
        const index = headerCells.indexOf(headerCell);
        if (index >= 0 && index < getColCount()) {
          selectColumnByIndex(index);
        }
      });
    });
  }

  function setEditMode(enabled) {
    const controlsEnabled = true;
    const editableElements = document.querySelectorAll(
      '#main-title, .subtitle-input, #timetable input, #timetable textarea, .row-del'
    );

    editableElements.forEach(el => {
      if (el.tagName === 'BUTTON') {
        el.disabled = !controlsEnabled;
      } else {
        el.disabled = !controlsEnabled;
      }
    });

    document.querySelectorAll('[data-requires-admin]').forEach(btn => {
      btn.disabled = !controlsEnabled;
    });

    const timeGridActionIds = new Set([
      'time-interval-select',
      'time-range-mode',
      'time-start-select',
      'time-end-select',
      'time-preset-early',
      'time-preset-workday',
      'time-preset-full'
    ]);

    document.querySelectorAll('[data-admin-action]').forEach(btn => {
      if (timeGridActionIds.has(btn.id)) {
        btn.disabled = false;
        return;
      }
      btn.disabled = !controlsEnabled;
    });

    const subtitleInput = document.querySelector('.subtitle-input');
    if (subtitleInput) {
      subtitleInput.placeholder = enabled ? 'Add a subtitle or description...' : '';
    }

    const status = document.getElementById('auth-status');
    const unlockBtn = document.getElementById('customize-unlock-btn');
    const lockBtn = document.getElementById('customize-lock-btn');

    if (!status || !unlockBtn || !lockBtn) return;

    if (controlsEnabled) {
      status.textContent = 'Customize unlocked';
      status.style.color = 'var(--accent)';
      unlockBtn.style.display = 'none';
      lockBtn.style.display = 'inline-block';
    } else {
      status.textContent = 'Customize locked';
      status.style.color = '#888';
      unlockBtn.style.display = 'inline-block';
      lockBtn.style.display = 'none';
    }
  }

  function isCustomizePanelOpen() {
    const panel = document.getElementById('settings-panel');
    return panel?.classList.contains('open') === true;
  }

  function syncEditModeWithCustomizePanel() {
    setEditMode(isAdmin && isCustomizePanelOpen());
  }

  function isTableEditEnabled() {
    return isAdmin && isCustomizePanelOpen();
  }

  function getPreferredSimpleCustomizeMode() {
    try {
      const rawValue = localStorage.getItem(SIMPLE_CUSTOMIZE_MODE_STORAGE_KEY);
      if (rawValue === 'advanced') return false;
      if (rawValue === 'simple') return true;
    } catch (error) {
      // ignore storage errors
    }
    return true;
  }

  function savePreferredSimpleCustomizeMode(enabled) {
    try {
      localStorage.setItem(SIMPLE_CUSTOMIZE_MODE_STORAGE_KEY, enabled ? 'simple' : 'advanced');
    } catch (error) {
      // ignore storage errors
    }
  }

  function setSimpleCustomizeMode(enabled, options = {}) {
    const { persistPreference = false } = options;
    const panel = document.getElementById('settings-panel');
    const simpleToggleBtn = document.getElementById('simple-mode-toggle-btn');
    const simpleModeStatus = document.getElementById('simple-mode-status');
    if (!panel || !simpleToggleBtn) return;

    const shouldUseSimpleMode = enabled && isSmallScreen();
    panel.classList.toggle('simple-mode', shouldUseSimpleMode);
    simpleToggleBtn.textContent = shouldUseSimpleMode ? 'More Options' : 'Simple Mode';
    simpleToggleBtn.setAttribute('aria-pressed', shouldUseSimpleMode ? 'true' : 'false');
    if (simpleModeStatus) {
      simpleModeStatus.textContent = `Mode: ${shouldUseSimpleMode ? 'Simple' : 'Advanced'}`;
    }

    if (persistPreference) {
      savePreferredSimpleCustomizeMode(Boolean(enabled));
    }
  }

  function toggleSimpleCustomizeMode() {
    const panel = document.getElementById('settings-panel');
    if (!panel) return;
    setSimpleCustomizeMode(!panel.classList.contains('simple-mode'), { persistPreference: true });
  }

  function getTimetableDataColumnIndices() {
    const headerRow = document.getElementById('header-row');
    if (!headerRow) return [];

    const headerCells = Array.from(headerRow.querySelectorAll('th'));
    if (headerCells.length <= 2) return [];

    const indices = [];
    for (let index = 1; index < headerCells.length - 1; index += 1) {
      indices.push(index + 1);
    }
    return indices;
  }

  function getStoredTimetableScope() {
    try {
      const rawValue = localStorage.getItem(TIMETABLE_SCOPE_STORAGE_KEY);
      if (rawValue === 'day' || rawValue === 'week' || rawValue === 'full') {
        return rawValue;
      }
      return isSmallScreen() ? 'day' : 'week';
    } catch (error) {
      return isSmallScreen() ? 'day' : 'week';
    }
  }

  function saveTimetableScope(scope) {
    try {
      const normalizedScope = scope === 'day' || scope === 'full' ? scope : 'week';
      localStorage.setItem(TIMETABLE_SCOPE_STORAGE_KEY, normalizedScope);
    } catch (error) {
      // ignore storage errors
    }
  }

  function refreshFocusDaySelect() {
    const daySelect = document.getElementById('focus-day-select');
    if (!daySelect) return;

    const dayColumns = getTimetableDataColumnIndices();
    daySelect.innerHTML = '';

    dayColumns.forEach((columnIndex) => {
      const headerInput = document.querySelector(`#header-row th:nth-child(${columnIndex}) input`);
      const option = document.createElement('option');
      option.value = String(columnIndex);
      option.textContent = (headerInput?.value || `Day ${columnIndex - 1}`).trim();
      daySelect.appendChild(option);
    });

    if (!dayColumns.includes(focusedDayColumn)) {
      focusedDayColumn = dayColumns[0] || 2;
    }

    daySelect.value = String(focusedDayColumn);
    daySelect.style.display = timetableScope === 'day' ? 'inline-block' : 'none';
  }

  function renderDayPillSelector() {
    const pillBar = document.getElementById('day-pill-bar');
    if (!pillBar) return;

    const dayColumns = getTimetableDataColumnIndices();
    pillBar.innerHTML = '';

    dayColumns.forEach((columnIndex) => {
      const headerInput = document.querySelector(`#header-row th:nth-child(${columnIndex}) input`);
      const label = (headerInput?.value || `Day ${columnIndex - 1}`).trim();
      const shortLabel = label.split(' ').slice(0, 2).join(' ');

      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'day-pill-btn';
      button.textContent = shortLabel;
      button.setAttribute('aria-label', label);
      button.classList.toggle('active', focusedDayColumn === columnIndex);
      button.onclick = () => onDayPillTap(columnIndex);
      pillBar.appendChild(button);
    });
  }

  function onDayPillTap(columnIndex) {
    focusedDayColumn = columnIndex;
    const focusSelect = document.getElementById('focus-day-select');
    if (focusSelect) {
      focusSelect.value = String(columnIndex);
    }

    if (isSmallScreen()) {
      setTimetableScope('day', { persistPreference: true });
      return;
    }

    applyTimetableColumnVisibility();
    renderDayPillSelector();
    scrollDayColumnIntoView(columnIndex);
    updateNowLine();
  }

  function applyTimetableColumnVisibility() {
    const headerRow = document.getElementById('header-row');
    if (!headerRow) return;

    const showDayOnly = timetableScope === 'day';
    const isFullView = timetableScope === 'full';
    document.body.classList.toggle('table-view-full', isFullView);
    const headerCells = Array.from(headerRow.querySelectorAll('th'));
    const visibleHeaderIndex = Math.max(0, focusedDayColumn - 1);

    headerCells.forEach((cell, index) => {
      const shouldShow = !showDayOnly || index === 0 || index === visibleHeaderIndex;
      cell.style.display = shouldShow ? '' : 'none';
    });

    document.querySelectorAll('#tbody tr').forEach((row) => {
      const cells = Array.from(row.children);
      cells.forEach((cell, index) => {
        const shouldShow = !showDayOnly || index === 0 || index === visibleHeaderIndex;
        cell.style.display = shouldShow ? '' : 'none';
      });
    });

    renderDayPillSelector();
  }

  function setTimetableScope(scope, options = {}) {
    const { persistPreference = true } = options;
    timetableScope = scope === 'day' || scope === 'full' ? scope : 'week';

    const scopeSelect = document.getElementById('scope-select');
    if (scopeSelect) {
      scopeSelect.value = timetableScope;
    }

    refreshFocusDaySelect();
    applyTimetableColumnVisibility();
    updateNowLine();

    if (persistPreference) {
      saveTimetableScope(timetableScope);
    }
  }

  function onTimetableScopeChange(value) {
    setTimetableScope(value, { persistPreference: true });
  }

  function applyCustomizePanelFilters() {
    const panel = document.getElementById('settings-panel');
    if (!panel) return;

    panel.classList.toggle('show-advanced', showCustomizeAdvanced);

    const tabButtons = document.querySelectorAll('.settings-tab-btn');
    tabButtons.forEach((button) => {
      const tabId = button.id.replace('tab-', '');
      button.classList.toggle('active', tabId === activeCustomizeTab);
    });

    const cards = document.querySelectorAll('.settings-card[data-tab]');
    cards.forEach((card) => {
      card.classList.toggle('tab-hidden', card.dataset.tab !== activeCustomizeTab);
    });

    const advancedToggle = document.getElementById('customize-advanced-toggle');
    if (advancedToggle) {
      advancedToggle.textContent = `Advanced: ${showCustomizeAdvanced ? 'On' : 'Off'}`;
      advancedToggle.setAttribute('aria-pressed', showCustomizeAdvanced ? 'true' : 'false');
    }
  }

  function setCustomizeTab(tabName) {
    const allowedTabs = ['layout', 'colors', 'data'];
    activeCustomizeTab = allowedTabs.includes(tabName) ? tabName : 'layout';
    try {
      localStorage.setItem(CUSTOMIZE_TAB_STORAGE_KEY, activeCustomizeTab);
    } catch (error) {
      // ignore storage errors
    }
    applyCustomizePanelFilters();
  }

  function toggleAdvancedCustomize() {
    showCustomizeAdvanced = !showCustomizeAdvanced;
    applyCustomizePanelFilters();
  }

  function onFocusDayChange(value) {
    const parsed = Number(value);
    const validColumns = getTimetableDataColumnIndices();
    if (!validColumns.includes(parsed)) return;

    focusedDayColumn = parsed;
    applyTimetableColumnVisibility();
    renderDayPillSelector();
    updateNowLine();
  }

  function initTimetableViewportControls() {
    refreshFocusDaySelect();
    setTimetableScope(isSmallScreen() ? 'day' : getStoredTimetableScope(), { persistPreference: false });
    renderDayPillSelector();
  }

  function toggleSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const toggleBtn = document.getElementById('settings-toggle-btn');
    if (!panel || !toggleBtn) return;

    const isOpen = panel.classList.toggle('open');
    toggleBtn.textContent = isOpen ? '✕ Close' : '⚙ Customize';
    if (isOpen) {
      panel.scrollTop = 0;
      try {
        const savedTab = localStorage.getItem(CUSTOMIZE_TAB_STORAGE_KEY);
        if (savedTab === 'layout' || savedTab === 'colors' || savedTab === 'data') {
          activeCustomizeTab = savedTab;
        }
      } catch (error) {
        // ignore storage errors
      }
      showCustomizeAdvanced = false;
      applyCustomizePanelFilters();
    } else {
      panel.classList.remove('show-advanced');
    }
    syncEditModeWithCustomizePanel();
    if (activeView === 'calendar') {
      renderCalendar();
    }
  }

  function openHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    if (!drawer) return;
    if (drawer.classList.contains('open')) {
      closeHelpMenu();
      return;
    }
    openHelpMenu();
  }

  function initHelpMenu() {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeHelpMenu();
    });

    initHelpRegionalTime();
  }

  function getDetectedTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  }

  function isValidTimeZone(timeZone) {
    if (!timeZone) return false;
    try {
      new Intl.DateTimeFormat(undefined, { timeZone });
      return true;
    } catch (error) {
      return false;
    }
  }

  function getStoredTimeZonePreference() {
    try {
      const raw = localStorage.getItem(TIMEZONE_STORAGE_KEY);
      if (!raw) return '';
      return isValidTimeZone(raw) ? raw : '';
    } catch (error) {
      return '';
    }
  }

  function getActiveTimeZone() {
    return selectedTimeZone || getDetectedTimeZone();
  }

  function getNowInActiveTimeZone() {
    const timeZone = getActiveTimeZone();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(new Date());

    const partMap = {};
    parts.forEach((part) => {
      if (part.type !== 'literal') {
        partMap[part.type] = part.value;
      }
    });

    return new Date(
      Number(partMap.year),
      Number(partMap.month) - 1,
      Number(partMap.day),
      Number(partMap.hour),
      Number(partMap.minute),
      Number(partMap.second)
    );
  }

  function formatTimeZoneLabel(timeZone) {
    if (!isValidTimeZone(timeZone)) return 'UTC';
    if (timeZone === 'Africa/Johannesburg') return 'South Africa (Johannesburg)';

    const [region, city] = String(timeZone).split('/');
    if (!city) {
      return String(timeZone).replace(/_/g, ' ');
    }

    return `${region.replace(/_/g, ' ')} - ${city.replace(/_/g, ' ')}`;
  }

  function getTimeZoneOptionList() {
    const detected = getDetectedTimeZone();
    const fallbackZones = [
      'UTC', 'Africa/Johannesburg', 'Europe/London', 'Europe/Paris',
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
      'America/Sao_Paulo', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
      'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
    ];

    let zones = [];
    if (typeof Intl.supportedValuesOf === 'function') {
      zones = Intl.supportedValuesOf('timeZone');
    }

    const merged = [detected, ...fallbackZones, ...zones].filter(isValidTimeZone);
    return Array.from(new Set(merged));
  }

  function buildHelpTimeZoneSelect() {
    const select = document.getElementById('help-timezone-select');
    if (!select) return;

    const zones = getTimeZoneOptionList();
    select.innerHTML = '';

    const autoOption = document.createElement('option');
    autoOption.value = '';
    autoOption.textContent = `Auto (${formatTimeZoneLabel(getDetectedTimeZone())})`;
    select.appendChild(autoOption);

    zones.forEach((zone) => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = formatTimeZoneLabel(zone);
      select.appendChild(option);
    });
  }

  function setSelectedTimeZone(timeZone, options = {}) {
    const { save = true } = options;
    selectedTimeZone = isValidTimeZone(timeZone) ? timeZone : '';

    const select = document.getElementById('help-timezone-select');
    if (select) {
      select.value = selectedTimeZone;
    }

    if (save) {
      try {
        if (selectedTimeZone) {
          localStorage.setItem(TIMEZONE_STORAGE_KEY, selectedTimeZone);
        } else {
          localStorage.removeItem(TIMEZONE_STORAGE_KEY);
        }
      } catch (error) {
        // ignore storage errors
      }
    }

    updateHelpRegionalTime();
    updateTodayHighlight();
    updateNowLine();
    renderCalendar();
  }

  function onHelpTimeZoneChange(value) {
    setSelectedTimeZone(value);
  }

  function updateHelpRegionalTime() {
    const timezoneLabel = document.getElementById('help-timezone-label');
    const localTimeLabel = document.getElementById('help-local-time-label');
    if (!timezoneLabel || !localTimeLabel) return;

    const timezone = getActiveTimeZone();
    timezoneLabel.textContent = formatTimeZoneLabel(timezone);

    const now = getNowInActiveTimeZone();
    localTimeLabel.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: getDetectedTimeZone()
    });
  }

  function initHelpRegionalTime() {
    buildHelpTimeZoneSelect();
    setSelectedTimeZone(getStoredTimeZonePreference(), { save: false });
    updateHelpRegionalTime();

    if (helpRegionalTimeTimer) {
      clearInterval(helpRegionalTimeTimer);
    }

    helpRegionalTimeTimer = setInterval(updateHelpRegionalTime, 1000);
  }

  function setAuthMode(mode) {
    const normalizedMode = mode === 'signup' ? 'signup' : 'signin';
    authMode = normalizedMode;

    const title = document.getElementById('app-auth-title');
    const confirmPasswordInput = document.getElementById('app-confirm-password');
    const signInBtn = document.getElementById('signin-btn');
    const signUpBtn = document.getElementById('signup-btn');
    if (!title || !confirmPasswordInput || !signInBtn || !signUpBtn) return;

    if (normalizedMode === 'signup') {
      title.textContent = 'Create your account';
      confirmPasswordInput.style.display = 'block';
      confirmPasswordInput.disabled = false;
      signUpBtn.classList.add('auth-active');
      signInBtn.classList.remove('auth-active');
      return;
    }

    title.textContent = 'Sign in to open your timetable';
    confirmPasswordInput.value = '';
    confirmPasswordInput.style.display = 'none';
    confirmPasswordInput.disabled = true;
    signInBtn.classList.add('auth-active');
    signUpBtn.classList.remove('auth-active');
  }

  function submitAuthByMode() {
    if (authMode === 'signup') {
      appSignUp();
      return;
    }

    appLogin();
  }

  function handleAuthEnter(event) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    submitAuthByMode();
  }

  function getAuthEmailRedirectUrl() {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      return window.location.origin + window.location.pathname;
    }
    if (window.location.protocol === 'file:') {
      return LOCALHOST_AUTH_REDIRECT_URL;
    }
    return null;
  }

  function initBuildBadge() {
    const badge = document.getElementById('build-badge');
    if (!badge) return;
    badge.textContent = `Build ${APP_BUILD_VERSION}`;
  }

  function showToast(message) {
    const toastRoot = document.getElementById('toast-root');
    if (!toastRoot || !message) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    toastRoot.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 2200);
  }

  function resolveActionDialog(confirmed) {
    const dialog = document.getElementById('action-dialog');
    const input = document.getElementById('action-dialog-input');
    if (!dialog) return;

    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden', 'true');

    const resolver = actionDialogResolver;
    actionDialogResolver = null;
    if (resolver) {
      resolver({ confirmed, value: input?.value || '' });
    }
  }

  function openActionDialog(options = {}) {
    const {
      title = 'Confirm action',
      message = '',
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      showInput = false,
      inputValue = '',
      inputPlaceholder = ''
    } = options;

    const dialog = document.getElementById('action-dialog');
    const titleEl = document.getElementById('action-dialog-title');
    const messageEl = document.getElementById('action-dialog-message');
    const input = document.getElementById('action-dialog-input');
    const buttons = dialog?.querySelectorAll('.action-dialog-actions .btn');

    if (!dialog || !titleEl || !messageEl || !input || !buttons || buttons.length < 2) {
      return Promise.resolve({ confirmed: false, value: '' });
    }

    titleEl.textContent = title;
    messageEl.textContent = message;
    buttons[0].textContent = confirmText;
    buttons[1].textContent = cancelText;

    input.classList.toggle('show', showInput);
    input.value = inputValue;
    input.placeholder = inputPlaceholder;

    dialog.classList.add('open');
    dialog.setAttribute('aria-hidden', 'false');

    if (showInput) {
      setTimeout(() => input.focus(), 0);
    }

    return new Promise((resolve) => {
      actionDialogResolver = resolve;
    });
  }

  function toggleQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    const next = !quickAdd.classList.contains('open');
    quickAdd.classList.toggle('open', next);
    quickAdd.setAttribute('aria-hidden', next ? 'false' : 'true');
  }

  function closeQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    quickAdd.classList.remove('open');
    quickAdd.setAttribute('aria-hidden', 'true');
  }

  function quickAddColumn() {
    closeQuickAddActions();
    if (!isAdmin) {
      showToast('Unlock Customize first');
      return;
    }
    addColumn();
    showToast('Column added');
  }

  function quickAddEvent() {
    closeQuickAddActions();
    if (activeView === 'calendar') {
      const date = getNowInActiveTimeZone();
      addCalendarEvent(getIsoDateKey(date));
      showToast('Event editor opened');
      return;
    }
    addRow();
    showToast('Time slot added');
  }

  function openCellEditSheet(inputElement) {
    if (!inputElement || !isSmallScreen()) return;
    const sheet = document.getElementById('cell-edit-sheet');
    const editInput = document.getElementById('cell-edit-input');
    if (!sheet || !editInput) return;

    activeCellEditorInput = inputElement;
    editInput.value = inputElement.value || '';
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    editInput.focus();
  }

  function closeCellEditSheet() {
    const sheet = document.getElementById('cell-edit-sheet');
    if (!sheet) return;
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    activeCellEditorInput = null;
  }

  function saveCellEditSheet() {
    if (!activeCellEditorInput) {
      closeCellEditSheet();
      return;
    }

    const editInput = document.getElementById('cell-edit-input');
    const nextValue = (editInput?.value || '').trim();
    pushHistorySnapshot();
    activeCellEditorInput.value = nextValue;
    applyEventChip(activeCellEditorInput);
    updateNowLine();
    closeCellEditSheet();
    showToast('Cell updated');
  }

  function clearCellEditSheet() {
    const editInput = document.getElementById('cell-edit-input');
    if (editInput) editInput.value = '';
  }

  function toggleCalendarCollapse() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button || !isSmallScreen()) return;

    calendarCollapsedMobile = !panel.classList.contains('calendar-collapsed');
    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  function setCalendarCollapsedForViewport() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button) return;

    if (!isSmallScreen()) {
      panel.classList.remove('calendar-collapsed');
      button.textContent = 'Expand Calendar';
      return;
    }

    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  async function exportTimetablePdf() {
    const exportBtn = document.getElementById('export-pdf-btn');
    const timetable = document.getElementById('timetable');
    if (!timetable) return;

    if (exportBtn) {
      exportBtn.disabled = true;
      exportBtn.textContent = 'Exporting...';
    }

    try {
      if (!window.html2pdf) {
        throw new Error('PDF library unavailable');
      }

      const tableClone = timetable.cloneNode(true);
      tableClone.removeAttribute('id');
      tableClone.style.width = '100%';

      tableClone.querySelectorAll('input, textarea').forEach((field) => {
        const value = (field.value || '').trim();
        const fallback = (field.placeholder || '').trim();
        const text = value || fallback;
        const replacement = document.createElement('div');
        replacement.textContent = text;
        replacement.style.padding = '8px 10px';
        replacement.style.minHeight = '32px';
        replacement.style.fontSize = '11px';
        replacement.style.lineHeight = '1.25';
        replacement.style.wordBreak = 'break-word';
        replacement.style.whiteSpace = 'pre-wrap';
        field.replaceWith(replacement);
      });

      const exportRoot = document.createElement('div');
      exportRoot.style.position = 'fixed';
      exportRoot.style.left = '-10000px';
      exportRoot.style.top = '0';
      exportRoot.style.width = '1600px';
      exportRoot.style.background = '#fff';
      exportRoot.style.color = '#111';
      exportRoot.style.padding = '16px';

      const title = document.getElementById('main-title')?.value?.trim() || 'Timetable';
      const subtitle = document.querySelector('.subtitle-input')?.value?.trim() || '';
      const weekLabel = document.getElementById('week-label')?.textContent?.trim() || '';

      const heading = document.createElement('div');
      heading.innerHTML = `<div style="font-size:24px;font-weight:700;margin-bottom:4px;">${title}</div><div style="font-size:12px;color:#444;margin-bottom:4px;">${subtitle}</div><div style="font-size:11px;color:#666;margin-bottom:12px;">${weekLabel}</div>`;

      exportRoot.appendChild(heading);
      exportRoot.appendChild(tableClone);
      document.body.appendChild(exportRoot);

      const safeName = title.replace(/[^a-z0-9-_ ]/gi, '').trim().replace(/\s+/g, '_') || 'timetable';

      await window.html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: `${safeName}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        })
        .from(exportRoot)
        .save();

      document.body.removeChild(exportRoot);
    } catch (error) {
      showToast('Unable to export PDF right now');
    } finally {
      if (exportBtn) {
        exportBtn.disabled = false;
        exportBtn.textContent = 'Export PDF';
      }
    }
  }

  function initTimetableViewportControls() {
    refreshFocusDaySelect();
    setTimetableScope(isSmallScreen() ? 'day' : getStoredTimetableScope(), { persistPreference: false });
    renderDayPillSelector();
  }

  function toggleSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const toggleBtn = document.getElementById('settings-toggle-btn');
    if (!panel || !toggleBtn) return;

    const isOpen = panel.classList.toggle('open');
    toggleBtn.textContent = isOpen ? '✕ Close' : '⚙ Customize';
    if (isOpen) {
      panel.scrollTop = 0;
      try {
        const savedTab = localStorage.getItem(CUSTOMIZE_TAB_STORAGE_KEY);
        if (savedTab === 'layout' || savedTab === 'colors' || savedTab === 'data') {
          activeCustomizeTab = savedTab;
        }
      } catch (error) {
        // ignore storage errors
      }
      showCustomizeAdvanced = false;
      applyCustomizePanelFilters();
    } else {
      panel.classList.remove('show-advanced');
    }
    syncEditModeWithCustomizePanel();
    if (activeView === 'calendar') {
      renderCalendar();
    }
  }

  function openHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    if (!drawer) return;
    if (drawer.classList.contains('open')) {
      closeHelpMenu();
      return;
    }
    openHelpMenu();
  }

  function initHelpMenu() {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeHelpMenu();
    });

    initHelpRegionalTime();
  }

  function getDetectedTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  }

  function isValidTimeZone(timeZone) {
    if (!timeZone) return false;
    try {
      new Intl.DateTimeFormat(undefined, { timeZone });
      return true;
    } catch (error) {
      return false;
    }
  }

  function getStoredTimeZonePreference() {
    try {
      const raw = localStorage.getItem(TIMEZONE_STORAGE_KEY);
      if (!raw) return '';
      return isValidTimeZone(raw) ? raw : '';
    } catch (error) {
      return '';
    }
  }

  function getActiveTimeZone() {
    return selectedTimeZone || getDetectedTimeZone();
  }

  function getNowInActiveTimeZone() {
    const timeZone = getActiveTimeZone();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(new Date());

    const partMap = {};
    parts.forEach((part) => {
      if (part.type !== 'literal') {
        partMap[part.type] = part.value;
      }
    });

    return new Date(
      Number(partMap.year),
      Number(partMap.month) - 1,
      Number(partMap.day),
      Number(partMap.hour),
      Number(partMap.minute),
      Number(partMap.second)
    );
  }

  function formatTimeZoneLabel(timeZone) {
    if (!isValidTimeZone(timeZone)) return 'UTC';
    if (timeZone === 'Africa/Johannesburg') return 'South Africa (Johannesburg)';

    const [region, city] = String(timeZone).split('/');
    if (!city) {
      return String(timeZone).replace(/_/g, ' ');
    }

    return `${region.replace(/_/g, ' ')} - ${city.replace(/_/g, ' ')}`;
  }

  function getTimeZoneOptionList() {
    const detected = getDetectedTimeZone();
    const fallbackZones = [
      'UTC', 'Africa/Johannesburg', 'Europe/London', 'Europe/Paris',
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
      'America/Sao_Paulo', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
      'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
    ];

    let zones = [];
    if (typeof Intl.supportedValuesOf === 'function') {
      zones = Intl.supportedValuesOf('timeZone');
    }

    const merged = [detected, ...fallbackZones, ...zones].filter(isValidTimeZone);
    return Array.from(new Set(merged));
  }

  function buildHelpTimeZoneSelect() {
    const select = document.getElementById('help-timezone-select');
    if (!select) return;

    const zones = getTimeZoneOptionList();
    select.innerHTML = '';

    const autoOption = document.createElement('option');
    autoOption.value = '';
    autoOption.textContent = `Auto (${formatTimeZoneLabel(getDetectedTimeZone())})`;
    select.appendChild(autoOption);

    zones.forEach((zone) => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = formatTimeZoneLabel(zone);
      select.appendChild(option);
    });
  }

  function setSelectedTimeZone(timeZone, options = {}) {
    const { save = true } = options;
    selectedTimeZone = isValidTimeZone(timeZone) ? timeZone : '';

    const select = document.getElementById('help-timezone-select');
    if (select) {
      select.value = selectedTimeZone;
    }

    if (save) {
      try {
        if (selectedTimeZone) {
          localStorage.setItem(TIMEZONE_STORAGE_KEY, selectedTimeZone);
        } else {
          localStorage.removeItem(TIMEZONE_STORAGE_KEY);
        }
      } catch (error) {
        // ignore storage errors
      }
    }

    updateHelpRegionalTime();
    updateTodayHighlight();
    updateNowLine();
    renderCalendar();
  }

  function onHelpTimeZoneChange(value) {
    setSelectedTimeZone(value);
  }

  function updateHelpRegionalTime() {
    const timezoneLabel = document.getElementById('help-timezone-label');
    const localTimeLabel = document.getElementById('help-local-time-label');
    if (!timezoneLabel || !localTimeLabel) return;

    const timezone = getActiveTimeZone();
    timezoneLabel.textContent = formatTimeZoneLabel(timezone);

    const now = getNowInActiveTimeZone();
    localTimeLabel.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: getDetectedTimeZone()
    });
  }

  function initHelpRegionalTime() {
    buildHelpTimeZoneSelect();
    setSelectedTimeZone(getStoredTimeZonePreference(), { save: false });
    updateHelpRegionalTime();

    if (helpRegionalTimeTimer) {
      clearInterval(helpRegionalTimeTimer);
    }

    helpRegionalTimeTimer = setInterval(updateHelpRegionalTime, 1000);
  }

  function setAuthMode(mode) {
    const normalizedMode = mode === 'signup' ? 'signup' : 'signin';
    authMode = normalizedMode;

    const title = document.getElementById('app-auth-title');
    const confirmPasswordInput = document.getElementById('app-confirm-password');
    const signInBtn = document.getElementById('signin-btn');
    const signUpBtn = document.getElementById('signup-btn');
    if (!title || !confirmPasswordInput || !signInBtn || !signUpBtn) return;

    if (normalizedMode === 'signup') {
      title.textContent = 'Create your account';
      confirmPasswordInput.style.display = 'block';
      confirmPasswordInput.disabled = false;
      signUpBtn.classList.add('auth-active');
      signInBtn.classList.remove('auth-active');
      return;
    }

    title.textContent = 'Sign in to open your timetable';
    confirmPasswordInput.value = '';
    confirmPasswordInput.style.display = 'none';
    confirmPasswordInput.disabled = true;
    signInBtn.classList.add('auth-active');
    signUpBtn.classList.remove('auth-active');
  }

  function submitAuthByMode() {
    if (authMode === 'signup') {
      appSignUp();
      return;
    }

    appLogin();
  }

  function handleAuthEnter(event) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    submitAuthByMode();
  }

  function getAuthEmailRedirectUrl() {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      return window.location.origin + window.location.pathname;
    }
    if (window.location.protocol === 'file:') {
      return LOCALHOST_AUTH_REDIRECT_URL;
    }
    return null;
  }

  function initBuildBadge() {
    const badge = document.getElementById('build-badge');
    if (!badge) return;
    badge.textContent = `Build ${APP_BUILD_VERSION}`;
  }

  function showToast(message) {
    const toastRoot = document.getElementById('toast-root');
    if (!toastRoot || !message) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    toastRoot.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 2200);
  }

  function resolveActionDialog(confirmed) {
    const dialog = document.getElementById('action-dialog');
    const input = document.getElementById('action-dialog-input');
    if (!dialog) return;

    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden', 'true');

    const resolver = actionDialogResolver;
    actionDialogResolver = null;
    if (resolver) {
      resolver({ confirmed, value: input?.value || '' });
    }
  }

  function openActionDialog(options = {}) {
    const {
      title = 'Confirm action',
      message = '',
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      showInput = false,
      inputValue = '',
      inputPlaceholder = ''
    } = options;

    const dialog = document.getElementById('action-dialog');
    const titleEl = document.getElementById('action-dialog-title');
    const messageEl = document.getElementById('action-dialog-message');
    const input = document.getElementById('action-dialog-input');
    const buttons = dialog?.querySelectorAll('.action-dialog-actions .btn');

    if (!dialog || !titleEl || !messageEl || !input || !buttons || buttons.length < 2) {
      return Promise.resolve({ confirmed: false, value: '' });
    }

    titleEl.textContent = title;
    messageEl.textContent = message;
    buttons[0].textContent = confirmText;
    buttons[1].textContent = cancelText;

    input.classList.toggle('show', showInput);
    input.value = inputValue;
    input.placeholder = inputPlaceholder;

    dialog.classList.add('open');
    dialog.setAttribute('aria-hidden', 'false');

    if (showInput) {
      setTimeout(() => input.focus(), 0);
    }

    return new Promise((resolve) => {
      actionDialogResolver = resolve;
    });
  }

  function toggleQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    const next = !quickAdd.classList.contains('open');
    quickAdd.classList.toggle('open', next);
    quickAdd.setAttribute('aria-hidden', next ? 'false' : 'true');
  }

  function closeQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    quickAdd.classList.remove('open');
    quickAdd.setAttribute('aria-hidden', 'true');
  }

  function quickAddColumn() {
    closeQuickAddActions();
    if (!isAdmin) {
      showToast('Unlock Customize first');
      return;
    }
    addColumn();
    showToast('Column added');
  }

  function quickAddEvent() {
    closeQuickAddActions();
    if (activeView === 'calendar') {
      const date = getNowInActiveTimeZone();
      addCalendarEvent(getIsoDateKey(date));
      showToast('Event editor opened');
      return;
    }
    addRow();
    showToast('Time slot added');
  }

  function openCellEditSheet(inputElement) {
    if (!inputElement || !isSmallScreen()) return;
    const sheet = document.getElementById('cell-edit-sheet');
    const editInput = document.getElementById('cell-edit-input');
    if (!sheet || !editInput) return;

    activeCellEditorInput = inputElement;
    editInput.value = inputElement.value || '';
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    editInput.focus();
  }

  function closeCellEditSheet() {
    const sheet = document.getElementById('cell-edit-sheet');
    if (!sheet) return;
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    activeCellEditorInput = null;
  }

  function saveCellEditSheet() {
    if (!activeCellEditorInput) {
      closeCellEditSheet();
      return;
    }

    const editInput = document.getElementById('cell-edit-input');
    const nextValue = (editInput?.value || '').trim();
    pushHistorySnapshot();
    activeCellEditorInput.value = nextValue;
    applyEventChip(activeCellEditorInput);
    updateNowLine();
    closeCellEditSheet();
    showToast('Cell updated');
  }

  function clearCellEditSheet() {
    const editInput = document.getElementById('cell-edit-input');
    if (editInput) editInput.value = '';
  }

  function toggleCalendarCollapse() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button || !isSmallScreen()) return;

    calendarCollapsedMobile = !panel.classList.contains('calendar-collapsed');
    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  function setCalendarCollapsedForViewport() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button) return;

    if (!isSmallScreen()) {
      panel.classList.remove('calendar-collapsed');
      button.textContent = 'Expand Calendar';
      return;
    }

    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  async function exportTimetablePdf() {
    const exportBtn = document.getElementById('export-pdf-btn');
    const timetable = document.getElementById('timetable');
    if (!timetable) return;

    if (exportBtn) {
      exportBtn.disabled = true;
      exportBtn.textContent = 'Exporting...';
    }

    try {
      if (!window.html2pdf) {
        throw new Error('PDF library unavailable');
      }

      const tableClone = timetable.cloneNode(true);
      tableClone.removeAttribute('id');
      tableClone.style.width = '100%';

      tableClone.querySelectorAll('input, textarea').forEach((field) => {
        const value = (field.value || '').trim();
        const fallback = (field.placeholder || '').trim();
        const text = value || fallback;
        const replacement = document.createElement('div');
        replacement.textContent = text;
        replacement.style.padding = '8px 10px';
        replacement.style.minHeight = '32px';
        replacement.style.fontSize = '11px';
        replacement.style.lineHeight = '1.25';
        replacement.style.wordBreak = 'break-word';
        replacement.style.whiteSpace = 'pre-wrap';
        field.replaceWith(replacement);
      });

      const exportRoot = document.createElement('div');
      exportRoot.style.position = 'fixed';
      exportRoot.style.left = '-10000px';
      exportRoot.style.top = '0';
      exportRoot.style.width = '1600px';
      exportRoot.style.background = '#fff';
      exportRoot.style.color = '#111';
      exportRoot.style.padding = '16px';

      const title = document.getElementById('main-title')?.value?.trim() || 'Timetable';
      const subtitle = document.querySelector('.subtitle-input')?.value?.trim() || '';
      const weekLabel = document.getElementById('week-label')?.textContent?.trim() || '';

      const heading = document.createElement('div');
      heading.innerHTML = `<div style="font-size:24px;font-weight:700;margin-bottom:4px;">${title}</div><div style="font-size:12px;color:#444;margin-bottom:4px;">${subtitle}</div><div style="font-size:11px;color:#666;margin-bottom:12px;">${weekLabel}</div>`;

      exportRoot.appendChild(heading);
      exportRoot.appendChild(tableClone);
      document.body.appendChild(exportRoot);

      const safeName = title.replace(/[^a-z0-9-_ ]/gi, '').trim().replace(/\s+/g, '_') || 'timetable';

      await window.html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: `${safeName}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        })
        .from(exportRoot)
        .save();

      document.body.removeChild(exportRoot);
    } catch (error) {
      showToast('Unable to export PDF right now');
    } finally {
      if (exportBtn) {
        exportBtn.disabled = false;
        exportBtn.textContent = 'Export PDF';
      }
    }
  }

  function initTimetableViewportControls() {
    refreshFocusDaySelect();
    setTimetableScope(isSmallScreen() ? 'day' : getStoredTimetableScope(), { persistPreference: false });
    renderDayPillSelector();
  }

  function toggleSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const toggleBtn = document.getElementById('settings-toggle-btn');
    if (!panel || !toggleBtn) return;

    const isOpen = panel.classList.toggle('open');
    toggleBtn.textContent = isOpen ? '✕ Close' : '⚙ Customize';
    if (isOpen) {
      panel.scrollTop = 0;
      try {
        const savedTab = localStorage.getItem(CUSTOMIZE_TAB_STORAGE_KEY);
        if (savedTab === 'layout' || savedTab === 'colors' || savedTab === 'data') {
          activeCustomizeTab = savedTab;
        }
      } catch (error) {
        // ignore storage errors
      }
      showCustomizeAdvanced = false;
      applyCustomizePanelFilters();
    } else {
      panel.classList.remove('show-advanced');
    }
    syncEditModeWithCustomizePanel();
    if (activeView === 'calendar') {
      renderCalendar();
    }
  }

  function openHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    if (!drawer) return;
    if (drawer.classList.contains('open')) {
      closeHelpMenu();
      return;
    }
    openHelpMenu();
  }

  function initHelpMenu() {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeHelpMenu();
    });

    initHelpRegionalTime();
  }

  function getDetectedTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  }

  function isValidTimeZone(timeZone) {
    if (!timeZone) return false;
    try {
      new Intl.DateTimeFormat(undefined, { timeZone });
      return true;
    } catch (error) {
      return false;
    }
  }

  function getStoredTimeZonePreference() {
    try {
      const raw = localStorage.getItem(TIMEZONE_STORAGE_KEY);
      if (!raw) return '';
      return isValidTimeZone(raw) ? raw : '';
    } catch (error) {
      return '';
    }
  }

  function getActiveTimeZone() {
    return selectedTimeZone || getDetectedTimeZone();
  }

  function getNowInActiveTimeZone() {
    const timeZone = getActiveTimeZone();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(new Date());

    const partMap = {};
    parts.forEach((part) => {
      if (part.type !== 'literal') {
        partMap[part.type] = part.value;
      }
    });

    return new Date(
      Number(partMap.year),
      Number(partMap.month) - 1,
      Number(partMap.day),
      Number(partMap.hour),
      Number(partMap.minute),
      Number(partMap.second)
    );
  }

  function formatTimeZoneLabel(timeZone) {
    if (!isValidTimeZone(timeZone)) return 'UTC';
    if (timeZone === 'Africa/Johannesburg') return 'South Africa (Johannesburg)';

    const [region, city] = String(timeZone).split('/');
    if (!city) {
      return String(timeZone).replace(/_/g, ' ');
    }

    return `${region.replace(/_/g, ' ')} - ${city.replace(/_/g, ' ')}`;
  }

  function getTimeZoneOptionList() {
    const detected = getDetectedTimeZone();
    const fallbackZones = [
      'UTC', 'Africa/Johannesburg', 'Europe/London', 'Europe/Paris',
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
      'America/Sao_Paulo', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
      'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
    ];

    let zones = [];
    if (typeof Intl.supportedValuesOf === 'function') {
      zones = Intl.supportedValuesOf('timeZone');
    }

    const merged = [detected, ...fallbackZones, ...zones].filter(isValidTimeZone);
    return Array.from(new Set(merged));
  }

  function buildHelpTimeZoneSelect() {
    const select = document.getElementById('help-timezone-select');
    if (!select) return;

    const zones = getTimeZoneOptionList();
    select.innerHTML = '';

    const autoOption = document.createElement('option');
    autoOption.value = '';
    autoOption.textContent = `Auto (${formatTimeZoneLabel(getDetectedTimeZone())})`;
    select.appendChild(autoOption);

    zones.forEach((zone) => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = formatTimeZoneLabel(zone);
      select.appendChild(option);
    });
  }

  function setSelectedTimeZone(timeZone, options = {}) {
    const { save = true } = options;
    selectedTimeZone = isValidTimeZone(timeZone) ? timeZone : '';

    const select = document.getElementById('help-timezone-select');
    if (select) {
      select.value = selectedTimeZone;
    }

    if (save) {
      try {
        if (selectedTimeZone) {
          localStorage.setItem(TIMEZONE_STORAGE_KEY, selectedTimeZone);
        } else {
          localStorage.removeItem(TIMEZONE_STORAGE_KEY);
        }
      } catch (error) {
        // ignore storage errors
      }
    }

    updateHelpRegionalTime();
    updateTodayHighlight();
    updateNowLine();
    renderCalendar();
  }

  function onHelpTimeZoneChange(value) {
    setSelectedTimeZone(value);
  }

  function updateHelpRegionalTime() {
    const timezoneLabel = document.getElementById('help-timezone-label');
    const localTimeLabel = document.getElementById('help-local-time-label');
    if (!timezoneLabel || !localTimeLabel) return;

    const timezone = getActiveTimeZone();
    timezoneLabel.textContent = formatTimeZoneLabel(timezone);

    const now = getNowInActiveTimeZone();
    localTimeLabel.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: getDetectedTimeZone()
    });
  }

  function initHelpRegionalTime() {
    buildHelpTimeZoneSelect();
    setSelectedTimeZone(getStoredTimeZonePreference(), { save: false });
    updateHelpRegionalTime();

    if (helpRegionalTimeTimer) {
      clearInterval(helpRegionalTimeTimer);
    }

    helpRegionalTimeTimer = setInterval(updateHelpRegionalTime, 1000);
  }

  function setAuthMode(mode) {
    const normalizedMode = mode === 'signup' ? 'signup' : 'signin';
    authMode = normalizedMode;

    const title = document.getElementById('app-auth-title');
    const confirmPasswordInput = document.getElementById('app-confirm-password');
    const signInBtn = document.getElementById('signin-btn');
    const signUpBtn = document.getElementById('signup-btn');
    if (!title || !confirmPasswordInput || !signInBtn || !signUpBtn) return;

    if (normalizedMode === 'signup') {
      title.textContent = 'Create your account';
      confirmPasswordInput.style.display = 'block';
      confirmPasswordInput.disabled = false;
      signUpBtn.classList.add('auth-active');
      signInBtn.classList.remove('auth-active');
      return;
    }

    title.textContent = 'Sign in to open your timetable';
    confirmPasswordInput.value = '';
    confirmPasswordInput.style.display = 'none';
    confirmPasswordInput.disabled = true;
    signInBtn.classList.add('auth-active');
    signUpBtn.classList.remove('auth-active');
  }

  function submitAuthByMode() {
    if (authMode === 'signup') {
      appSignUp();
      return;
    }

    appLogin();
  }

  function handleAuthEnter(event) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    submitAuthByMode();
  }

  function getAuthEmailRedirectUrl() {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      return window.location.origin + window.location.pathname;
    }
    if (window.location.protocol === 'file:') {
      return LOCALHOST_AUTH_REDIRECT_URL;
    }
    return null;
  }

  function initBuildBadge() {
    const badge = document.getElementById('build-badge');
    if (!badge) return;
    badge.textContent = `Build ${APP_BUILD_VERSION}`;
  }

  function showToast(message) {
    const toastRoot = document.getElementById('toast-root');
    if (!toastRoot || !message) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    toastRoot.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 2200);
  }

  function resolveActionDialog(confirmed) {
    const dialog = document.getElementById('action-dialog');
    const input = document.getElementById('action-dialog-input');
    if (!dialog) return;

    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden', 'true');

    const resolver = actionDialogResolver;
    actionDialogResolver = null;
    if (resolver) {
      resolver({ confirmed, value: input?.value || '' });
    }
  }

  function openActionDialog(options = {}) {
    const {
      title = 'Confirm action',
      message = '',
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      showInput = false,
      inputValue = '',
      inputPlaceholder = ''
    } = options;

    const dialog = document.getElementById('action-dialog');
    const titleEl = document.getElementById('action-dialog-title');
    const messageEl = document.getElementById('action-dialog-message');
    const input = document.getElementById('action-dialog-input');
    const buttons = dialog?.querySelectorAll('.action-dialog-actions .btn');

    if (!dialog || !titleEl || !messageEl || !input || !buttons || buttons.length < 2) {
      return Promise.resolve({ confirmed: false, value: '' });
    }

    titleEl.textContent = title;
    messageEl.textContent = message;
    buttons[0].textContent = confirmText;
    buttons[1].textContent = cancelText;

    input.classList.toggle('show', showInput);
    input.value = inputValue;
    input.placeholder = inputPlaceholder;

    dialog.classList.add('open');
    dialog.setAttribute('aria-hidden', 'false');

    if (showInput) {
      setTimeout(() => input.focus(), 0);
    }

    return new Promise((resolve) => {
      actionDialogResolver = resolve;
    });
  }

  function toggleQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    const next = !quickAdd.classList.contains('open');
    quickAdd.classList.toggle('open', next);
    quickAdd.setAttribute('aria-hidden', next ? 'false' : 'true');
  }

  function closeQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    quickAdd.classList.remove('open');
    quickAdd.setAttribute('aria-hidden', 'true');
  }

  function quickAddColumn() {
    closeQuickAddActions();
    if (!isAdmin) {
      showToast('Unlock Customize first');
      return;
    }
    addColumn();
    showToast('Column added');
  }

  function quickAddEvent() {
    closeQuickAddActions();
    if (activeView === 'calendar') {
      const date = getNowInActiveTimeZone();
      addCalendarEvent(getIsoDateKey(date));
      showToast('Event editor opened');
      return;
    }
    addRow();
    showToast('Time slot added');
  }

  function openCellEditSheet(inputElement) {
    if (!inputElement || !isSmallScreen()) return;
    const sheet = document.getElementById('cell-edit-sheet');
    const editInput = document.getElementById('cell-edit-input');
    if (!sheet || !editInput) return;

    activeCellEditorInput = inputElement;
    editInput.value = inputElement.value || '';
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    editInput.focus();
  }

  function closeCellEditSheet() {
    const sheet = document.getElementById('cell-edit-sheet');
    if (!sheet) return;
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    activeCellEditorInput = null;
  }

  function saveCellEditSheet() {
    if (!activeCellEditorInput) {
      closeCellEditSheet();
      return;
    }

    const editInput = document.getElementById('cell-edit-input');
    const nextValue = (editInput?.value || '').trim();
    pushHistorySnapshot();
    activeCellEditorInput.value = nextValue;
    applyEventChip(activeCellEditorInput);
    updateNowLine();
    closeCellEditSheet();
    showToast('Cell updated');
  }

  function clearCellEditSheet() {
    const editInput = document.getElementById('cell-edit-input');
    if (editInput) editInput.value = '';
  }

  function toggleCalendarCollapse() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button || !isSmallScreen()) return;

    calendarCollapsedMobile = !panel.classList.contains('calendar-collapsed');
    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  function setCalendarCollapsedForViewport() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button) return;

    if (!isSmallScreen()) {
      panel.classList.remove('calendar-collapsed');
      button.textContent = 'Expand Calendar';
      return;
    }

    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  async function exportTimetablePdf() {
    const exportBtn = document.getElementById('export-pdf-btn');
    const timetable = document.getElementById('timetable');
    if (!timetable) return;

    if (exportBtn) {
      exportBtn.disabled = true;
      exportBtn.textContent = 'Exporting...';
    }

    try {
      if (!window.html2pdf) {
        throw new Error('PDF library unavailable');
      }

      const tableClone = timetable.cloneNode(true);
      tableClone.removeAttribute('id');
      tableClone.style.width = '100%';

      tableClone.querySelectorAll('input, textarea').forEach((field) => {
        const value = (field.value || '').trim();
        const fallback = (field.placeholder || '').trim();
        const text = value || fallback;
        const replacement = document.createElement('div');
        replacement.textContent = text;
        replacement.style.padding = '8px 10px';
        replacement.style.minHeight = '32px';
        replacement.style.fontSize = '11px';
        replacement.style.lineHeight = '1.25';
        replacement.style.wordBreak = 'break-word';
        replacement.style.whiteSpace = 'pre-wrap';
        field.replaceWith(replacement);
      });

      const exportRoot = document.createElement('div');
      exportRoot.style.position = 'fixed';
      exportRoot.style.left = '-10000px';
      exportRoot.style.top = '0';
      exportRoot.style.width = '1600px';
      exportRoot.style.background = '#fff';
      exportRoot.style.color = '#111';
      exportRoot.style.padding = '16px';

      const title = document.getElementById('main-title')?.value?.trim() || 'Timetable';
      const subtitle = document.querySelector('.subtitle-input')?.value?.trim() || '';
      const weekLabel = document.getElementById('week-label')?.textContent?.trim() || '';

      const heading = document.createElement('div');
      heading.innerHTML = `<div style="font-size:24px;font-weight:700;margin-bottom:4px;">${title}</div><div style="font-size:12px;color:#444;margin-bottom:4px;">${subtitle}</div><div style="font-size:11px;color:#666;margin-bottom:12px;">${weekLabel}</div>`;

      exportRoot.appendChild(heading);
      exportRoot.appendChild(tableClone);
      document.body.appendChild(exportRoot);

      const safeName = title.replace(/[^a-z0-9-_ ]/gi, '').trim().replace(/\s+/g, '_') || 'timetable';

      await window.html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: `${safeName}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        })
        .from(exportRoot)
        .save();

      document.body.removeChild(exportRoot);
    } catch (error) {
      showToast('Unable to export PDF right now');
    } finally {
      if (exportBtn) {
        exportBtn.disabled = false;
        exportBtn.textContent = 'Export PDF';
      }
    }
  }

  function initTimetableViewportControls() {
    refreshFocusDaySelect();
    setTimetableScope(isSmallScreen() ? 'day' : getStoredTimetableScope(), { persistPreference: false });
    renderDayPillSelector();
  }

  function toggleSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const toggleBtn = document.getElementById('settings-toggle-btn');
    if (!panel || !toggleBtn) return;

    const isOpen = panel.classList.toggle('open');
    toggleBtn.textContent = isOpen ? '✕ Close' : '⚙ Customize';
    if (isOpen) {
      panel.scrollTop = 0;
      try {
        const savedTab = localStorage.getItem(CUSTOMIZE_TAB_STORAGE_KEY);
        if (savedTab === 'layout' || savedTab === 'colors' || savedTab === 'data') {
          activeCustomizeTab = savedTab;
        }
      } catch (error) {
        // ignore storage errors
      }
      showCustomizeAdvanced = false;
      applyCustomizePanelFilters();
    } else {
      panel.classList.remove('show-advanced');
    }
    syncEditModeWithCustomizePanel();
    if (activeView === 'calendar') {
      renderCalendar();
    }
  }

  function openHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    if (!drawer) return;
    if (drawer.classList.contains('open')) {
      closeHelpMenu();
      return;
    }
    openHelpMenu();
  }

  function initHelpMenu() {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeHelpMenu();
    });

    initHelpRegionalTime();
  }

  function getDetectedTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  }

  function isValidTimeZone(timeZone) {
    if (!timeZone) return false;
    try {
      new Intl.DateTimeFormat(undefined, { timeZone });
      return true;
    } catch (error) {
      return false;
    }
  }

  function getStoredTimeZonePreference() {
    try {
      const raw = localStorage.getItem(TIMEZONE_STORAGE_KEY);
      if (!raw) return '';
      return isValidTimeZone(raw) ? raw : '';
    } catch (error) {
      return '';
    }
  }

  function getActiveTimeZone() {
    return selectedTimeZone || getDetectedTimeZone();
  }

  function getNowInActiveTimeZone() {
    const timeZone = getActiveTimeZone();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(new Date());

    const partMap = {};
    parts.forEach((part) => {
      if (part.type !== 'literal') {
        partMap[part.type] = part.value;
      }
    });

    return new Date(
      Number(partMap.year),
      Number(partMap.month) - 1,
      Number(partMap.day),
      Number(partMap.hour),
      Number(partMap.minute),
      Number(partMap.second)
    );
  }

  function formatTimeZoneLabel(timeZone) {
    if (!isValidTimeZone(timeZone)) return 'UTC';
    if (timeZone === 'Africa/Johannesburg') return 'South Africa (Johannesburg)';

    const [region, city] = String(timeZone).split('/');
    if (!city) {
      return String(timeZone).replace(/_/g, ' ');
    }

    return `${region.replace(/_/g, ' ')} - ${city.replace(/_/g, ' ')}`;
  }

  function getTimeZoneOptionList() {
    const detected = getDetectedTimeZone();
    const fallbackZones = [
      'UTC', 'Africa/Johannesburg', 'Europe/London', 'Europe/Paris',
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
      'America/Sao_Paulo', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
      'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
    ];

    let zones = [];
    if (typeof Intl.supportedValuesOf === 'function') {
      zones = Intl.supportedValuesOf('timeZone');
    }

    const merged = [detected, ...fallbackZones, ...zones].filter(isValidTimeZone);
    return Array.from(new Set(merged));
  }

  function buildHelpTimeZoneSelect() {
    const select = document.getElementById('help-timezone-select');
    if (!select) return;

    const zones = getTimeZoneOptionList();
    select.innerHTML = '';

    const autoOption = document.createElement('option');
    autoOption.value = '';
    autoOption.textContent = `Auto (${formatTimeZoneLabel(getDetectedTimeZone())})`;
    select.appendChild(autoOption);

    zones.forEach((zone) => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = formatTimeZoneLabel(zone);
      select.appendChild(option);
    });
  }

  function setSelectedTimeZone(timeZone, options = {}) {
    const { save = true } = options;
    selectedTimeZone = isValidTimeZone(timeZone) ? timeZone : '';

    const select = document.getElementById('help-timezone-select');
    if (select) {
      select.value = selectedTimeZone;
    }

    if (save) {
      try {
        if (selectedTimeZone) {
          localStorage.setItem(TIMEZONE_STORAGE_KEY, selectedTimeZone);
        } else {
          localStorage.removeItem(TIMEZONE_STORAGE_KEY);
        }
      } catch (error) {
        // ignore storage errors
      }
    }

    updateHelpRegionalTime();
    updateTodayHighlight();
    updateNowLine();
    renderCalendar();
  }

  function onHelpTimeZoneChange(value) {
    setSelectedTimeZone(value);
  }

  function updateHelpRegionalTime() {
    const timezoneLabel = document.getElementById('help-timezone-label');
    const localTimeLabel = document.getElementById('help-local-time-label');
    if (!timezoneLabel || !localTimeLabel) return;

    const timezone = getActiveTimeZone();
    timezoneLabel.textContent = formatTimeZoneLabel(timezone);

    const now = getNowInActiveTimeZone();
    localTimeLabel.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: getDetectedTimeZone()
    });
  }

  function initHelpRegionalTime() {
    buildHelpTimeZoneSelect();
    setSelectedTimeZone(getStoredTimeZonePreference(), { save: false });
    updateHelpRegionalTime();

    if (helpRegionalTimeTimer) {
      clearInterval(helpRegionalTimeTimer);
    }

    helpRegionalTimeTimer = setInterval(updateHelpRegionalTime, 1000);
  }

  function setAuthMode(mode) {
    const normalizedMode = mode === 'signup' ? 'signup' : 'signin';
    authMode = normalizedMode;

    const title = document.getElementById('app-auth-title');
    const confirmPasswordInput = document.getElementById('app-confirm-password');
    const signInBtn = document.getElementById('signin-btn');
    const signUpBtn = document.getElementById('signup-btn');
    if (!title || !confirmPasswordInput || !signInBtn || !signUpBtn) return;

    if (normalizedMode === 'signup') {
      title.textContent = 'Create your account';
      confirmPasswordInput.style.display = 'block';
      confirmPasswordInput.disabled = false;
      signUpBtn.classList.add('auth-active');
      signInBtn.classList.remove('auth-active');
      return;
    }

    title.textContent = 'Sign in to open your timetable';
    confirmPasswordInput.value = '';
    confirmPasswordInput.style.display = 'none';
    confirmPasswordInput.disabled = true;
    signInBtn.classList.add('auth-active');
    signUpBtn.classList.remove('auth-active');
  }

  function submitAuthByMode() {
    if (authMode === 'signup') {
      appSignUp();
      return;
    }

    appLogin();
  }

  function handleAuthEnter(event) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    submitAuthByMode();
  }

  function getAuthEmailRedirectUrl() {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      return window.location.origin + window.location.pathname;
    }
    if (window.location.protocol === 'file:') {
      return LOCALHOST_AUTH_REDIRECT_URL;
    }
    return null;
  }

  function initBuildBadge() {
    const badge = document.getElementById('build-badge');
    if (!badge) return;
    badge.textContent = `Build ${APP_BUILD_VERSION}`;
  }

  function showToast(message) {
    const toastRoot = document.getElementById('toast-root');
    if (!toastRoot || !message) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    toastRoot.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 2200);
  }

  function resolveActionDialog(confirmed) {
    const dialog = document.getElementById('action-dialog');
    const input = document.getElementById('action-dialog-input');
    if (!dialog) return;

    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden', 'true');

    const resolver = actionDialogResolver;
    actionDialogResolver = null;
    if (resolver) {
      resolver({ confirmed, value: input?.value || '' });
    }
  }

  function openActionDialog(options = {}) {
    const {
      title = 'Confirm action',
      message = '',
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      showInput = false,
      inputValue = '',
      inputPlaceholder = ''
    } = options;

    const dialog = document.getElementById('action-dialog');
    const titleEl = document.getElementById('action-dialog-title');
    const messageEl = document.getElementById('action-dialog-message');
    const input = document.getElementById('action-dialog-input');
    const buttons = dialog?.querySelectorAll('.action-dialog-actions .btn');

    if (!dialog || !titleEl || !messageEl || !input || !buttons || buttons.length < 2) {
      return Promise.resolve({ confirmed: false, value: '' });
    }

    titleEl.textContent = title;
    messageEl.textContent = message;
    buttons[0].textContent = confirmText;
    buttons[1].textContent = cancelText;

    input.classList.toggle('show', showInput);
    input.value = inputValue;
    input.placeholder = inputPlaceholder;

    dialog.classList.add('open');
    dialog.setAttribute('aria-hidden', 'false');

    if (showInput) {
      setTimeout(() => input.focus(), 0);
    }

    return new Promise((resolve) => {
      actionDialogResolver = resolve;
    });
  }

  function toggleQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    const next = !quickAdd.classList.contains('open');
    quickAdd.classList.toggle('open', next);
    quickAdd.setAttribute('aria-hidden', next ? 'false' : 'true');
  }

  function closeQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    quickAdd.classList.remove('open');
    quickAdd.setAttribute('aria-hidden', 'true');
  }

  function quickAddColumn() {
    closeQuickAddActions();
    if (!isAdmin) {
      showToast('Unlock Customize first');
      return;
    }
    addColumn();
    showToast('Column added');
  }

  function quickAddEvent() {
    closeQuickAddActions();
    if (activeView === 'calendar') {
      const date = getNowInActiveTimeZone();
      addCalendarEvent(getIsoDateKey(date));
      showToast('Event editor opened');
      return;
    }
    addRow();
    showToast('Time slot added');
  }

  function openCellEditSheet(inputElement) {
    if (!inputElement || !isSmallScreen()) return;
    const sheet = document.getElementById('cell-edit-sheet');
    const editInput = document.getElementById('cell-edit-input');
    if (!sheet || !editInput) return;

    activeCellEditorInput = inputElement;
    editInput.value = inputElement.value || '';
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    editInput.focus();
  }

  function closeCellEditSheet() {
    const sheet = document.getElementById('cell-edit-sheet');
    if (!sheet) return;
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    activeCellEditorInput = null;
  }

  function saveCellEditSheet() {
    if (!activeCellEditorInput) {
      closeCellEditSheet();
      return;
    }

    const editInput = document.getElementById('cell-edit-input');
    const nextValue = (editInput?.value || '').trim();
    pushHistorySnapshot();
    activeCellEditorInput.value = nextValue;
    applyEventChip(activeCellEditorInput);
    updateNowLine();
    closeCellEditSheet();
    showToast('Cell updated');
  }

  function clearCellEditSheet() {
    const editInput = document.getElementById('cell-edit-input');
    if (editInput) editInput.value = '';
  }

  function toggleCalendarCollapse() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button || !isSmallScreen()) return;

    calendarCollapsedMobile = !panel.classList.contains('calendar-collapsed');
    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  function setCalendarCollapsedForViewport() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button) return;

    if (!isSmallScreen()) {
      panel.classList.remove('calendar-collapsed');
      button.textContent = 'Expand Calendar';
      return;
    }

    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  async function exportTimetablePdf() {
    const exportBtn = document.getElementById('export-pdf-btn');
    const timetable = document.getElementById('timetable');
    if (!timetable) return;

    if (exportBtn) {
      exportBtn.disabled = true;
      exportBtn.textContent = 'Exporting...';
    }

    try {
      if (!window.html2pdf) {
        throw new Error('PDF library unavailable');
      }

      const tableClone = timetable.cloneNode(true);
      tableClone.removeAttribute('id');
      tableClone.style.width = '100%';

      tableClone.querySelectorAll('input, textarea').forEach((field) => {
        const value = (field.value || '').trim();
        const fallback = (field.placeholder || '').trim();
        const text = value || fallback;
        const replacement = document.createElement('div');
        replacement.textContent = text;
        replacement.style.padding = '8px 10px';
        replacement.style.minHeight = '32px';
        replacement.style.fontSize = '11px';
        replacement.style.lineHeight = '1.25';
        replacement.style.wordBreak = 'break-word';
        replacement.style.whiteSpace = 'pre-wrap';
        field.replaceWith(replacement);
      });

      const exportRoot = document.createElement('div');
      exportRoot.style.position = 'fixed';
      exportRoot.style.left = '-10000px';
      exportRoot.style.top = '0';
      exportRoot.style.width = '1600px';
      exportRoot.style.background = '#fff';
      exportRoot.style.color = '#111';
      exportRoot.style.padding = '16px';

      const title = document.getElementById('main-title')?.value?.trim() || 'Timetable';
      const subtitle = document.querySelector('.subtitle-input')?.value?.trim() || '';
      const weekLabel = document.getElementById('week-label')?.textContent?.trim() || '';

      const heading = document.createElement('div');
      heading.innerHTML = `<div style="font-size:24px;font-weight:700;margin-bottom:4px;">${title}</div><div style="font-size:12px;color:#444;margin-bottom:4px;">${subtitle}</div><div style="font-size:11px;color:#666;margin-bottom:12px;">${weekLabel}</div>`;

      exportRoot.appendChild(heading);
      exportRoot.appendChild(tableClone);
      document.body.appendChild(exportRoot);

      const safeName = title.replace(/[^a-z0-9-_ ]/gi, '').trim().replace(/\s+/g, '_') || 'timetable';

      await window.html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: `${safeName}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        })
        .from(exportRoot)
        .save();

      document.body.removeChild(exportRoot);
    } catch (error) {
      showToast('Unable to export PDF right now');
    } finally {
      if (exportBtn) {
        exportBtn.disabled = false;
        exportBtn.textContent = 'Export PDF';
      }
    }
  }

  function initTimetableViewportControls() {
    refreshFocusDaySelect();
    setTimetableScope(isSmallScreen() ? 'day' : getStoredTimetableScope(), { persistPreference: false });
    renderDayPillSelector();
  }

  function toggleSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const toggleBtn = document.getElementById('settings-toggle-btn');
    if (!panel || !toggleBtn) return;

    const isOpen = panel.classList.toggle('open');
    toggleBtn.textContent = isOpen ? '✕ Close' : '⚙ Customize';
    if (isOpen) {
      panel.scrollTop = 0;
      try {
        const savedTab = localStorage.getItem(CUSTOMIZE_TAB_STORAGE_KEY);
        if (savedTab === 'layout' || savedTab === 'colors' || savedTab === 'data') {
          activeCustomizeTab = savedTab;
        }
      } catch (error) {
        // ignore storage errors
      }
      showCustomizeAdvanced = false;
      applyCustomizePanelFilters();
    } else {
      panel.classList.remove('show-advanced');
    }
    syncEditModeWithCustomizePanel();
    if (activeView === 'calendar') {
      renderCalendar();
    }
  }

  function openHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    if (!drawer) return;
    if (drawer.classList.contains('open')) {
      closeHelpMenu();
      return;
    }
    openHelpMenu();
  }

  function initHelpMenu() {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeHelpMenu();
    });

    initHelpRegionalTime();
  }

  function getDetectedTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  }

  function isValidTimeZone(timeZone) {
    if (!timeZone) return false;
    try {
      new Intl.DateTimeFormat(undefined, { timeZone });
      return true;
    } catch (error) {
      return false;
    }
  }

  function getStoredTimeZonePreference() {
    try {
      const raw = localStorage.getItem(TIMEZONE_STORAGE_KEY);
      if (!raw) return '';
      return isValidTimeZone(raw) ? raw : '';
    } catch (error) {
      return '';
    }
  }

  function getActiveTimeZone() {
    return selectedTimeZone || getDetectedTimeZone();
  }

  function getNowInActiveTimeZone() {
    const timeZone = getActiveTimeZone();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(new Date());

    const partMap = {};
    parts.forEach((part) => {
      if (part.type !== 'literal') {
        partMap[part.type] = part.value;
      }
    });

    return new Date(
      Number(partMap.year),
      Number(partMap.month) - 1,
      Number(partMap.day),
      Number(partMap.hour),
      Number(partMap.minute),
      Number(partMap.second)
    );
  }

  function formatTimeZoneLabel(timeZone) {
    if (!isValidTimeZone(timeZone)) return 'UTC';
    if (timeZone === 'Africa/Johannesburg') return 'South Africa (Johannesburg)';

    const [region, city] = String(timeZone).split('/');
    if (!city) {
      return String(timeZone).replace(/_/g, ' ');
    }

    return `${region.replace(/_/g, ' ')} - ${city.replace(/_/g, ' ')}`;
  }

  function getTimeZoneOptionList() {
    const detected = getDetectedTimeZone();
    const fallbackZones = [
      'UTC', 'Africa/Johannesburg', 'Europe/London', 'Europe/Paris',
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
      'America/Sao_Paulo', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
      'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
    ];

    let zones = [];
    if (typeof Intl.supportedValuesOf === 'function') {
      zones = Intl.supportedValuesOf('timeZone');
    }

    const merged = [detected, ...fallbackZones, ...zones].filter(isValidTimeZone);
    return Array.from(new Set(merged));
  }

  function buildHelpTimeZoneSelect() {
    const select = document.getElementById('help-timezone-select');
    if (!select) return;

    const zones = getTimeZoneOptionList();
    select.innerHTML = '';

    const autoOption = document.createElement('option');
    autoOption.value = '';
    autoOption.textContent = `Auto (${formatTimeZoneLabel(getDetectedTimeZone())})`;
    select.appendChild(autoOption);

    zones.forEach((zone) => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = formatTimeZoneLabel(zone);
      select.appendChild(option);
    });
  }

  function setSelectedTimeZone(timeZone, options = {}) {
    const { save = true } = options;
    selectedTimeZone = isValidTimeZone(timeZone) ? timeZone : '';

    const select = document.getElementById('help-timezone-select');
    if (select) {
      select.value = selectedTimeZone;
    }

    if (save) {
      try {
        if (selectedTimeZone) {
          localStorage.setItem(TIMEZONE_STORAGE_KEY, selectedTimeZone);
        } else {
          localStorage.removeItem(TIMEZONE_STORAGE_KEY);
        }
      } catch (error) {
        // ignore storage errors
      }
    }

    updateHelpRegionalTime();
    updateTodayHighlight();
    updateNowLine();
    renderCalendar();
  }

  function onHelpTimeZoneChange(value) {
    setSelectedTimeZone(value);
  }

  function updateHelpRegionalTime() {
    const timezoneLabel = document.getElementById('help-timezone-label');
    const localTimeLabel = document.getElementById('help-local-time-label');
    if (!timezoneLabel || !localTimeLabel) return;

    const timezone = getActiveTimeZone();
    timezoneLabel.textContent = formatTimeZoneLabel(timezone);

    const now = getNowInActiveTimeZone();
    localTimeLabel.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: getDetectedTimeZone()
    });
  }

  function initHelpRegionalTime() {
    buildHelpTimeZoneSelect();
    setSelectedTimeZone(getStoredTimeZonePreference(), { save: false });
    updateHelpRegionalTime();

    if (helpRegionalTimeTimer) {
      clearInterval(helpRegionalTimeTimer);
    }

    helpRegionalTimeTimer = setInterval(updateHelpRegionalTime, 1000);
  }

  function setAuthMode(mode) {
    const normalizedMode = mode === 'signup' ? 'signup' : 'signin';
    authMode = normalizedMode;

    const title = document.getElementById('app-auth-title');
    const confirmPasswordInput = document.getElementById('app-confirm-password');
    const signInBtn = document.getElementById('signin-btn');
    const signUpBtn = document.getElementById('signup-btn');
    if (!title || !confirmPasswordInput || !signInBtn || !signUpBtn) return;

    if (normalizedMode === 'signup') {
      title.textContent = 'Create your account';
      confirmPasswordInput.style.display = 'block';
      confirmPasswordInput.disabled = false;
      signUpBtn.classList.add('auth-active');
      signInBtn.classList.remove('auth-active');
      return;
    }

    title.textContent = 'Sign in to open your timetable';
    confirmPasswordInput.value = '';
    confirmPasswordInput.style.display = 'none';
    confirmPasswordInput.disabled = true;
    signInBtn.classList.add('auth-active');
    signUpBtn.classList.remove('auth-active');
  }

  function submitAuthByMode() {
    if (authMode === 'signup') {
      appSignUp();
      return;
    }

    appLogin();
  }

  function handleAuthEnter(event) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    submitAuthByMode();
  }

  function getAuthEmailRedirectUrl() {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      return window.location.origin + window.location.pathname;
    }
    if (window.location.protocol === 'file:') {
      return LOCALHOST_AUTH_REDIRECT_URL;
    }
    return null;
  }

  function initBuildBadge() {
    const badge = document.getElementById('build-badge');
    if (!badge) return;
    badge.textContent = `Build ${APP_BUILD_VERSION}`;
  }

  function showToast(message) {
    const toastRoot = document.getElementById('toast-root');
    if (!toastRoot || !message) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    toastRoot.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 2200);
  }

  function resolveActionDialog(confirmed) {
    const dialog = document.getElementById('action-dialog');
    const input = document.getElementById('action-dialog-input');
    if (!dialog) return;

    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden', 'true');

    const resolver = actionDialogResolver;
    actionDialogResolver = null;
    if (resolver) {
      resolver({ confirmed, value: input?.value || '' });
    }
  }

  function openActionDialog(options = {}) {
    const {
      title = 'Confirm action',
      message = '',
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      showInput = false,
      inputValue = '',
      inputPlaceholder = ''
    } = options;

    const dialog = document.getElementById('action-dialog');
    const titleEl = document.getElementById('action-dialog-title');
    const messageEl = document.getElementById('action-dialog-message');
    const input = document.getElementById('action-dialog-input');
    const buttons = dialog?.querySelectorAll('.action-dialog-actions .btn');

    if (!dialog || !titleEl || !messageEl || !input || !buttons || buttons.length < 2) {
      return Promise.resolve({ confirmed: false, value: '' });
    }

    titleEl.textContent = title;
    messageEl.textContent = message;
    buttons[0].textContent = confirmText;
    buttons[1].textContent = cancelText;

    input.classList.toggle('show', showInput);
    input.value = inputValue;
    input.placeholder = inputPlaceholder;

    dialog.classList.add('open');
    dialog.setAttribute('aria-hidden', 'false');

    if (showInput) {
      setTimeout(() => input.focus(), 0);
    }

    return new Promise((resolve) => {
      actionDialogResolver = resolve;
    });
  }

  function toggleQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    const next = !quickAdd.classList.contains('open');
    quickAdd.classList.toggle('open', next);
    quickAdd.setAttribute('aria-hidden', next ? 'false' : 'true');
  }

  function closeQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    quickAdd.classList.remove('open');
    quickAdd.setAttribute('aria-hidden', 'true');
  }

  function quickAddColumn() {
    closeQuickAddActions();
    if (!isAdmin) {
      showToast('Unlock Customize first');
      return;
    }
    addColumn();
    showToast('Column added');
  }

  function quickAddEvent() {
    closeQuickAddActions();
    if (activeView === 'calendar') {
      const date = getNowInActiveTimeZone();
      addCalendarEvent(getIsoDateKey(date));
      showToast('Event editor opened');
      return;
    }
    addRow();
    showToast('Time slot added');
  }

  function openCellEditSheet(inputElement) {
    if (!inputElement || !isSmallScreen()) return;
    const sheet = document.getElementById('cell-edit-sheet');
    const editInput = document.getElementById('cell-edit-input');
    if (!sheet || !editInput) return;

    activeCellEditorInput = inputElement;
    editInput.value = inputElement.value || '';
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    editInput.focus();
  }

  function closeCellEditSheet() {
    const sheet = document.getElementById('cell-edit-sheet');
    if (!sheet) return;
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    activeCellEditorInput = null;
  }

  function saveCellEditSheet() {
    if (!activeCellEditorInput) {
      closeCellEditSheet();
      return;
    }

    const editInput = document.getElementById('cell-edit-input');
    const nextValue = (editInput?.value || '').trim();
    pushHistorySnapshot();
    activeCellEditorInput.value = nextValue;
    applyEventChip(activeCellEditorInput);
    updateNowLine();
    closeCellEditSheet();
    showToast('Cell updated');
  }

  function clearCellEditSheet() {
    const editInput = document.getElementById('cell-edit-input');
    if (editInput) editInput.value = '';
  }

  function toggleCalendarCollapse() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button || !isSmallScreen()) return;

    calendarCollapsedMobile = !panel.classList.contains('calendar-collapsed');
    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  function setCalendarCollapsedForViewport() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button) return;

    if (!isSmallScreen()) {
      panel.classList.remove('calendar-collapsed');
      button.textContent = 'Expand Calendar';
      return;
    }

    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  async function exportTimetablePdf() {
    const exportBtn = document.getElementById('export-pdf-btn');
    const timetable = document.getElementById('timetable');
    if (!timetable) return;

    if (exportBtn) {
      exportBtn.disabled = true;
      exportBtn.textContent = 'Exporting...';
    }

    try {
      if (!window.html2pdf) {
        throw new Error('PDF library unavailable');
      }

      const tableClone = timetable.cloneNode(true);
      tableClone.removeAttribute('id');
      tableClone.style.width = '100%';

      tableClone.querySelectorAll('input, textarea').forEach((field) => {
        const value = (field.value || '').trim();
        const fallback = (field.placeholder || '').trim();
        const text = value || fallback;
        const replacement = document.createElement('div');
        replacement.textContent = text;
        replacement.style.padding = '8px 10px';
        replacement.style.minHeight = '32px';
        replacement.style.fontSize = '11px';
        replacement.style.lineHeight = '1.25';
        replacement.style.wordBreak = 'break-word';
        replacement.style.whiteSpace = 'pre-wrap';
        field.replaceWith(replacement);
      });

      const exportRoot = document.createElement('div');
      exportRoot.style.position = 'fixed';
      exportRoot.style.left = '-10000px';
      exportRoot.style.top = '0';
      exportRoot.style.width = '1600px';
      exportRoot.style.background = '#fff';
      exportRoot.style.color = '#111';
      exportRoot.style.padding = '16px';

      const title = document.getElementById('main-title')?.value?.trim() || 'Timetable';
      const subtitle = document.querySelector('.subtitle-input')?.value?.trim() || '';
      const weekLabel = document.getElementById('week-label')?.textContent?.trim() || '';

      const heading = document.createElement('div');
      heading.innerHTML = `<div style="font-size:24px;font-weight:700;margin-bottom:4px;">${title}</div><div style="font-size:12px;color:#444;margin-bottom:4px;">${subtitle}</div><div style="font-size:11px;color:#666;margin-bottom:12px;">${weekLabel}</div>`;

      exportRoot.appendChild(heading);
      exportRoot.appendChild(tableClone);
      document.body.appendChild(exportRoot);

      const safeName = title.replace(/[^a-z0-9-_ ]/gi, '').trim().replace(/\s+/g, '_') || 'timetable';

      await window.html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: `${safeName}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        })
        .from(exportRoot)
        .save();

      document.body.removeChild(exportRoot);
    } catch (error) {
      showToast('Unable to export PDF right now');
    } finally {
      if (exportBtn) {
        exportBtn.disabled = false;
        exportBtn.textContent = 'Export PDF';
      }
    }
  }

  function initTimetableViewportControls() {
    refreshFocusDaySelect();
    setTimetableScope(isSmallScreen() ? 'day' : getStoredTimetableScope(), { persistPreference: false });
    renderDayPillSelector();
  }

  function toggleSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const toggleBtn = document.getElementById('settings-toggle-btn');
    if (!panel || !toggleBtn) return;

    const isOpen = panel.classList.toggle('open');
    toggleBtn.textContent = isOpen ? '✕ Close' : '⚙ Customize';
    if (isOpen) {
      panel.scrollTop = 0;
      try {
        const savedTab = localStorage.getItem(CUSTOMIZE_TAB_STORAGE_KEY);
        if (savedTab === 'layout' || savedTab === 'colors' || savedTab === 'data') {
          activeCustomizeTab = savedTab;
        }
      } catch (error) {
        // ignore storage errors
      }
      showCustomizeAdvanced = false;
      applyCustomizePanelFilters();
    } else {
      panel.classList.remove('show-advanced');
    }
    syncEditModeWithCustomizePanel();
    if (activeView === 'calendar') {
      renderCalendar();
    }
  }

  function openHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    if (!drawer) return;
    if (drawer.classList.contains('open')) {
      closeHelpMenu();
      return;
    }
    openHelpMenu();
  }

  function initHelpMenu() {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeHelpMenu();
    });

    initHelpRegionalTime();
  }

  function getDetectedTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  }

  function isValidTimeZone(timeZone) {
    if (!timeZone) return false;
    try {
      new Intl.DateTimeFormat(undefined, { timeZone });
      return true;
    } catch (error) {
      return false;
    }
  }

  function getStoredTimeZonePreference() {
    try {
      const raw = localStorage.getItem(TIMEZONE_STORAGE_KEY);
      if (!raw) return '';
      return isValidTimeZone(raw) ? raw : '';
    } catch (error) {
      return '';
    }
  }

  function getActiveTimeZone() {
    return selectedTimeZone || getDetectedTimeZone();
  }

  function getNowInActiveTimeZone() {
    const timeZone = getActiveTimeZone();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(new Date());

    const partMap = {};
    parts.forEach((part) => {
      if (part.type !== 'literal') {
        partMap[part.type] = part.value;
      }
    });

    return new Date(
      Number(partMap.year),
      Number(partMap.month) - 1,
      Number(partMap.day),
      Number(partMap.hour),
      Number(partMap.minute),
      Number(partMap.second)
    );
  }

  function formatTimeZoneLabel(timeZone) {
    if (!isValidTimeZone(timeZone)) return 'UTC';
    if (timeZone === 'Africa/Johannesburg') return 'South Africa (Johannesburg)';

    const [region, city] = String(timeZone).split('/');
    if (!city) {
      return String(timeZone).replace(/_/g, ' ');
    }

    return `${region.replace(/_/g, ' ')} - ${city.replace(/_/g, ' ')}`;
  }

  function getTimeZoneOptionList() {
    const detected = getDetectedTimeZone();
    const fallbackZones = [
      'UTC', 'Africa/Johannesburg', 'Europe/London', 'Europe/Paris',
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
      'America/Sao_Paulo', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
      'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
    ];

    let zones = [];
    if (typeof Intl.supportedValuesOf === 'function') {
      zones = Intl.supportedValuesOf('timeZone');
    }

    const merged = [detected, ...fallbackZones, ...zones].filter(isValidTimeZone);
    return Array.from(new Set(merged));
  }

  function buildHelpTimeZoneSelect() {
    const select = document.getElementById('help-timezone-select');
    if (!select) return;

    const zones = getTimeZoneOptionList();
    select.innerHTML = '';

    const autoOption = document.createElement('option');
    autoOption.value = '';
    autoOption.textContent = `Auto (${formatTimeZoneLabel(getDetectedTimeZone())})`;
    select.appendChild(autoOption);

    zones.forEach((zone) => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = formatTimeZoneLabel(zone);
      select.appendChild(option);
    });
  }

  function setSelectedTimeZone(timeZone, options = {}) {
    const { save = true } = options;
    selectedTimeZone = isValidTimeZone(timeZone) ? timeZone : '';

    const select = document.getElementById('help-timezone-select');
    if (select) {
      select.value = selectedTimeZone;
    }

    if (save) {
      try {
        if (selectedTimeZone) {
          localStorage.setItem(TIMEZONE_STORAGE_KEY, selectedTimeZone);
        } else {
          localStorage.removeItem(TIMEZONE_STORAGE_KEY);
        }
      } catch (error) {
        // ignore storage errors
      }
    }

    updateHelpRegionalTime();
    updateTodayHighlight();
    updateNowLine();
    renderCalendar();
  }

  function onHelpTimeZoneChange(value) {
    setSelectedTimeZone(value);
  }

  function updateHelpRegionalTime() {
    const timezoneLabel = document.getElementById('help-timezone-label');
    const localTimeLabel = document.getElementById('help-local-time-label');
    if (!timezoneLabel || !localTimeLabel) return;

    const timezone = getActiveTimeZone();
    timezoneLabel.textContent = formatTimeZoneLabel(timezone);

    const now = getNowInActiveTimeZone();
    localTimeLabel.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: getDetectedTimeZone()
    });
  }

  function initHelpRegionalTime() {
    buildHelpTimeZoneSelect();
    setSelectedTimeZone(getStoredTimeZonePreference(), { save: false });
    updateHelpRegionalTime();

    if (helpRegionalTimeTimer) {
      clearInterval(helpRegionalTimeTimer);
    }

    helpRegionalTimeTimer = setInterval(updateHelpRegionalTime, 1000);
  }

  function setAuthMode(mode) {
    const normalizedMode = mode === 'signup' ? 'signup' : 'signin';
    authMode = normalizedMode;

    const title = document.getElementById('app-auth-title');
    const confirmPasswordInput = document.getElementById('app-confirm-password');
    const signInBtn = document.getElementById('signin-btn');
    const signUpBtn = document.getElementById('signup-btn');
    if (!title || !confirmPasswordInput || !signInBtn || !signUpBtn) return;

    if (normalizedMode === 'signup') {
      title.textContent = 'Create your account';
      confirmPasswordInput.style.display = 'block';
      confirmPasswordInput.disabled = false;
      signUpBtn.classList.add('auth-active');
      signInBtn.classList.remove('auth-active');
      return;
    }

    title.textContent = 'Sign in to open your timetable';
    confirmPasswordInput.value = '';
    confirmPasswordInput.style.display = 'none';
    confirmPasswordInput.disabled = true;
    signInBtn.classList.add('auth-active');
    signUpBtn.classList.remove('auth-active');
  }

  function submitAuthByMode() {
    if (authMode === 'signup') {
      appSignUp();
      return;
    }

    appLogin();
  }

  function handleAuthEnter(event) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    submitAuthByMode();
  }

  function getAuthEmailRedirectUrl() {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      return window.location.origin + window.location.pathname;
    }
    if (window.location.protocol === 'file:') {
      return LOCALHOST_AUTH_REDIRECT_URL;
    }
    return null;
  }

  function initBuildBadge() {
    const badge = document.getElementById('build-badge');
    if (!badge) return;
    badge.textContent = `Build ${APP_BUILD_VERSION}`;
  }

  function showToast(message) {
    const toastRoot = document.getElementById('toast-root');
    if (!toastRoot || !message) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    toastRoot.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 2200);
  }

  function resolveActionDialog(confirmed) {
    const dialog = document.getElementById('action-dialog');
    const input = document.getElementById('action-dialog-input');
    if (!dialog) return;

    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden', 'true');

    const resolver = actionDialogResolver;
    actionDialogResolver = null;
    if (resolver) {
      resolver({ confirmed, value: input?.value || '' });
    }
  }

  function openActionDialog(options = {}) {
    const {
      title = 'Confirm action',
      message = '',
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      showInput = false,
      inputValue = '',
      inputPlaceholder = ''
    } = options;

    const dialog = document.getElementById('action-dialog');
    const titleEl = document.getElementById('action-dialog-title');
    const messageEl = document.getElementById('action-dialog-message');
    const input = document.getElementById('action-dialog-input');
    const buttons = dialog?.querySelectorAll('.action-dialog-actions .btn');

    if (!dialog || !titleEl || !messageEl || !input || !buttons || buttons.length < 2) {
      return Promise.resolve({ confirmed: false, value: '' });
    }

    titleEl.textContent = title;
    messageEl.textContent = message;
    buttons[0].textContent = confirmText;
    buttons[1].textContent = cancelText;

    input.classList.toggle('show', showInput);
    input.value = inputValue;
    input.placeholder = inputPlaceholder;

    dialog.classList.add('open');
    dialog.setAttribute('aria-hidden', 'false');

    if (showInput) {
      setTimeout(() => input.focus(), 0);
    }

    return new Promise((resolve) => {
      actionDialogResolver = resolve;
    });
  }

  function toggleQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    const next = !quickAdd.classList.contains('open');
    quickAdd.classList.toggle('open', next);
    quickAdd.setAttribute('aria-hidden', next ? 'false' : 'true');
  }

  function closeQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    quickAdd.classList.remove('open');
    quickAdd.setAttribute('aria-hidden', 'true');
  }

  function quickAddColumn() {
    closeQuickAddActions();
    if (!isAdmin) {
      showToast('Unlock Customize first');
      return;
    }
    addColumn();
    showToast('Column added');
  }

  function quickAddEvent() {
    closeQuickAddActions();
    if (activeView === 'calendar') {
      const date = getNowInActiveTimeZone();
      addCalendarEvent(getIsoDateKey(date));
      showToast('Event editor opened');
      return;
    }
    addRow();
    showToast('Time slot added');
  }

  function openCellEditSheet(inputElement) {
    if (!inputElement || !isSmallScreen()) return;
    const sheet = document.getElementById('cell-edit-sheet');
    const editInput = document.getElementById('cell-edit-input');
    if (!sheet || !editInput) return;

    activeCellEditorInput = inputElement;
    editInput.value = inputElement.value || '';
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    editInput.focus();
  }

  function closeCellEditSheet() {
    const sheet = document.getElementById('cell-edit-sheet');
    if (!sheet) return;
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    activeCellEditorInput = null;
  }

  function saveCellEditSheet() {
    if (!activeCellEditorInput) {
      closeCellEditSheet();
      return;
    }

    const editInput = document.getElementById('cell-edit-input');
    const nextValue = (editInput?.value || '').trim();
    pushHistorySnapshot();
    activeCellEditorInput.value = nextValue;
    applyEventChip(activeCellEditorInput);
    updateNowLine();
    closeCellEditSheet();
    showToast('Cell updated');
  }

  function clearCellEditSheet() {
    const editInput = document.getElementById('cell-edit-input');
    if (editInput) editInput.value = '';
  }

  function toggleCalendarCollapse() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button || !isSmallScreen()) return;

    calendarCollapsedMobile = !panel.classList.contains('calendar-collapsed');
    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  function setCalendarCollapsedForViewport() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button) return;

    if (!isSmallScreen()) {
      panel.classList.remove('calendar-collapsed');
      button.textContent = 'Expand Calendar';
      return;
    }

    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  async function exportTimetablePdf() {
    const exportBtn = document.getElementById('export-pdf-btn');
    const timetable = document.getElementById('timetable');
    if (!timetable) return;

    if (exportBtn) {
      exportBtn.disabled = true;
      exportBtn.textContent = 'Exporting...';
    }

    try {
      if (!window.html2pdf) {
        throw new Error('PDF library unavailable');
      }

      const tableClone = timetable.cloneNode(true);
      tableClone.removeAttribute('id');
      tableClone.style.width = '100%';

      tableClone.querySelectorAll('input, textarea').forEach((field) => {
        const value = (field.value || '').trim();
        const fallback = (field.placeholder || '').trim();
        const text = value || fallback;
        const replacement = document.createElement('div');
        replacement.textContent = text;
        replacement.style.padding = '8px 10px';
        replacement.style.minHeight = '32px';
        replacement.style.fontSize = '11px';
        replacement.style.lineHeight = '1.25';
        replacement.style.wordBreak = 'break-word';
        replacement.style.whiteSpace = 'pre-wrap';
        field.replaceWith(replacement);
      });

      const exportRoot = document.createElement('div');
      exportRoot.style.position = 'fixed';
      exportRoot.style.left = '-10000px';
      exportRoot.style.top = '0';
      exportRoot.style.width = '1600px';
      exportRoot.style.background = '#fff';
      exportRoot.style.color = '#111';
      exportRoot.style.padding = '16px';

      const title = document.getElementById('main-title')?.value?.trim() || 'Timetable';
      const subtitle = document.querySelector('.subtitle-input')?.value?.trim() || '';
      const weekLabel = document.getElementById('week-label')?.textContent?.trim() || '';

      const heading = document.createElement('div');
      heading.innerHTML = `<div style="font-size:24px;font-weight:700;margin-bottom:4px;">${title}</div><div style="font-size:12px;color:#444;margin-bottom:4px;">${subtitle}</div><div style="font-size:11px;color:#666;margin-bottom:12px;">${weekLabel}</div>`;

      exportRoot.appendChild(heading);
      exportRoot.appendChild(tableClone);
      document.body.appendChild(exportRoot);

      const safeName = title.replace(/[^a-z0-9-_ ]/gi, '').trim().replace(/\s+/g, '_') || 'timetable';

      await window.html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: `${safeName}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        })
        .from(exportRoot)
        .save();

      document.body.removeChild(exportRoot);
    } catch (error) {
      showToast('Unable to export PDF right now');
    } finally {
      if (exportBtn) {
        exportBtn.disabled = false;
        exportBtn.textContent = 'Export PDF';
      }
    }
  }

  function initTimetableViewportControls() {
    refreshFocusDaySelect();
    setTimetableScope(isSmallScreen() ? 'day' : getStoredTimetableScope(), { persistPreference: false });
    renderDayPillSelector();
  }

  function toggleSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const toggleBtn = document.getElementById('settings-toggle-btn');
    if (!panel || !toggleBtn) return;

    const isOpen = panel.classList.toggle('open');
    toggleBtn.textContent = isOpen ? '✕ Close' : '⚙ Customize';
    if (isOpen) {
      panel.scrollTop = 0;
      try {
        const savedTab = localStorage.getItem(CUSTOMIZE_TAB_STORAGE_KEY);
        if (savedTab === 'layout' || savedTab === 'colors' || savedTab === 'data') {
          activeCustomizeTab = savedTab;
        }
      } catch (error) {
        // ignore storage errors
      }
      showCustomizeAdvanced = false;
      applyCustomizePanelFilters();
    } else {
      panel.classList.remove('show-advanced');
    }
    syncEditModeWithCustomizePanel();
    if (activeView === 'calendar') {
      renderCalendar();
    }
  }

  function openHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    if (!drawer) return;
    if (drawer.classList.contains('open')) {
      closeHelpMenu();
      return;
    }
    openHelpMenu();
  }

  function initHelpMenu() {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeHelpMenu();
    });

    initHelpRegionalTime();
  }

  function getDetectedTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  }

  function isValidTimeZone(timeZone) {
    if (!timeZone) return false;
    try {
      new Intl.DateTimeFormat(undefined, { timeZone });
      return true;
    } catch (error) {
      return false;
    }
  }

  function getStoredTimeZonePreference() {
    try {
      const raw = localStorage.getItem(TIMEZONE_STORAGE_KEY);
      if (!raw) return '';
      return isValidTimeZone(raw) ? raw : '';
    } catch (error) {
      return '';
    }
  }

  function getActiveTimeZone() {
    return selectedTimeZone || getDetectedTimeZone();
  }

  function getNowInActiveTimeZone() {
    const timeZone = getActiveTimeZone();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(new Date());

    const partMap = {};
    parts.forEach((part) => {
      if (part.type !== 'literal') {
        partMap[part.type] = part.value;
      }
    });

    return new Date(
      Number(partMap.year),
      Number(partMap.month) - 1,
      Number(partMap.day),
      Number(partMap.hour),
      Number(partMap.minute),
      Number(partMap.second)
    );
  }

  function formatTimeZoneLabel(timeZone) {
    if (!isValidTimeZone(timeZone)) return 'UTC';
    if (timeZone === 'Africa/Johannesburg') return 'South Africa (Johannesburg)';

    const [region, city] = String(timeZone).split('/');
    if (!city) {
      return String(timeZone).replace(/_/g, ' ');
    }

    return `${region.replace(/_/g, ' ')} - ${city.replace(/_/g, ' ')}`;
  }

  function getTimeZoneOptionList() {
    const detected = getDetectedTimeZone();
    const fallbackZones = [
      'UTC', 'Africa/Johannesburg', 'Europe/London', 'Europe/Paris',
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
      'America/Sao_Paulo', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
      'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
    ];

    let zones = [];
    if (typeof Intl.supportedValuesOf === 'function') {
      zones = Intl.supportedValuesOf('timeZone');
    }

    const merged = [detected, ...fallbackZones, ...zones].filter(isValidTimeZone);
    return Array.from(new Set(merged));
  }

  function buildHelpTimeZoneSelect() {
    const select = document.getElementById('help-timezone-select');
    if (!select) return;

    const zones = getTimeZoneOptionList();
    select.innerHTML = '';

    const autoOption = document.createElement('option');
    autoOption.value = '';
    autoOption.textContent = `Auto (${formatTimeZoneLabel(getDetectedTimeZone())})`;
    select.appendChild(autoOption);

    zones.forEach((zone) => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = formatTimeZoneLabel(zone);
      select.appendChild(option);
    });
  }

  function setSelectedTimeZone(timeZone, options = {}) {
    const { save = true } = options;
    selectedTimeZone = isValidTimeZone(timeZone) ? timeZone : '';

    const select = document.getElementById('help-timezone-select');
    if (select) {
      select.value = selectedTimeZone;
    }

    if (save) {
      try {
        if (selectedTimeZone) {
          localStorage.setItem(TIMEZONE_STORAGE_KEY, selectedTimeZone);
        } else {
          localStorage.removeItem(TIMEZONE_STORAGE_KEY);
        }
      } catch (error) {
        // ignore storage errors
      }
    }

    updateHelpRegionalTime();
    updateTodayHighlight();
    updateNowLine();
    renderCalendar();
  }

  function onHelpTimeZoneChange(value) {
    setSelectedTimeZone(value);
  }

  function updateHelpRegionalTime() {
    const timezoneLabel = document.getElementById('help-timezone-label');
    const localTimeLabel = document.getElementById('help-local-time-label');
    if (!timezoneLabel || !localTimeLabel) return;

    const timezone = getActiveTimeZone();
    timezoneLabel.textContent = formatTimeZoneLabel(timezone);

    const now = getNowInActiveTimeZone();
    localTimeLabel.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: getDetectedTimeZone()
    });
  }

  function initHelpRegionalTime() {
    buildHelpTimeZoneSelect();
    setSelectedTimeZone(getStoredTimeZonePreference(), { save: false });
    updateHelpRegionalTime();

    if (helpRegionalTimeTimer) {
      clearInterval(helpRegionalTimeTimer);
    }

    helpRegionalTimeTimer = setInterval(updateHelpRegionalTime, 1000);
  }

  function setAuthMode(mode) {
    const normalizedMode = mode === 'signup' ? 'signup' : 'signin';
    authMode = normalizedMode;

    const title = document.getElementById('app-auth-title');
    const confirmPasswordInput = document.getElementById('app-confirm-password');
    const signInBtn = document.getElementById('signin-btn');
    const signUpBtn = document.getElementById('signup-btn');
    if (!title || !confirmPasswordInput || !signInBtn || !signUpBtn) return;

    if (normalizedMode === 'signup') {
      title.textContent = 'Create your account';
      confirmPasswordInput.style.display = 'block';
      confirmPasswordInput.disabled = false;
      signUpBtn.classList.add('auth-active');
      signInBtn.classList.remove('auth-active');
      return;
    }

    title.textContent = 'Sign in to open your timetable';
    confirmPasswordInput.value = '';
    confirmPasswordInput.style.display = 'none';
    confirmPasswordInput.disabled = true;
    signInBtn.classList.add('auth-active');
    signUpBtn.classList.remove('auth-active');
  }

  function submitAuthByMode() {
    if (authMode === 'signup') {
      appSignUp();
      return;
    }

    appLogin();
  }

  function handleAuthEnter(event) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    submitAuthByMode();
  }

  function getAuthEmailRedirectUrl() {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      return window.location.origin + window.location.pathname;
    }
    if (window.location.protocol === 'file:') {
      return LOCALHOST_AUTH_REDIRECT_URL;
    }
    return null;
  }

  function initBuildBadge() {
    const badge = document.getElementById('build-badge');
    if (!badge) return;
    badge.textContent = `Build ${APP_BUILD_VERSION}`;
  }

  function showToast(message) {
    const toastRoot = document.getElementById('toast-root');
    if (!toastRoot || !message) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    toastRoot.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 2200);
  }

  function resolveActionDialog(confirmed) {
    const dialog = document.getElementById('action-dialog');
    const input = document.getElementById('action-dialog-input');
    if (!dialog) return;

    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden', 'true');

    const resolver = actionDialogResolver;
    actionDialogResolver = null;
    if (resolver) {
      resolver({ confirmed, value: input?.value || '' });
    }
  }

  function openActionDialog(options = {}) {
    const {
      title = 'Confirm action',
      message = '',
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      showInput = false,
      inputValue = '',
      inputPlaceholder = ''
    } = options;

    const dialog = document.getElementById('action-dialog');
    const titleEl = document.getElementById('action-dialog-title');
    const messageEl = document.getElementById('action-dialog-message');
    const input = document.getElementById('action-dialog-input');
    const buttons = dialog?.querySelectorAll('.action-dialog-actions .btn');

    if (!dialog || !titleEl || !messageEl || !input || !buttons || buttons.length < 2) {
      return Promise.resolve({ confirmed: false, value: '' });
    }

    titleEl.textContent = title;
    messageEl.textContent = message;
    buttons[0].textContent = confirmText;
    buttons[1].textContent = cancelText;

    input.classList.toggle('show', showInput);
    input.value = inputValue;
    input.placeholder = inputPlaceholder;

    dialog.classList.add('open');
    dialog.setAttribute('aria-hidden', 'false');

    if (showInput) {
      setTimeout(() => input.focus(), 0);
    }

    return new Promise((resolve) => {
      actionDialogResolver = resolve;
    });
  }

  function toggleQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    const next = !quickAdd.classList.contains('open');
    quickAdd.classList.toggle('open', next);
    quickAdd.setAttribute('aria-hidden', next ? 'false' : 'true');
  }

  function closeQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    quickAdd.classList.remove('open');
    quickAdd.setAttribute('aria-hidden', 'true');
  }

  function quickAddColumn() {
    closeQuickAddActions();
    if (!isAdmin) {
      showToast('Unlock Customize first');
      return;
    }
    addColumn();
    showToast('Column added');
  }

  function quickAddEvent() {
    closeQuickAddActions();
    if (activeView === 'calendar') {
      const date = getNowInActiveTimeZone();
      addCalendarEvent(getIsoDateKey(date));
      showToast('Event editor opened');
      return;
    }
    addRow();
    showToast('Time slot added');
  }

  function openCellEditSheet(inputElement) {
    if (!inputElement || !isSmallScreen()) return;
    const sheet = document.getElementById('cell-edit-sheet');
    const editInput = document.getElementById('cell-edit-input');
    if (!sheet || !editInput) return;

    activeCellEditorInput = inputElement;
    editInput.value = inputElement.value || '';
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    editInput.focus();
  }

  function closeCellEditSheet() {
    const sheet = document.getElementById('cell-edit-sheet');
    if (!sheet) return;
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    activeCellEditorInput = null;
  }

  function saveCellEditSheet() {
    if (!activeCellEditorInput) {
      closeCellEditSheet();
      return;
    }

    const editInput = document.getElementById('cell-edit-input');
    const nextValue = (editInput?.value || '').trim();
    pushHistorySnapshot();
    activeCellEditorInput.value = nextValue;
    applyEventChip(activeCellEditorInput);
    updateNowLine();
    closeCellEditSheet();
    showToast('Cell updated');
  }

  function clearCellEditSheet() {
    const editInput = document.getElementById('cell-edit-input');
    if (editInput) editInput.value = '';
  }

  function toggleCalendarCollapse() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button || !isSmallScreen()) return;

    calendarCollapsedMobile = !panel.classList.contains('calendar-collapsed');
    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  function setCalendarCollapsedForViewport() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button) return;

    if (!isSmallScreen()) {
      panel.classList.remove('calendar-collapsed');
      button.textContent = 'Expand Calendar';
      return;
    }

    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  async function exportTimetablePdf() {
    const exportBtn = document.getElementById('export-pdf-btn');
    const timetable = document.getElementById('timetable');
    if (!timetable) return;

    if (exportBtn) {
      exportBtn.disabled = true;
      exportBtn.textContent = 'Exporting...';
    }

    try {
      if (!window.html2pdf) {
        throw new Error('PDF library unavailable');
      }

      const tableClone = timetable.cloneNode(true);
      tableClone.removeAttribute('id');
      tableClone.style.width = '100%';

      tableClone.querySelectorAll('input, textarea').forEach((field) => {
        const value = (field.value || '').trim();
        const fallback = (field.placeholder || '').trim();
        const text = value || fallback;
        const replacement = document.createElement('div');
        replacement.textContent = text;
        replacement.style.padding = '8px 10px';
        replacement.style.minHeight = '32px';
        replacement.style.fontSize = '11px';
        replacement.style.lineHeight = '1.25';
        replacement.style.wordBreak = 'break-word';
        replacement.style.whiteSpace = 'pre-wrap';
        field.replaceWith(replacement);
      });

      const exportRoot = document.createElement('div');
      exportRoot.style.position = 'fixed';
      exportRoot.style.left = '-10000px';
      exportRoot.style.top = '0';
      exportRoot.style.width = '1600px';
      exportRoot.style.background = '#fff';
      exportRoot.style.color = '#111';
      exportRoot.style.padding = '16px';

      const title = document.getElementById('main-title')?.value?.trim() || 'Timetable';
      const subtitle = document.querySelector('.subtitle-input')?.value?.trim() || '';
      const weekLabel = document.getElementById('week-label')?.textContent?.trim() || '';

      const heading = document.createElement('div');
      heading.innerHTML = `<div style="font-size:24px;font-weight:700;margin-bottom:4px;">${title}</div><div style="font-size:12px;color:#444;margin-bottom:4px;">${subtitle}</div><div style="font-size:11px;color:#666;margin-bottom:12px;">${weekLabel}</div>`;

      exportRoot.appendChild(heading);
      exportRoot.appendChild(tableClone);
      document.body.appendChild(exportRoot);

      const safeName = title.replace(/[^a-z0-9-_ ]/gi, '').trim().replace(/\s+/g, '_') || 'timetable';

      await window.html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: `${safeName}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        })
        .from(exportRoot)
        .save();

      document.body.removeChild(exportRoot);
    } catch (error) {
      showToast('Unable to export PDF right now');
    } finally {
      if (exportBtn) {
        exportBtn.disabled = false;
        exportBtn.textContent = 'Export PDF';
      }
    }
  }

  function initTimetableViewportControls() {
    refreshFocusDaySelect();
    setTimetableScope(isSmallScreen() ? 'day' : getStoredTimetableScope(), { persistPreference: false });
    renderDayPillSelector();
  }

  function toggleSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const toggleBtn = document.getElementById('settings-toggle-btn');
    if (!panel || !toggleBtn) return;

    const isOpen = panel.classList.toggle('open');
    toggleBtn.textContent = isOpen ? '✕ Close' : '⚙ Customize';
    if (isOpen) {
      panel.scrollTop = 0;
      try {
        const savedTab = localStorage.getItem(CUSTOMIZE_TAB_STORAGE_KEY);
        if (savedTab === 'layout' || savedTab === 'colors' || savedTab === 'data') {
          activeCustomizeTab = savedTab;
        }
      } catch (error) {
        // ignore storage errors
      }
      showCustomizeAdvanced = false;
      applyCustomizePanelFilters();
    } else {
      panel.classList.remove('show-advanced');
    }
    syncEditModeWithCustomizePanel();
    if (activeView === 'calendar') {
      renderCalendar();
    }
  }

  function openHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    if (!drawer) return;
    if (drawer.classList.contains('open')) {
      closeHelpMenu();
      return;
    }
    openHelpMenu();
  }

  function initHelpMenu() {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeHelpMenu();
    });

    initHelpRegionalTime();
  }

  function getDetectedTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  }

  function isValidTimeZone(timeZone) {
    if (!timeZone) return false;
    try {
      new Intl.DateTimeFormat(undefined, { timeZone });
      return true;
    } catch (error) {
      return false;
    }
  }

  function getStoredTimeZonePreference() {
    try {
      const raw = localStorage.getItem(TIMEZONE_STORAGE_KEY);
      if (!raw) return '';
      return isValidTimeZone(raw) ? raw : '';
    } catch (error) {
      return '';
    }
  }

  function getActiveTimeZone() {
    return selectedTimeZone || getDetectedTimeZone();
  }

  function getNowInActiveTimeZone() {
    const timeZone = getActiveTimeZone();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(new Date());

    const partMap = {};
    parts.forEach((part) => {
      if (part.type !== 'literal') {
        partMap[part.type] = part.value;
      }
    });

    return new Date(
      Number(partMap.year),
      Number(partMap.month) - 1,
      Number(partMap.day),
      Number(partMap.hour),
      Number(partMap.minute),
      Number(partMap.second)
    );
  }

  function formatTimeZoneLabel(timeZone) {
    if (!isValidTimeZone(timeZone)) return 'UTC';
    if (timeZone === 'Africa/Johannesburg') return 'South Africa (Johannesburg)';

    const [region, city] = String(timeZone).split('/');
    if (!city) {
      return String(timeZone).replace(/_/g, ' ');
    }

    return `${region.replace(/_/g, ' ')} - ${city.replace(/_/g, ' ')}`;
  }

  function getTimeZoneOptionList() {
    const detected = getDetectedTimeZone();
    const fallbackZones = [
      'UTC', 'Africa/Johannesburg', 'Europe/London', 'Europe/Paris',
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
      'America/Sao_Paulo', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
      'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
    ];

    let zones = [];
    if (typeof Intl.supportedValuesOf === 'function') {
      zones = Intl.supportedValuesOf('timeZone');
    }

    const merged = [detected, ...fallbackZones, ...zones].filter(isValidTimeZone);
    return Array.from(new Set(merged));
  }

  function buildHelpTimeZoneSelect() {
    const select = document.getElementById('help-timezone-select');
    if (!select) return;

    const zones = getTimeZoneOptionList();
    select.innerHTML = '';

    const autoOption = document.createElement('option');
    autoOption.value = '';
    autoOption.textContent = `Auto (${formatTimeZoneLabel(getDetectedTimeZone())})`;
    select.appendChild(autoOption);

    zones.forEach((zone) => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = formatTimeZoneLabel(zone);
      select.appendChild(option);
    });
  }

  function setSelectedTimeZone(timeZone, options = {}) {
    const { save = true } = options;
    selectedTimeZone = isValidTimeZone(timeZone) ? timeZone : '';

    const select = document.getElementById('help-timezone-select');
    if (select) {
      select.value = selectedTimeZone;
    }

    if (save) {
      try {
        if (selectedTimeZone) {
          localStorage.setItem(TIMEZONE_STORAGE_KEY, selectedTimeZone);
        } else {
          localStorage.removeItem(TIMEZONE_STORAGE_KEY);
        }
      } catch (error) {
        // ignore storage errors
      }
    }

    updateHelpRegionalTime();
    updateTodayHighlight();
    updateNowLine();
    renderCalendar();
  }

  function onHelpTimeZoneChange(value) {
    setSelectedTimeZone(value);
  }

  function updateHelpRegionalTime() {
    const timezoneLabel = document.getElementById('help-timezone-label');
    const localTimeLabel = document.getElementById('help-local-time-label');
    if (!timezoneLabel || !localTimeLabel) return;

    const timezone = getActiveTimeZone();
    timezoneLabel.textContent = formatTimeZoneLabel(timezone);

    const now = getNowInActiveTimeZone();
    localTimeLabel.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: getDetectedTimeZone()
    });
  }

  function initHelpRegionalTime() {
    buildHelpTimeZoneSelect();
    setSelectedTimeZone(getStoredTimeZonePreference(), { save: false });
    updateHelpRegionalTime();

    if (helpRegionalTimeTimer) {
      clearInterval(helpRegionalTimeTimer);
    }

    helpRegionalTimeTimer = setInterval(updateHelpRegionalTime, 1000);
  }

  function setAuthMode(mode) {
    const normalizedMode = mode === 'signup' ? 'signup' : 'signin';
    authMode = normalizedMode;

    const title = document.getElementById('app-auth-title');
    const confirmPasswordInput = document.getElementById('app-confirm-password');
    const signInBtn = document.getElementById('signin-btn');
    const signUpBtn = document.getElementById('signup-btn');
    if (!title || !confirmPasswordInput || !signInBtn || !signUpBtn) return;

    if (normalizedMode === 'signup') {
      title.textContent = 'Create your account';
      confirmPasswordInput.style.display = 'block';
      confirmPasswordInput.disabled = false;
      signUpBtn.classList.add('auth-active');
      signInBtn.classList.remove('auth-active');
      return;
    }

    title.textContent = 'Sign in to open your timetable';
    confirmPasswordInput.value = '';
    confirmPasswordInput.style.display = 'none';
    confirmPasswordInput.disabled = true;
    signInBtn.classList.add('auth-active');
    signUpBtn.classList.remove('auth-active');
  }

  function submitAuthByMode() {
    if (authMode === 'signup') {
      appSignUp();
      return;
    }

    appLogin();
  }

  function handleAuthEnter(event) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    submitAuthByMode();
  }

  function getAuthEmailRedirectUrl() {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      return window.location.origin + window.location.pathname;
    }
    if (window.location.protocol === 'file:') {
      return LOCALHOST_AUTH_REDIRECT_URL;
    }
    return null;
  }

  function initBuildBadge() {
    const badge = document.getElementById('build-badge');
    if (!badge) return;
    badge.textContent = `Build ${APP_BUILD_VERSION}`;
  }

  function showToast(message) {
    const toastRoot = document.getElementById('toast-root');
    if (!toastRoot || !message) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    toastRoot.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 2200);
  }

  function resolveActionDialog(confirmed) {
    const dialog = document.getElementById('action-dialog');
    const input = document.getElementById('action-dialog-input');
    if (!dialog) return;

    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden', 'true');

    const resolver = actionDialogResolver;
    actionDialogResolver = null;
    if (resolver) {
      resolver({ confirmed, value: input?.value || '' });
    }
  }

  function openActionDialog(options = {}) {
    const {
      title = 'Confirm action',
      message = '',
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      showInput = false,
      inputValue = '',
      inputPlaceholder = ''
    } = options;

    const dialog = document.getElementById('action-dialog');
    const titleEl = document.getElementById('action-dialog-title');
    const messageEl = document.getElementById('action-dialog-message');
    const input = document.getElementById('action-dialog-input');
    const buttons = dialog?.querySelectorAll('.action-dialog-actions .btn');

    if (!dialog || !titleEl || !messageEl || !input || !buttons || buttons.length < 2) {
      return Promise.resolve({ confirmed: false, value: '' });
    }

    titleEl.textContent = title;
    messageEl.textContent = message;
    buttons[0].textContent = confirmText;
    buttons[1].textContent = cancelText;

    input.classList.toggle('show', showInput);
    input.value = inputValue;
    input.placeholder = inputPlaceholder;

    dialog.classList.add('open');
    dialog.setAttribute('aria-hidden', 'false');

    if (showInput) {
      setTimeout(() => input.focus(), 0);
    }

    return new Promise((resolve) => {
      actionDialogResolver = resolve;
    });
  }

  function toggleQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    const next = !quickAdd.classList.contains('open');
    quickAdd.classList.toggle('open', next);
    quickAdd.setAttribute('aria-hidden', next ? 'false' : 'true');
  }

  function closeQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    quickAdd.classList.remove('open');
    quickAdd.setAttribute('aria-hidden', 'true');
  }

  function quickAddColumn() {
    closeQuickAddActions();
    if (!isAdmin) {
      showToast('Unlock Customize first');
      return;
    }
    addColumn();
    showToast('Column added');
  }

  function quickAddEvent() {
    closeQuickAddActions();
    if (activeView === 'calendar') {
      const date = getNowInActiveTimeZone();
      addCalendarEvent(getIsoDateKey(date));
      showToast('Event editor opened');
      return;
    }
    addRow();
    showToast('Time slot added');
  }

  function openCellEditSheet(inputElement) {
    if (!inputElement || !isSmallScreen()) return;
    const sheet = document.getElementById('cell-edit-sheet');
    const editInput = document.getElementById('cell-edit-input');
    if (!sheet || !editInput) return;

    activeCellEditorInput = inputElement;
    editInput.value = inputElement.value || '';
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    editInput.focus();
  }

  function closeCellEditSheet() {
    const sheet = document.getElementById('cell-edit-sheet');
    if (!sheet) return;
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    activeCellEditorInput = null;
  }

  function saveCellEditSheet() {
    if (!activeCellEditorInput) {
      closeCellEditSheet();
      return;
    }

    const editInput = document.getElementById('cell-edit-input');
    const nextValue = (editInput?.value || '').trim();
    pushHistorySnapshot();
    activeCellEditorInput.value = nextValue;
    applyEventChip(activeCellEditorInput);
    updateNowLine();
    closeCellEditSheet();
    showToast('Cell updated');
  }

  function clearCellEditSheet() {
    const editInput = document.getElementById('cell-edit-input');
    if (editInput) editInput.value = '';
  }

  function toggleCalendarCollapse() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button || !isSmallScreen()) return;

    calendarCollapsedMobile = !panel.classList.contains('calendar-collapsed');
    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  function setCalendarCollapsedForViewport() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button) return;

    if (!isSmallScreen()) {
      panel.classList.remove('calendar-collapsed');
      button.textContent = 'Expand Calendar';
      return;
    }

    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  async function exportTimetablePdf() {
    const exportBtn = document.getElementById('export-pdf-btn');
    const timetable = document.getElementById('timetable');
    if (!timetable) return;

    if (exportBtn) {
      exportBtn.disabled = true;
      exportBtn.textContent = 'Exporting...';
    }

    try {
      if (!window.html2pdf) {
        throw new Error('PDF library unavailable');
      }

      const tableClone = timetable.cloneNode(true);
      tableClone.removeAttribute('id');
      tableClone.style.width = '100%';

      tableClone.querySelectorAll('input, textarea').forEach((field) => {
        const value = (field.value || '').trim();
        const fallback = (field.placeholder || '').trim();
        const text = value || fallback;
        const replacement = document.createElement('div');
        replacement.textContent = text;
        replacement.style.padding = '8px 10px';
        replacement.style.minHeight = '32px';
        replacement.style.fontSize = '11px';
        replacement.style.lineHeight = '1.25';
        replacement.style.wordBreak = 'break-word';
        replacement.style.whiteSpace = 'pre-wrap';
        field.replaceWith(replacement);
      });

      const exportRoot = document.createElement('div');
      exportRoot.style.position = 'fixed';
      exportRoot.style.left = '-10000px';
      exportRoot.style.top = '0';
      exportRoot.style.width = '1600px';
      exportRoot.style.background = '#fff';
      exportRoot.style.color = '#111';
      exportRoot.style.padding = '16px';

      const title = document.getElementById('main-title')?.value?.trim() || 'Timetable';
      const subtitle = document.querySelector('.subtitle-input')?.value?.trim() || '';
      const weekLabel = document.getElementById('week-label')?.textContent?.trim() || '';

      const heading = document.createElement('div');
      heading.innerHTML = `<div style="font-size:24px;font-weight:700;margin-bottom:4px;">${title}</div><div style="font-size:12px;color:#444;margin-bottom:4px;">${subtitle}</div><div style="font-size:11px;color:#666;margin-bottom:12px;">${weekLabel}</div>`;

      exportRoot.appendChild(heading);
      exportRoot.appendChild(tableClone);
      document.body.appendChild(exportRoot);

      const safeName = title.replace(/[^a-z0-9-_ ]/gi, '').trim().replace(/\s+/g, '_') || 'timetable';

      await window.html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: `${safeName}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        })
        .from(exportRoot)
        .save();

      document.body.removeChild(exportRoot);
    } catch (error) {
      showToast('Unable to export PDF right now');
    } finally {
      if (exportBtn) {
        exportBtn.disabled = false;
        exportBtn.textContent = 'Export PDF';
      }
    }
  }

  function initTimetableViewportControls() {
    refreshFocusDaySelect();
    setTimetableScope(isSmallScreen() ? 'day' : getStoredTimetableScope(), { persistPreference: false });
    renderDayPillSelector();
  }

  function toggleSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const toggleBtn = document.getElementById('settings-toggle-btn');
    if (!panel || !toggleBtn) return;

    const isOpen = panel.classList.toggle('open');
    toggleBtn.textContent = isOpen ? '✕ Close' : '⚙ Customize';
    if (isOpen) {
      panel.scrollTop = 0;
      try {
        const savedTab = localStorage.getItem(CUSTOMIZE_TAB_STORAGE_KEY);
        if (savedTab === 'layout' || savedTab === 'colors' || savedTab === 'data') {
          activeCustomizeTab = savedTab;
        }
      } catch (error) {
        // ignore storage errors
      }
      showCustomizeAdvanced = false;
      applyCustomizePanelFilters();
    } else {
      panel.classList.remove('show-advanced');
    }
    syncEditModeWithCustomizePanel();
    if (activeView === 'calendar') {
      renderCalendar();
    }
  }

  function openHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    if (!drawer) return;
    if (drawer.classList.contains('open')) {
      closeHelpMenu();
      return;
    }
    openHelpMenu();
  }

  function initHelpMenu() {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeHelpMenu();
    });

    initHelpRegionalTime();
  }

  function getDetectedTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  }

  function isValidTimeZone(timeZone) {
    if (!timeZone) return false;
    try {
      new Intl.DateTimeFormat(undefined, { timeZone });
      return true;
    } catch (error) {
      return false;
    }
  }

  function getStoredTimeZonePreference() {
    try {
      const raw = localStorage.getItem(TIMEZONE_STORAGE_KEY);
      if (!raw) return '';
      return isValidTimeZone(raw) ? raw : '';
    } catch (error) {
      return '';
    }
  }

  function getActiveTimeZone() {
    return selectedTimeZone || getDetectedTimeZone();
  }

  function getNowInActiveTimeZone() {
    const timeZone = getActiveTimeZone();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(new Date());

    const partMap = {};
    parts.forEach((part) => {
      if (part.type !== 'literal') {
        partMap[part.type] = part.value;
      }
    });

    return new Date(
      Number(partMap.year),
      Number(partMap.month) - 1,
      Number(partMap.day),
      Number(partMap.hour),
      Number(partMap.minute),
      Number(partMap.second)
    );
  }

  function formatTimeZoneLabel(timeZone) {
    if (!isValidTimeZone(timeZone)) return 'UTC';
    if (timeZone === 'Africa/Johannesburg') return 'South Africa (Johannesburg)';

    const [region, city] = String(timeZone).split('/');
    if (!city) {
      return String(timeZone).replace(/_/g, ' ');
    }

    return `${region.replace(/_/g, ' ')} - ${city.replace(/_/g, ' ')}`;
  }

  function getTimeZoneOptionList() {
    const detected = getDetectedTimeZone();
    const fallbackZones = [
      'UTC', 'Africa/Johannesburg', 'Europe/London', 'Europe/Paris',
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
      'America/Sao_Paulo', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
      'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
    ];

    let zones = [];
    if (typeof Intl.supportedValuesOf === 'function') {
      zones = Intl.supportedValuesOf('timeZone');
    }

    const merged = [detected, ...fallbackZones, ...zones].filter(isValidTimeZone);
    return Array.from(new Set(merged));
  }

  function buildHelpTimeZoneSelect() {
    const select = document.getElementById('help-timezone-select');
    if (!select) return;

    const zones = getTimeZoneOptionList();
    select.innerHTML = '';

    const autoOption = document.createElement('option');
    autoOption.value = '';
    autoOption.textContent = `Auto (${formatTimeZoneLabel(getDetectedTimeZone())})`;
    select.appendChild(autoOption);

    zones.forEach((zone) => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = formatTimeZoneLabel(zone);
      select.appendChild(option);
    });
  }

  function setSelectedTimeZone(timeZone, options = {}) {
    const { save = true } = options;
    selectedTimeZone = isValidTimeZone(timeZone) ? timeZone : '';

    const select = document.getElementById('help-timezone-select');
    if (select) {
      select.value = selectedTimeZone;
    }

    if (save) {
      try {
        if (selectedTimeZone) {
          localStorage.setItem(TIMEZONE_STORAGE_KEY, selectedTimeZone);
        } else {
          localStorage.removeItem(TIMEZONE_STORAGE_KEY);
        }
      } catch (error) {
        // ignore storage errors
      }
    }

    updateHelpRegionalTime();
    updateTodayHighlight();
    updateNowLine();
    renderCalendar();
  }

  function onHelpTimeZoneChange(value) {
    setSelectedTimeZone(value);
  }

  function updateHelpRegionalTime() {
    const timezoneLabel = document.getElementById('help-timezone-label');
    const localTimeLabel = document.getElementById('help-local-time-label');
    if (!timezoneLabel || !localTimeLabel) return;

    const timezone = getActiveTimeZone();
    timezoneLabel.textContent = formatTimeZoneLabel(timezone);

    const now = getNowInActiveTimeZone();
    localTimeLabel.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: getDetectedTimeZone()
    });
  }

  function initHelpRegionalTime() {
    buildHelpTimeZoneSelect();
    setSelectedTimeZone(getStoredTimeZonePreference(), { save: false });
    updateHelpRegionalTime();

    if (helpRegionalTimeTimer) {
      clearInterval(helpRegionalTimeTimer);
    }

    helpRegionalTimeTimer = setInterval(updateHelpRegionalTime, 1000);
  }

  function setAuthMode(mode) {
    const normalizedMode = mode === 'signup' ? 'signup' : 'signin';
    authMode = normalizedMode;

    const title = document.getElementById('app-auth-title');
    const confirmPasswordInput = document.getElementById('app-confirm-password');
    const signInBtn = document.getElementById('signin-btn');
    const signUpBtn = document.getElementById('signup-btn');
    if (!title || !confirmPasswordInput || !signInBtn || !signUpBtn) return;

    if (normalizedMode === 'signup') {
      title.textContent = 'Create your account';
      confirmPasswordInput.style.display = 'block';
      confirmPasswordInput.disabled = false;
      signUpBtn.classList.add('auth-active');
      signInBtn.classList.remove('auth-active');
      return;
    }

    title.textContent = 'Sign in to open your timetable';
    confirmPasswordInput.value = '';
    confirmPasswordInput.style.display = 'none';
    confirmPasswordInput.disabled = true;
    signInBtn.classList.add('auth-active');
    signUpBtn.classList.remove('auth-active');
  }

  function submitAuthByMode() {
    if (authMode === 'signup') {
      appSignUp();
      return;
    }

    appLogin();
  }

  function handleAuthEnter(event) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    submitAuthByMode();
  }

  function getAuthEmailRedirectUrl() {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      return window.location.origin + window.location.pathname;
    }
    if (window.location.protocol === 'file:') {
      return LOCALHOST_AUTH_REDIRECT_URL;
    }
    return null;
  }

  function initBuildBadge() {
    const badge = document.getElementById('build-badge');
    if (!badge) return;
    badge.textContent = `Build ${APP_BUILD_VERSION}`;
  }

  function showToast(message) {
    const toastRoot = document.getElementById('toast-root');
    if (!toastRoot || !message) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    toastRoot.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 2200);
  }

  function resolveActionDialog(confirmed) {
    const dialog = document.getElementById('action-dialog');
    const input = document.getElementById('action-dialog-input');
    if (!dialog) return;

    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden', 'true');

    const resolver = actionDialogResolver;
    actionDialogResolver = null;
    if (resolver) {
      resolver({ confirmed, value: input?.value || '' });
    }
  }

  function openActionDialog(options = {}) {
    const {
      title = 'Confirm action',
      message = '',
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      showInput = false,
      inputValue = '',
      inputPlaceholder = ''
    } = options;

    const dialog = document.getElementById('action-dialog');
    const titleEl = document.getElementById('action-dialog-title');
    const messageEl = document.getElementById('action-dialog-message');
    const input = document.getElementById('action-dialog-input');
    const buttons = dialog?.querySelectorAll('.action-dialog-actions .btn');

    if (!dialog || !titleEl || !messageEl || !input || !buttons || buttons.length < 2) {
      return Promise.resolve({ confirmed: false, value: '' });
    }

    titleEl.textContent = title;
    messageEl.textContent = message;
    buttons[0].textContent = confirmText;
    buttons[1].textContent = cancelText;

    input.classList.toggle('show', showInput);
    input.value = inputValue;
    input.placeholder = inputPlaceholder;

    dialog.classList.add('open');
    dialog.setAttribute('aria-hidden', 'false');

    if (showInput) {
      setTimeout(() => input.focus(), 0);
    }

    return new Promise((resolve) => {
      actionDialogResolver = resolve;
    });
  }

  function toggleQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    const next = !quickAdd.classList.contains('open');
    quickAdd.classList.toggle('open', next);
    quickAdd.setAttribute('aria-hidden', next ? 'false' : 'true');
  }

  function closeQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    quickAdd.classList.remove('open');
    quickAdd.setAttribute('aria-hidden', 'true');
  }

  function quickAddColumn() {
    closeQuickAddActions();
    if (!isAdmin) {
      showToast('Unlock Customize first');
      return;
    }
    addColumn();
    showToast('Column added');
  }

  function quickAddEvent() {
    closeQuickAddActions();
    if (activeView === 'calendar') {
      const date = getNowInActiveTimeZone();
      addCalendarEvent(getIsoDateKey(date));
      showToast('Event editor opened');
      return;
    }
    addRow();
    showToast('Time slot added');
  }

  function openCellEditSheet(inputElement) {
    if (!inputElement || !isSmallScreen()) return;
    const sheet = document.getElementById('cell-edit-sheet');
    const editInput = document.getElementById('cell-edit-input');
    if (!sheet || !editInput) return;

    activeCellEditorInput = inputElement;
    editInput.value = inputElement.value || '';
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    editInput.focus();
  }

  function closeCellEditSheet() {
    const sheet = document.getElementById('cell-edit-sheet');
    if (!sheet) return;
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    activeCellEditorInput = null;
  }

  function saveCellEditSheet() {
    if (!activeCellEditorInput) {
      closeCellEditSheet();
      return;
    }

    const editInput = document.getElementById('cell-edit-input');
    const nextValue = (editInput?.value || '').trim();
    pushHistorySnapshot();
    activeCellEditorInput.value = nextValue;
    applyEventChip(activeCellEditorInput);
    updateNowLine();
    closeCellEditSheet();
    showToast('Cell updated');
  }

  function clearCellEditSheet() {
    const editInput = document.getElementById('cell-edit-input');
    if (editInput) editInput.value = '';
  }

  function toggleCalendarCollapse() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button || !isSmallScreen()) return;

    calendarCollapsedMobile = !panel.classList.contains('calendar-collapsed');
    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  function setCalendarCollapsedForViewport() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button) return;

    if (!isSmallScreen()) {
      panel.classList.remove('calendar-collapsed');
      button.textContent = 'Expand Calendar';
      return;
    }

    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  async function exportTimetablePdf() {
    const exportBtn = document.getElementById('export-pdf-btn');
    const timetable = document.getElementById('timetable');
    if (!timetable) return;

    if (exportBtn) {
      exportBtn.disabled = true;
      exportBtn.textContent = 'Exporting...';
    }

    try {
      if (!window.html2pdf) {
        throw new Error('PDF library unavailable');
      }

      const tableClone = timetable.cloneNode(true);
      tableClone.removeAttribute('id');
      tableClone.style.width = '100%';

      tableClone.querySelectorAll('input, textarea').forEach((field) => {
        const value = (field.value || '').trim();
        const fallback = (field.placeholder || '').trim();
        const text = value || fallback;
        const replacement = document.createElement('div');
        replacement.textContent = text;
        replacement.style.padding = '8px 10px';
        replacement.style.minHeight = '32px';
        replacement.style.fontSize = '11px';
        replacement.style.lineHeight = '1.25';
        replacement.style.wordBreak = 'break-word';
        replacement.style.whiteSpace = 'pre-wrap';
        field.replaceWith(replacement);
      });

      const exportRoot = document.createElement('div');
      exportRoot.style.position = 'fixed';
      exportRoot.style.left = '-10000px';
      exportRoot.style.top = '0';
      exportRoot.style.width = '1600px';
      exportRoot.style.background = '#fff';
      exportRoot.style.color = '#111';
      exportRoot.style.padding = '16px';

      const title = document.getElementById('main-title')?.value?.trim() || 'Timetable';
      const subtitle = document.querySelector('.subtitle-input')?.value?.trim() || '';
      const weekLabel = document.getElementById('week-label')?.textContent?.trim() || '';

      const heading = document.createElement('div');
      heading.innerHTML = `<div style="font-size:24px;font-weight:700;margin-bottom:4px;">${title}</div><div style="font-size:12px;color:#444;margin-bottom:4px;">${subtitle}</div><div style="font-size:11px;color:#666;margin-bottom:12px;">${weekLabel}</div>`;

      exportRoot.appendChild(heading);
      exportRoot.appendChild(tableClone);
      document.body.appendChild(exportRoot);

      const safeName = title.replace(/[^a-z0-9-_ ]/gi, '').trim().replace(/\s+/g, '_') || 'timetable';

      await window.html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: `${safeName}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        })
        .from(exportRoot)
        .save();

      document.body.removeChild(exportRoot);
    } catch (error) {
      showToast('Unable to export PDF right now');
    } finally {
      if (exportBtn) {
        exportBtn.disabled = false;
        exportBtn.textContent = 'Export PDF';
      }
    }
  }

  function initTimetableViewportControls() {
    refreshFocusDaySelect();
    setTimetableScope(isSmallScreen() ? 'day' : getStoredTimetableScope(), { persistPreference: false });
    renderDayPillSelector();
  }

  function toggleSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const toggleBtn = document.getElementById('settings-toggle-btn');
    if (!panel || !toggleBtn) return;

    const isOpen = panel.classList.toggle('open');
    toggleBtn.textContent = isOpen ? '✕ Close' : '⚙ Customize';
    if (isOpen) {
      panel.scrollTop = 0;
      try {
        const savedTab = localStorage.getItem(CUSTOMIZE_TAB_STORAGE_KEY);
        if (savedTab === 'layout' || savedTab === 'colors' || savedTab === 'data') {
          activeCustomizeTab = savedTab;
        }
      } catch (error) {
        // ignore storage errors
      }
      showCustomizeAdvanced = false;
      applyCustomizePanelFilters();
    } else {
      panel.classList.remove('show-advanced');
    }
    syncEditModeWithCustomizePanel();
    if (activeView === 'calendar') {
      renderCalendar();
    }
  }

  function openHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    if (!drawer) return;
    if (drawer.classList.contains('open')) {
      closeHelpMenu();
      return;
    }
    openHelpMenu();
  }

  function initHelpMenu() {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeHelpMenu();
    });

    initHelpRegionalTime();
  }

  function getDetectedTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  }

  function isValidTimeZone(timeZone) {
    if (!timeZone) return false;
    try {
      new Intl.DateTimeFormat(undefined, { timeZone });
      return true;
    } catch (error) {
      return false;
    }
  }

  function getStoredTimeZonePreference() {
    try {
      const raw = localStorage.getItem(TIMEZONE_STORAGE_KEY);
      if (!raw) return '';
      return isValidTimeZone(raw) ? raw : '';
    } catch (error) {
      return '';
    }
  }

  function getActiveTimeZone() {
    return selectedTimeZone || getDetectedTimeZone();
  }

  function getNowInActiveTimeZone() {
    const timeZone = getActiveTimeZone();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(new Date());

    const partMap = {};
    parts.forEach((part) => {
      if (part.type !== 'literal') {
        partMap[part.type] = part.value;
      }
    });

    return new Date(
      Number(partMap.year),
      Number(partMap.month) - 1,
      Number(partMap.day),
      Number(partMap.hour),
      Number(partMap.minute),
      Number(partMap.second)
    );
  }

  function formatTimeZoneLabel(timeZone) {
    if (!isValidTimeZone(timeZone)) return 'UTC';
    if (timeZone === 'Africa/Johannesburg') return 'South Africa (Johannesburg)';

    const [region, city] = String(timeZone).split('/');
    if (!city) {
      return String(timeZone).replace(/_/g, ' ');
    }

    return `${region.replace(/_/g, ' ')} - ${city.replace(/_/g, ' ')}`;
  }

  function getTimeZoneOptionList() {
    const detected = getDetectedTimeZone();
    const fallbackZones = [
      'UTC', 'Africa/Johannesburg', 'Europe/London', 'Europe/Paris',
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
      'America/Sao_Paulo', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
      'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
    ];

    let zones = [];
    if (typeof Intl.supportedValuesOf === 'function') {
      zones = Intl.supportedValuesOf('timeZone');
    }

    const merged = [detected, ...fallbackZones, ...zones].filter(isValidTimeZone);
    return Array.from(new Set(merged));
  }

  function buildHelpTimeZoneSelect() {
    const select = document.getElementById('help-timezone-select');
    if (!select) return;

    const zones = getTimeZoneOptionList();
    select.innerHTML = '';

    const autoOption = document.createElement('option');
    autoOption.value = '';
    autoOption.textContent = `Auto (${formatTimeZoneLabel(getDetectedTimeZone())})`;
    select.appendChild(autoOption);

    zones.forEach((zone) => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = formatTimeZoneLabel(zone);
      select.appendChild(option);
    });
  }

  function setSelectedTimeZone(timeZone, options = {}) {
    const { save = true } = options;
    selectedTimeZone = isValidTimeZone(timeZone) ? timeZone : '';

    const select = document.getElementById('help-timezone-select');
    if (select) {
      select.value = selectedTimeZone;
    }

    if (save) {
      try {
        if (selectedTimeZone) {
          localStorage.setItem(TIMEZONE_STORAGE_KEY, selectedTimeZone);
        } else {
          localStorage.removeItem(TIMEZONE_STORAGE_KEY);
        }
      } catch (error) {
        // ignore storage errors
      }
    }

    updateHelpRegionalTime();
    updateTodayHighlight();
    updateNowLine();
    renderCalendar();
  }

  function onHelpTimeZoneChange(value) {
    setSelectedTimeZone(value);
  }

  function updateHelpRegionalTime() {
    const timezoneLabel = document.getElementById('help-timezone-label');
    const localTimeLabel = document.getElementById('help-local-time-label');
    if (!timezoneLabel || !localTimeLabel) return;

    const timezone = getActiveTimeZone();
    timezoneLabel.textContent = formatTimeZoneLabel(timezone);

    const now = getNowInActiveTimeZone();
    localTimeLabel.textContent = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: getDetectedTimeZone()
    });
  }

  function initHelpRegionalTime() {
    buildHelpTimeZoneSelect();
    setSelectedTimeZone(getStoredTimeZonePreference(), { save: false });
    updateHelpRegionalTime();

    if (helpRegionalTimeTimer) {
      clearInterval(helpRegionalTimeTimer);
    }

    helpRegionalTimeTimer = setInterval(updateHelpRegionalTime, 1000);
  }

  function setAuthMode(mode) {
    const normalizedMode = mode === 'signup' ? 'signup' : 'signin';
    authMode = normalizedMode;

    const title = document.getElementById('app-auth-title');
    const confirmPasswordInput = document.getElementById('app-confirm-password');
    const signInBtn = document.getElementById('signin-btn');
    const signUpBtn = document.getElementById('signup-btn');
    if (!title || !confirmPasswordInput || !signInBtn || !signUpBtn) return;

    if (normalizedMode === 'signup') {
      title.textContent = 'Create your account';
      confirmPasswordInput.style.display = 'block';
      confirmPasswordInput.disabled = false;
      signUpBtn.classList.add('auth-active');
      signInBtn.classList.remove('auth-active');
      return;
    }

    title.textContent = 'Sign in to open your timetable';
    confirmPasswordInput.value = '';
    confirmPasswordInput.style.display = 'none';
    confirmPasswordInput.disabled = true;
    signInBtn.classList.add('auth-active');
    signUpBtn.classList.remove('auth-active');
  }

  function submitAuthByMode() {
    if (authMode === 'signup') {
      appSignUp();
      return;
    }

    appLogin();
  }

  function handleAuthEnter(event) {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    submitAuthByMode();
  }

  function getAuthEmailRedirectUrl() {
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
      return window.location.origin + window.location.pathname;
    }
    if (window.location.protocol === 'file:') {
      return LOCALHOST_AUTH_REDIRECT_URL;
    }
    return null;
  }

  function initBuildBadge() {
    const badge = document.getElementById('build-badge');
    if (!badge) return;
    badge.textContent = `Build ${APP_BUILD_VERSION}`;
  }

  function showToast(message) {
    const toastRoot = document.getElementById('toast-root');
    if (!toastRoot || !message) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.textContent = message;
    toastRoot.appendChild(toast);

    window.setTimeout(() => {
      toast.remove();
    }, 2200);
  }

  function resolveActionDialog(confirmed) {
    const dialog = document.getElementById('action-dialog');
    const input = document.getElementById('action-dialog-input');
    if (!dialog) return;

    dialog.classList.remove('open');
    dialog.setAttribute('aria-hidden', 'true');

    const resolver = actionDialogResolver;
    actionDialogResolver = null;
    if (resolver) {
      resolver({ confirmed, value: input?.value || '' });
    }
  }

  function openActionDialog(options = {}) {
    const {
      title = 'Confirm action',
      message = '',
      confirmText = 'Confirm',
      cancelText = 'Cancel',
      showInput = false,
      inputValue = '',
      inputPlaceholder = ''
    } = options;

    const dialog = document.getElementById('action-dialog');
    const titleEl = document.getElementById('action-dialog-title');
    const messageEl = document.getElementById('action-dialog-message');
    const input = document.getElementById('action-dialog-input');
    const buttons = dialog?.querySelectorAll('.action-dialog-actions .btn');

    if (!dialog || !titleEl || !messageEl || !input || !buttons || buttons.length < 2) {
      return Promise.resolve({ confirmed: false, value: '' });
    }

    titleEl.textContent = title;
    messageEl.textContent = message;
    buttons[0].textContent = confirmText;
    buttons[1].textContent = cancelText;

    input.classList.toggle('show', showInput);
    input.value = inputValue;
    input.placeholder = inputPlaceholder;

    dialog.classList.add('open');
    dialog.setAttribute('aria-hidden', 'false');

    if (showInput) {
      setTimeout(() => input.focus(), 0);
    }

    return new Promise((resolve) => {
      actionDialogResolver = resolve;
    });
  }

  function toggleQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    const next = !quickAdd.classList.contains('open');
    quickAdd.classList.toggle('open', next);
    quickAdd.setAttribute('aria-hidden', next ? 'false' : 'true');
  }

  function closeQuickAddActions() {
    const quickAdd = document.getElementById('quick-add-actions');
    if (!quickAdd) return;
    quickAdd.classList.remove('open');
    quickAdd.setAttribute('aria-hidden', 'true');
  }

  function quickAddColumn() {
    closeQuickAddActions();
    if (!isAdmin) {
      showToast('Unlock Customize first');
      return;
    }
    addColumn();
    showToast('Column added');
  }

  function quickAddEvent() {
    closeQuickAddActions();
    if (activeView === 'calendar') {
      const date = getNowInActiveTimeZone();
      addCalendarEvent(getIsoDateKey(date));
      showToast('Event editor opened');
      return;
    }
    addRow();
    showToast('Time slot added');
  }

  function openCellEditSheet(inputElement) {
    if (!inputElement || !isSmallScreen()) return;
    const sheet = document.getElementById('cell-edit-sheet');
    const editInput = document.getElementById('cell-edit-input');
    if (!sheet || !editInput) return;

    activeCellEditorInput = inputElement;
    editInput.value = inputElement.value || '';
    sheet.classList.add('open');
    sheet.setAttribute('aria-hidden', 'false');
    editInput.focus();
  }

  function closeCellEditSheet() {
    const sheet = document.getElementById('cell-edit-sheet');
    if (!sheet) return;
    sheet.classList.remove('open');
    sheet.setAttribute('aria-hidden', 'true');
    activeCellEditorInput = null;
  }

  function saveCellEditSheet() {
    if (!activeCellEditorInput) {
      closeCellEditSheet();
      return;
    }

    const editInput = document.getElementById('cell-edit-input');
    const nextValue = (editInput?.value || '').trim();
    pushHistorySnapshot();
    activeCellEditorInput.value = nextValue;
    applyEventChip(activeCellEditorInput);
    updateNowLine();
    closeCellEditSheet();
    showToast('Cell updated');
  }

  function clearCellEditSheet() {
    const editInput = document.getElementById('cell-edit-input');
    if (editInput) editInput.value = '';
  }

  function toggleCalendarCollapse() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button || !isSmallScreen()) return;

    calendarCollapsedMobile = !panel.classList.contains('calendar-collapsed');
    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  function setCalendarCollapsedForViewport() {
    const panel = document.getElementById('calendar-panel');
    const button = document.getElementById('calendar-collapse-btn');
    if (!panel || !button) return;

    if (!isSmallScreen()) {
      panel.classList.remove('calendar-collapsed');
      button.textContent = 'Expand Calendar';
      return;
    }

    panel.classList.toggle('calendar-collapsed', calendarCollapsedMobile);
    button.textContent = calendarCollapsedMobile ? 'Expand Calendar' : 'Collapse Calendar';
  }

  async function exportTimetablePdf() {
    const exportBtn = document.getElementById('export-pdf-btn');
    const timetable = document.getElementById('timetable');
    if (!timetable) return;

    if (exportBtn) {
      exportBtn.disabled = true;
      exportBtn.textContent = 'Exporting...';
    }

    try {
      if (!window.html2pdf) {
        throw new Error('PDF library unavailable');
      }

      const tableClone = timetable.cloneNode(true);
      tableClone.removeAttribute('id');
      tableClone.style.width = '100%';

      tableClone.querySelectorAll('input, textarea').forEach((field) => {
        const value = (field.value || '').trim();
        const fallback = (field.placeholder || '').trim();
        const text = value || fallback;
        const replacement = document.createElement('div');
        replacement.textContent = text;
        replacement.style.padding = '8px 10px';
        replacement.style.minHeight = '32px';
        replacement.style.fontSize = '11px';
        replacement.style.lineHeight = '1.25';
        replacement.style.wordBreak = 'break-word';
        replacement.style.whiteSpace = 'pre-wrap';
        field.replaceWith(replacement);
      });

      const exportRoot = document.createElement('div');
      exportRoot.style.position = 'fixed';
      exportRoot.style.left = '-10000px';
      exportRoot.style.top = '0';
      exportRoot.style.width = '1600px';
      exportRoot.style.background = '#fff';
      exportRoot.style.color = '#111';
      exportRoot.style.padding = '16px';

      const title = document.getElementById('main-title')?.value?.trim() || 'Timetable';
      const subtitle = document.querySelector('.subtitle-input')?.value?.trim() || '';
      const weekLabel = document.getElementById('week-label')?.textContent?.trim() || '';

      const heading = document.createElement('div');
      heading.innerHTML = `<div style="font-size:24px;font-weight:700;margin-bottom:4px;">${title}</div><div style="font-size:12px;color:#444;margin-bottom:4px;">${subtitle}</div><div style="font-size:11px;color:#666;margin-bottom:12px;">${weekLabel}</div>`;

      exportRoot.appendChild(heading);
      exportRoot.appendChild(tableClone);
      document.body.appendChild(exportRoot);

      const safeName = title.replace(/[^a-z0-9-_ ]/gi, '').trim().replace(/\s+/g, '_') || 'timetable';

      await window.html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: `${safeName}.pdf`,
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        })
        .from(exportRoot)
        .save();

      document.body.removeChild(exportRoot);
    } catch (error) {
      showToast('Unable to export PDF right now');
    } finally {
      if (exportBtn) {
        exportBtn.disabled = false;
        exportBtn.textContent = 'Export PDF';
      }
    }
  }

  function initTimetableViewportControls() {
    refreshFocusDaySelect();
    setTimetableScope(isSmallScreen() ? 'day' : getStoredTimetableScope(), { persistPreference: false });
    renderDayPillSelector();
  }

  function toggleSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const toggleBtn = document.getElementById('settings-toggle-btn');
    if (!panel || !toggleBtn) return;

    const isOpen = panel.classList.toggle('open');
    toggleBtn.textContent = isOpen ? '✕ Close' : '⚙ Customize';
    if (isOpen) {
      panel.scrollTop = 0;
      try {
        const savedTab = localStorage.getItem(CUSTOMIZE_TAB_STORAGE_KEY);
        if (savedTab === 'layout' || savedTab === 'colors' || savedTab === 'data') {
          activeCustomizeTab = savedTab;
        }
      } catch (error) {
        // ignore storage errors
      }
      showCustomizeAdvanced = false;
      applyCustomizePanelFilters();
    } else {
      panel.classList.remove('show-advanced');
    }
    syncEditModeWithCustomizePanel();
    if (activeView === 'calendar') {
      renderCalendar();
    }
  }

  function openHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.add('open');
    backdrop.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'true');
    }
  }

  function closeHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    const backdrop = document.getElementById('help-backdrop');
    const button = document.getElementById('help-menu-btn');
    if (!drawer || !backdrop) return;

    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('help-open');
    if (button) {
      button.setAttribute('aria-expanded', 'false');
    }
  }

  function toggleHelpMenu() {
    const drawer = document.getElementById('help-drawer');
    if (!drawer) return;
    if (drawer.classList.contains('open')) {
      closeHelpMenu();
      return;
    }
    openHelpMenu();
  }

  function initHelpMenu() {
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      closeHelpMenu();
    });

    initHelpRegionalTime();
  }

  function getDetectedTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  }

  function isValidTimeZone(timeZone) {
    if (!timeZone) return false;
    try {
      new Intl.DateTimeFormat(undefined, { timeZone });
      return true;
    } catch (error) {
      return false;
    }
  }

  function getStoredTimeZonePreference() {
    try {
      const raw = localStorage.getItem(TIMEZONE_STORAGE_KEY);
      if (!raw) return '';
      return isValidTimeZone(raw) ? raw : '';
    } catch (error) {
      return '';
    }
  }

  function getActiveTimeZone() {
    return selectedTimeZone || getDetectedTimeZone();
  }

  function getNowInActiveTimeZone() {
    const timeZone = getActiveTimeZone();
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).formatToParts(new Date());

    const partMap = {};
    parts.forEach((part) => {
      if (part.type !== 'literal') {
        partMap[part.type] = part.value;
      }
    });

    return new Date(
      Number(partMap.year),
      Number(partMap.month) - 1,
      Number(partMap.day),
      Number(partMap.hour),
      Number(partMap.minute),
      Number(partMap.second)
    );
  }

  function formatTimeZoneLabel(timeZone) {
    if (!isValidTimeZone(timeZone)) return 'UTC';
    if (timeZone === 'Africa/Johannesburg') return 'South Africa (Johannesburg)';

    const [region, city] = String(timeZone).split('/');
    if (!city) {
      return String(timeZone).replace(/_/g, ' ');
    }

    return `${region.replace(/_/g, ' ')} - ${city.replace(/_/g, ' ')}`;
  }

  function getTimeZoneOptionList() {
    const detected = getDetectedTimeZone();
    const fallbackZones = [
      'UTC', 'Africa/Johannesburg', 'Europe/London', 'Europe/Paris',
      'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
      'America/Sao_Paulo', 'Asia/Dubai', 'Asia/Kolkata', 'Asia/Bangkok',
      'Asia/Singapore', 'Asia/Tokyo', 'Australia/Sydney', 'Pacific/Auckland'
    ];

    let zones = [];
    if (typeof Intl.supportedValuesOf === 'function') {
      zones = Intl.supportedValuesOf('timeZone');
    }

    const merged = [detected, ...fallbackZones, ...zones].filter(isValidTimeZone);
    return Array.from(new Set(merged));
  }

  function buildHelpTimeZoneSelect() {
    const select = document.getElementById('help-timezone-select');
    if (!select) return;

    const zones = getTimeZoneOptionList();
    select.innerHTML = '';

    const autoOption = document.createElement('option');
    autoOption.value = '';
    autoOption.textContent = `Auto (${formatTimeZoneLabel(getDetectedTimeZone())})`;
    select.appendChild(autoOption);

    zones.forEach((zone) => {
      const option = document.createElement('option');
      option.value = zone;
      option.textContent = formatTimeZoneLabel(zone);
      select.appendChild(option);
    });
  }

  function setSelectedTimeZone(timeZone, options = {}) {
    const { save = true } = options;
    selectedTimeZone = isValidTimeZone(timeZone) ? timeZone : '';

    const select = document.getElementById('help-timezone-select');
    if (select) {
      select.value = selectedTimeZone;
    }

    if (save) {
      try {
        if (selectedTimeZone) {
          localStorage.setItem(TIMEZONE_STORAGE_KEY, selectedTimeZone);
        } else {
          localStorage.removeItem(TIMEZONE_STORAGE_KEY);
        }
      } catch (error) {
        // ignore storage errors
      }
    }

    updateHelpRegionalTime();
    updateTodayHighlight();
    updateNowLine();
    render