  const SUPABASE_URL = 'https://duxyczrninmfryosbjzy.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1eHljenJuaW5tZnJ5b3Nianp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwOTg3NDksImV4cCI6MjA4NzY3NDc0OX0.dEy7ticDAIXv-8FrQ34b2FfLbi-S9Dx8xwTVWXr64zc';
  const APP_BUILD_VERSION = '20260305-41';
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

  function initTimetableSwipeHint() {
    const swipeHint = document.getElementById('timetable-swipe-hint');
    const tableWrap = document.querySelector('.table-wrap');
    if (!swipeHint || !tableWrap) return;

    const isMobileViewport = window.matchMedia('(max-width: 720px)').matches;
    const isTouchDevice = window.matchMedia('(hover: none)').matches || 'ontouchstart' in window;
    if (!isMobileViewport || !isTouchDevice) {
      swipeHint.classList.add('hidden');
      return;
    }

    if (localStorage.getItem(TIMETABLE_SWIPE_HINT_STORAGE_KEY) === '1') {
      swipeHint.classList.add('hidden');
      return;
    }

    let hasDismissed = false;
    const dismiss = () => {
      if (hasDismissed) return;
      hasDismissed = true;
      swipeHint.classList.add('hidden');
      localStorage.setItem(TIMETABLE_SWIPE_HINT_STORAGE_KEY, '1');
      tableWrap.removeEventListener('scroll', onTableScroll);
      swipeHint.removeEventListener('click', dismiss);
      clearTimeout(autoDismissTimer);
    };

    const onTableScroll = () => {
      if (tableWrap.scrollLeft > 12) {
        dismiss();
      }
    };

    const autoDismissTimer = setTimeout(dismiss, 7000);
    tableWrap.addEventListener('scroll', onTableScroll, { passive: true });
    swipeHint.addEventListener('click', dismiss);
  }

  function initHorizontalPanAssist() {
    const tableWrap = document.querySelector('.table-wrap');
    if (!tableWrap) return;

    const userAgent = navigator.userAgent || '';
    const isIOS = /iPad|iPhone|iPod/.test(userAgent)
      || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isWebKit = /WebKit/.test(userAgent) && !/CriOS|FxiOS|EdgiOS/.test(userAgent);
    const isSafariLike = isIOS && isWebKit;

    let startX = 0;
    let startY = 0;
    let startScrollLeft = 0;
    let activeTouchId = null;
    let isHorizontalDrag = false;
    const threshold = 6;

    tableWrap.addEventListener('touchstart', (event) => {
      if (!isSmallScreen()) return;
      if (!event.touches || event.touches.length !== 1) return;

      const touch = event.touches[0];
      activeTouchId = touch.identifier;
      startX = touch.clientX;
      startY = touch.clientY;
      startScrollLeft = tableWrap.scrollLeft;
      isHorizontalDrag = false;
    }, { passive: true });

    tableWrap.addEventListener('touchmove', (event) => {
      if (!isSmallScreen()) return;
      if (activeTouchId === null || !event.touches) return;

      const touch = Array.from(event.touches).find(t => t.identifier === activeTouchId);
      if (!touch) return;

      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;

      if (!isHorizontalDrag && (Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold)) {
        isHorizontalDrag = Math.abs(deltaX) > (Math.abs(deltaY) * 0.7);
      }

      if (!isHorizontalDrag) return;

      if (isSafariLike) {
        const activeElement = document.activeElement;
        if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')) {
          activeElement.blur();
        }
      }

      tableWrap.scrollLeft = startScrollLeft - deltaX;
      event.preventDefault();
    }, { passive: false });

    const resetTouch = () => {
      activeTouchId = null;
      isHorizontalDrag = false;
    };

    tableWrap.addEventListener('touchend', resetTouch, { passive: true });
    tableWrap.addEventListener('touchcancel', resetTouch, { passive: true });

    if (isSafariLike) {
      tableWrap.style.webkitOverflowScrolling = 'touch';
    }
  }

  function getUserStateStorageKey(userId) {
    return `timetable_state_${userId}`;
  }

  function getCustomizeLockoutStorageKey(userId) {
    return `${CUSTOMIZE_LOCKOUT_STORAGE_PREFIX}${userId}`;
  }

  function loadCustomizeLockoutUntil(userId) {
    if (!userId) return 0;
    try {
      const raw = localStorage.getItem(getCustomizeLockoutStorageKey(userId));
      const timestamp = Number(raw);
      if (!Number.isFinite(timestamp) || timestamp <= 0) {
        return 0;
      }
      return timestamp;
    } catch (error) {
      return 0;
    }
  }

  function saveCustomizeLockoutUntil(userId, timestamp) {
    if (!userId) return;
    try {
      if (timestamp > 0) {
        localStorage.setItem(getCustomizeLockoutStorageKey(userId), String(timestamp));
      } else {
        localStorage.removeItem(getCustomizeLockoutStorageKey(userId));
      }
    } catch (error) {
      // ignore storage errors
    }
  }

  function clearResetPasswordCooldownTimer() {
    if (resetPasswordCooldownTimer) {
      clearInterval(resetPasswordCooldownTimer);
      resetPasswordCooldownTimer = null;
    }
  }

  function startResetPasswordCooldown(resetBtn, appStatus) {
    clearResetPasswordCooldownTimer();

    const tick = () => {
      const remainingMs = resetPasswordBlockedUntil - Date.now();
      if (remainingMs <= 0) {
        if (resetBtn) {
          resetBtn.disabled = false;
          resetBtn.textContent = 'Reset Password';
        }
        clearResetPasswordCooldownTimer();
        return;
      }

      const secondsRemaining = Math.ceil(remainingMs / 1000);
      if (resetBtn) {
        resetBtn.disabled = true;
        resetBtn.textContent = `Wait ${secondsRemaining}s`;
      }
      if (appStatus) {
        appStatus.textContent = `Password reset email sent. You can request another in ${secondsRemaining}s.`;
        appStatus.style.color = '#888';
      }
    };

    tick();
    resetPasswordCooldownTimer = setInterval(tick, 1000);
  }

  function saveStateForCurrentUser() {
    if (!currentUserId || !isAppAuthenticated) return;

    try {
      const state = captureState();
      localStorage.setItem(getUserStateStorageKey(currentUserId), JSON.stringify(state));
    } catch (error) {
      // ignore storage errors
    }
  }

  function loadStateForCurrentUser() {
    if (!currentUserId) return;

    try {
      const raw = localStorage.getItem(getUserStateStorageKey(currentUserId));
      if (!raw) {
        restoreState(INITIAL_STATE);
        pushHistorySnapshot();
        return;
      }

      const parsed = JSON.parse(raw);
      restoreState(parsed);
      pushHistorySnapshot();
    } catch (error) {
      restoreState(INITIAL_STATE);
      pushHistorySnapshot();
    }
  }

  function isSupabaseConfigured() {
    const normalizedUrl = (SUPABASE_URL || '').trim();
    const normalizedKey = (SUPABASE_ANON_KEY || '').trim();

    if (!normalizedUrl || !normalizedKey) {
      return false;
    }

    const placeholderMarkers = ['YOUR_PROJECT_ID', 'YOUR_SUPABASE_ANON_KEY', 'YOUR_ANON_KEY', '<SUPABASE_URL>', '<SUPABASE_ANON_KEY>'];
    const combinedValue = `${normalizedUrl} ${normalizedKey}`;

    return !placeholderMarkers.some(marker => combinedValue.includes(marker));
  }

  function ensureSupabaseClient() {
    if (supabaseClient) {
      return true;
    }

    if (!window.supabase || !isSupabaseConfigured()) {
      return false;
    }

    try {
      supabaseClient = window.supabase.createClient(SUPABASE_URL.trim(), SUPABASE_ANON_KEY.trim());
      return true;
    } catch (error) {
      return false;
    }
  }

  function appLogin() {
    const email = document.getElementById('app-email').value.trim();
    const password = document.getElementById('app-password').value;
    const appStatus = document.getElementById('app-login-status');

    if (authMode !== 'signin') {
      setAuthMode('signin');
    }

    if (!ensureSupabaseClient()) {
      appStatus.textContent = 'Set SUPABASE_URL and SUPABASE_ANON_KEY first';
      appStatus.style.color = '#b42318';
      return;
    }

    if (!email || !password) {
      appStatus.textContent = 'Enter email and password';
      appStatus.style.color = '#b42318';
      return;
    }

    supabaseClient.auth.signInWithPassword({ email, password })
      .then(({ error }) => {
        if (error) {
          appStatus.textContent = error.message;
          appStatus.style.color = '#b42318';
          return;
        }

        if (currentUserId) {
          loadStateForCurrentUser();
        }
        showAppShell();
        appStatus.textContent = 'Signed in';
        appStatus.style.color = '#888';
      })
      .catch(() => {
        appStatus.textContent = 'Unable to sign in right now. Please try again.';
        appStatus.style.color = '#b42318';
      });
  }

  function appSignUp() {
    const email = document.getElementById('app-email').value.trim();
    const password = document.getElementById('app-password').value;
    const confirmPassword = document.getElementById('app-confirm-password').value;
    const appStatus = document.getElementById('app-login-status');

    if (authMode !== 'signup') {
      setAuthMode('signup');
      appStatus.textContent = 'Create account: enter password and confirm password';
      appStatus.style.color = '#888';
      return;
    }

    if (!ensureSupabaseClient()) {
      appStatus.textContent = 'Set SUPABASE_URL and SUPABASE_ANON_KEY first';
      appStatus.style.color = '#b42318';
      return;
    }

    if (!email || !password) {
      appStatus.textContent = 'Enter email and password';
      appStatus.style.color = '#b42318';
      return;
    }

    if (password.length < 6) {
      appStatus.textContent = 'Password must be at least 6 characters';
      appStatus.style.color = '#b42318';
      return;
    }

    if (password !== confirmPassword) {
      appStatus.textContent = 'Passwords do not match';
      appStatus.style.color = '#b42318';
      return;
    }

    const emailRedirectTo = getAuthEmailRedirectUrl();
    const signUpPayload = emailRedirectTo
      ? { email, password, options: { emailRedirectTo } }
      : { email, password };

    supabaseClient.auth.signUp(signUpPayload)
      .then(async ({ data, error }) => {
        if (error) {
          appStatus.textContent = error.message;
          appStatus.style.color = '#b42318';
          return;
        }

        const requiresEmailConfirmation = !data?.session;

        if (data?.session) {
          await supabaseClient.auth.signOut();
        }

        setAuthMode('signin');
        document.getElementById('app-password').value = '';
        document.getElementById('app-confirm-password').value = '';
        appStatus.textContent = requiresEmailConfirmation
          ? 'Account created. Check your email (and spam) for a confirmation link, then sign in.'
          : 'Account created. Please sign in.';
        appStatus.style.color = '#888';

        if (requiresEmailConfirmation) {
          showToast('Check your email to confirm your account');
        }
      })
      .catch(() => {
        appStatus.textContent = 'Unable to create account right now. Please try again.';
        appStatus.style.color = '#b42318';
      });
  }

  function appResetPassword() {
    const emailInput = document.getElementById('app-email');
    const appStatus = document.getElementById('app-login-status');
    const resetBtn = document.getElementById('reset-password-btn');
    const email = emailInput?.value.trim() || '';

    if (!appStatus) return;

    if (resetBtn?.disabled) {
      return;
    }

    const now = Date.now();
    if (resetPasswordBlockedUntil > now) {
      startResetPasswordCooldown(resetBtn, appStatus);
      return;
    }

    if (!ensureSupabaseClient()) {
      appStatus.textContent = 'Set SUPABASE_URL and SUPABASE_ANON_KEY first';
      appStatus.style.color = '#b42318';
      return;
    }

    if (!email) {
      appStatus.textContent = 'Enter your account email to reset password';
      appStatus.style.color = '#b42318';
      return;
    }

    const redirectTo = getAuthEmailRedirectUrl() || undefined;
    const payload = redirectTo ? { redirectTo } : undefined;

    if (resetBtn) {
      resetBtn.disabled = true;
      resetBtn.textContent = 'Sending...';
    }

    supabaseClient.auth.resetPasswordForEmail(email, payload)
      .then(({ error }) => {
        if (error) {
          appStatus.textContent = error.message;
          appStatus.style.color = '#b42318';
          if (resetBtn) {
            resetBtn.disabled = false;
            resetBtn.textContent = 'Reset Password';
          }
          return;
        }

        appStatus.textContent = 'Password reset email sent. Check inbox/spam, then use the link to set a new password.';
        appStatus.style.color = '#888';
        resetPasswordBlockedUntil = Date.now() + RESET_PASSWORD_COOLDOWN_MS;
        startResetPasswordCooldown(resetBtn, appStatus);
      })
      .catch(() => {
        appStatus.textContent = 'Unable to send reset email right now. Please try again.';
        appStatus.style.color = '#b42318';
        if (resetBtn) {
          resetBtn.disabled = false;
          resetBtn.textContent = 'Reset Password';
        }
      });
  }

  function ensureRuntimeLogoutButton() {
    let runtimeBtn = document.getElementById('runtime-logout-btn');

    if (!runtimeBtn) {
      runtimeBtn = document.createElement('button');
      runtimeBtn.id = 'runtime-logout-btn';
      runtimeBtn.textContent = 'Log Out';
      runtimeBtn.type = 'button';
      runtimeBtn.onclick = appLogout;
      runtimeBtn.style.cssText = 'position:fixed;top:20px;right:24px;z-index:2147483647;background:#f7f4ee;color:#1f1a14;border:1px solid #5d5448;border-radius:2px;padding:7px 11px;font-family:\'DM Mono\', monospace;font-size:11px;font-weight:500;letter-spacing:0.04em;cursor:pointer;box-shadow:none;';
      document.body.appendChild(runtimeBtn);
    }

    document.querySelectorAll('#logout-btn, #logout-page-btn, #logout-visible-btn').forEach((button) => {
      button.style.display = 'none';
    });

    const appShell = document.getElementById('app-shell');
    const isSignedInView = !!appShell && !appShell.classList.contains('app-hidden');
    runtimeBtn.style.display = isSignedInView ? 'block' : 'none';
  }

  function appLogout() {
    const appStatus = document.getElementById('app-login-status');

    if (!supabaseClient) {
      isAppAuthenticated = false;
      currentUserId = null;
      customizeFailedAttempts = 0;
      customizeUnlockBlockedUntil = 0;
      resetPasswordBlockedUntil = 0;
      clearResetPasswordCooldownTimer();
      document.getElementById('app-shell').classList.add('app-hidden');
      document.getElementById('app-lock').classList.remove('app-hidden');
      if (appStatus) {
        appStatus.textContent = 'Signed out';
        appStatus.style.color = '#888';
      }
      ensureRuntimeLogoutButton();
      showToast('Signed out');
      return;
    }

    supabaseClient.auth.signOut().then(({ error }) => {
      if (error) {
        if (appStatus) {
          appStatus.textContent = error.message;
          appStatus.style.color = '#b42318';
        }
        return;
      }

      isAppAuthenticated = false;
      currentUserId = null;
      customizeFailedAttempts = 0;
      customizeUnlockBlockedUntil = 0;
      resetPasswordBlockedUntil = 0;
      clearResetPasswordCooldownTimer();
      isAdmin = true;
      setEditMode(false);
      setAuthMode('signin');
      document.getElementById('app-password').value = '';
      document.getElementById('app-confirm-password').value = '';
      document.getElementById('app-shell').classList.add('app-hidden');
      document.getElementById('app-lock').classList.remove('app-hidden');

      if (appStatus) {
        appStatus.textContent = 'Signed out';
        appStatus.style.color = '#888';
      }
      ensureRuntimeLogoutButton();
      showToast('Signed out');
    });
  }

  function showAppShell() {
    isAppAuthenticated = true;
    const appStatus = document.getElementById('app-login-status');
    if (appStatus) {
      appStatus.textContent = 'Signed in';
      appStatus.style.color = '#888';
    }
    document.getElementById('app-shell').classList.remove('app-hidden');
    document.getElementById('app-lock').classList.add('app-hidden');
    ensureRuntimeLogoutButton();
  }

  function initSupabaseAuth() {
    const appStatus = document.getElementById('app-login-status');
    if (!appStatus) return;

    if (!window.supabase || !isSupabaseConfigured()) {
      appStatus.textContent = 'Add your Supabase URL + anon key to enable database login';
      appStatus.style.color = '#b42318';
      return;
    }

    if (!ensureSupabaseClient()) {
      appStatus.textContent = 'Unable to initialize Supabase client. Check URL/key values.';
      appStatus.style.color = '#b42318';
      return;
    }

    supabaseClient.auth.getSession().then(({ data }) => {
      const session = data?.session;
      currentUserId = session?.user?.id || null;

      if (session) {
        loadStateForCurrentUser();
        showAppShell();
      }
    });

    supabaseClient.auth.onAuthStateChange((event, session) => {
      currentUserId = session?.user?.id || null;

      if (session) {
        loadStateForCurrentUser();
        showAppShell();
        return;
      }

      isAppAuthenticated = false;
      isAdmin = true;
      setEditMode(false);
      document.getElementById('app-shell').classList.add('app-hidden');
      document.getElementById('app-lock').classList.remove('app-hidden');
      ensureRuntimeLogoutButton();
    });
  }

  async function unlockCustomize() {
    const passwordField = document.getElementById('customize-password');
    if (!passwordField) return;

    const now = Date.now();
    const persistedBlockedUntil = loadCustomizeLockoutUntil(currentUserId);
    if (persistedBlockedUntil > customizeUnlockBlockedUntil) {
      customizeUnlockBlockedUntil = persistedBlockedUntil;
    }

    if (customizeUnlockBlockedUntil > now) {
      const secondsRemaining = Math.ceil((customizeUnlockBlockedUntil - now) / 1000);
      showToast(`Try again in ${secondsRemaining}s`);
      isAdmin = true;
      setEditMode(false);
      return;
    }

    if (!isAppAuthenticated || !currentUserId) {
      showToast('Sign in first to unlock customization');
      isAdmin = true;
      setEditMode(false);
      return;
    }

    const password = passwordField.value;
    if (!password) {
      showToast('Enter your account password');
      isAdmin = true;
      setEditMode(false);
      return;
    }

    if (!supabaseClient) {
      showToast('Password verification unavailable');
      isAdmin = true;
      setEditMode(false);
      return;
    }

    try {
      const { data: userData, error: userError } = await supabaseClient.auth.getUser();
      const userEmail = userData?.user?.email;

      if (userError || !userEmail) {
        showToast('Unable to verify session. Sign in again');
        isAdmin = true;
        setEditMode(false);
        return;
      }

      const { error: signInError } = await supabaseClient.auth.signInWithPassword({
        email: userEmail,
        password
      });

      if (signInError) {
        customizeFailedAttempts += 1;
        const attemptsLeft = CUSTOMIZE_MAX_FAILED_ATTEMPTS - customizeFailedAttempts;
        if (attemptsLeft <= 0) {
          customizeUnlockBlockedUntil = Date.now() + CUSTOMIZE_LOCKOUT_MS;
          customizeFailedAttempts = 0;
          saveCustomizeLockoutUntil(currentUserId, customizeUnlockBlockedUntil);
          showToast('Unlock disabled for 60 seconds');
        } else {
          showToast(`Invalid password. ${attemptsLeft} attempt(s) left`);
        }
        passwordField.value = '';
        isAdmin = true;
        setEditMode(false);
        return;
      }

      customizeFailedAttempts = 0;
      customizeUnlockBlockedUntil = 0;
      saveCustomizeLockoutUntil(currentUserId, 0);
      isAdmin = true;
      syncEditModeWithCustomizePanel();
      passwordField.value = '';
    } catch (error) {
      showToast('Unable to verify password right now');
      isAdmin = true;
      setEditMode(false);
    }
  }

  function lockCustomize() {
    isAdmin = true;
    syncEditModeWithCustomizePanel();
  }

  function makeCell(value = '', isFirst = false) {
    const td = document.createElement('td');
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.value = value;
    inp.spellcheck = false;
    if (isFirst) {
      inp.readOnly = true;
      inp.tabIndex = -1;
    }
    inp.disabled = !isTableEditEnabled();
    inp.addEventListener('input', () => applyEventChip(inp));
    inp.addEventListener('focus', () => selectEditableCell(inp));
    inp.addEventListener('click', (event) => event.stopPropagation());
    inp.addEventListener('change', () => {
      pushHistorySnapshot();
      updateNowLine();
    });
    td.addEventListener('click', () => {
      if (isFirst) {
        const tr = td.closest('tr');
        const rows = Array.from(document.querySelectorAll('#tbody tr'));
        const rowIndex = rows.indexOf(tr);
        if (rowIndex !== -1) {
          selectRowByIndex(rowIndex);
          return;
        }
      }

      if (isSmallScreen() && !isFirst) {
        openCellEditSheet(inp);
      }
      selectEditableCell(inp);
    });
    inp.addEventListener('dblclick', () => expandToTextarea(inp, td));
    applyEventChip(inp);
    td.appendChild(inp);
    return td;
  }

  function expandToTextarea(inp, td) {
    const ta = document.createElement('textarea');
    ta.value = inp.value;
    ta.rows = 3;
    ta.spellcheck = false;
    ta.disabled = !isTableEditEnabled();
    ta.addEventListener('input', () => applyEventChip(ta));
    ta.addEventListener('focus', () => selectEditableCell(ta));
    td.replaceChild(ta, inp);
    applyEventChip(ta);
    ta.focus();
    ta.addEventListener('blur', () => {
      const newInp = document.createElement('input');
      newInp.type = 'text';
      newInp.value = ta.value;
      newInp.spellcheck = false;
      newInp.disabled = !isTableEditEnabled();
      newInp.addEventListener('input', () => applyEventChip(newInp));
      newInp.addEventListener('focus', () => selectEditableCell(newInp));
      newInp.addEventListener('change', () => {
        pushHistorySnapshot();
        updateNowLine();
      });
      newInp.addEventListener('dblclick', () => expandToTextarea(newInp, td));
      td.replaceChild(newInp, ta);
      applyEventChip(newInp);
      pushHistorySnapshot();
      updateNowLine();
    });
  }

  function addRow(data = []) {
    if (!isAdmin && data.length === 0) return;
    if (isAdmin && data.length === 0) pushHistorySnapshot();

    const colCount = getColCount();
    const tr = document.createElement('tr');

    for (let i = 0; i < colCount; i++) {
      const td = makeCell(data[i] || '', i === 0);
      tr.appendChild(td);
    }

    // action cell
    const actionTd = document.createElement('td');
    actionTd.className = 'action-cell';
    const delBtn = document.createElement('button');
    delBtn.className = 'row-del';
    delBtn.textContent = '×';
    delBtn.title = 'Delete row';
    delBtn.disabled = !isTableEditEnabled();
    delBtn.onclick = () => {
      if (!isAdmin) return;
      pushHistorySnapshot();
      tr.remove();
      updateNowLine();
    };
    actionTd.appendChild(delBtn);
    tr.appendChild(actionTd);

    document.getElementById('tbody').appendChild(tr);
    renderColumnThemePresets();
    updateTodayHighlight();
    updateNowLine();
    if (data.length === 0) {
      showToast('Row added');
    }
  }

  async function removeRow() {
    if (!isAdmin) return;

    const rows = document.querySelectorAll('#tbody tr');
    if (!rows.length) return;

    const rowCount = rows.length;
    const { confirmed, value } = await openActionDialog({
      title: 'Remove row',
      message: `Enter a row number between 1 and ${rowCount}`,
      confirmText: 'Remove',
      showInput: true,
      inputValue: String(rowCount),
      inputPlaceholder: `1-${rowCount}`
    });
    if (!confirmed) return;

    const rowNumber = Number(value);
    if (!Number.isInteger(rowNumber) || rowNumber < 1 || rowNumber > rowCount) {
      showToast('Invalid row number');
      return;
    }

    pushHistorySnapshot();
    rows[rowNumber - 1].remove();
    clearRowSelection();
    updateTodayHighlight();
    updateNowLine();
    showToast('Row removed');
  }

  function addColumn() {
    if (!isAdmin) return;
    pushHistorySnapshot();

    const headerRow = document.getElementById('header-row');
    const actionTh = headerRow.lastElementChild;
    const th = document.createElement('th');
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.value = 'New Column';
    inp.spellcheck = false;
    inp.disabled = !isTableEditEnabled();
    th.appendChild(inp);
    headerRow.insertBefore(th, actionTh);

    document.querySelectorAll('#tbody tr').forEach(tr => {
      const actionTd = tr.lastElementChild;
      const td = makeCell('');
      tr.insertBefore(td, actionTd);
    });

    if (Object.keys(columnThemePresetIndices).length > 0) {
      applyThemePresetToAllCells(activeCellsPresetIndex, { pushHistory: false });
    }

    bindHeaderSelection();
    refreshFocusDaySelect();
    applyTimetableColumnVisibility();
    renderColumnThemePresets();
    updateTodayHighlight();
    updateNowLine();
    showToast('Column added');
  }

  async function removeColumn() {
    if (!isAdmin) return;

    const minimumColumns = 8;
    const colCount = getColCount();
    if (colCount <= minimumColumns) return;

    const removableColumns = [];
    const headerInputs = document.querySelectorAll('#header-row th input');
    for (let i = minimumColumns; i < colCount; i++) {
      const title = (headerInputs[i]?.value || `Column ${i + 1}`).trim();
      removableColumns.push({
        number: i + 1,
        label: title
      });
    }

    const choicesText = removableColumns.map(col => `${col.number}: ${col.label}`).join('\n');
    const defaultChoice = String(removableColumns[removableColumns.length - 1].number);
    const { confirmed, value } = await openActionDialog({
      title: 'Remove column',
      message: `Choose a column number:\n${choicesText}`,
      confirmText: 'Remove',
      showInput: true,
      inputValue: defaultChoice,
      inputPlaceholder: 'Column number'
    });
    if (!confirmed) return;

    const chosenColumn = Number(value);
    const selected = removableColumns.find(col => col.number === chosenColumn);
    if (!selected) {
      showToast('Invalid column number');
      return;
    }

    pushHistorySnapshot();

    const headerRow = document.getElementById('header-row');
    const removableHeader = headerRow.children[selected.number - 1];
    if (removableHeader) {
      removableHeader.remove();
    }

    document.querySelectorAll('#tbody tr').forEach(tr => {
      const removableCell = tr.children[selected.number - 1];
      if (removableCell) {
        removableCell.remove();
      }
    });

    shiftColumnThemePresetsAfterRemoval(selected.number - 1);
    renderColumnThemePresets();

    clearColumnSelection();
    bindHeaderSelection();
    refreshFocusDaySelect();
    applyTimetableColumnVisibility();
    updateTodayHighlight();
    updateNowLine();
    showToast('Column removed');
  }

  function removeSelectedItem() {
    if (!isAdmin) return;

    if (selectedRowIndex !== null) {
      const rows = document.querySelectorAll('#tbody tr');
      if (!rows.length || selectedRowIndex >= rows.length) {
        clearRowSelection();
        return;
      }

      pushHistorySnapshot();
      rows[selectedRowIndex].remove();
      clearRowSelection();
      updateTodayHighlight();
      updateNowLine();
      showToast('Row removed');
      return;
    }

    if (selectedColumnIndex !== null) {
      const minimumColumns = 8;
      if (selectedColumnIndex + 1 <= minimumColumns) {
        showToast('Base columns cannot be removed');
        return;
      }

      pushHistorySnapshot();
      const headerRow = document.getElementById('header-row');
      const removableHeader = headerRow.children[selectedColumnIndex];
      if (removableHeader) {
        removableHeader.remove();
      }

      document.querySelectorAll('#tbody tr').forEach(tr => {
        const removableCell = tr.children[selectedColumnIndex];
        if (removableCell) {
          removableCell.remove();
        }
      });

      shiftColumnThemePresetsAfterRemoval(selectedColumnIndex);
      renderColumnThemePresets();

      clearColumnSelection();
      bindHeaderSelection();
      refreshFocusDaySelect();
      applyTimetableColumnVisibility();
      updateTodayHighlight();
      updateNowLine();
      showToast('Column removed');
      return;
    }

    if (selectedEditableCell) {
      pushHistorySnapshot();
      selectedEditableCell.value = '';
      selectedEditableCell.classList.remove('custom-cell-color');
      selectedEditableCell.style.removeProperty('--custom-cell-color');
      applyEventChip(selectedEditableCell);
      updateNowLine();
      showToast('Cell cleared');
      return;
    }

    showToast('Select a row, column, or cell first');
  }

  async function clearAll() {
    if (!isAdmin) return;

    const { confirmed } = await openActionDialog({
      title: 'Clear content',
      message: 'Clear all timetable cell content?',
      confirmText: 'Clear'
    });
    if (!confirmed) return;
    pushHistorySnapshot();
    document.querySelectorAll('#tbody input, #tbody textarea').forEach(el => el.value = '');
    document.querySelectorAll('#tbody input, #tbody textarea').forEach(el => applyEventChip(el));
    updateNowLine();
    showToast('All cell content cleared');
  }

  function parseTimeToMinutes(text) {
    const normalized = (text || '').trim().toUpperCase();
    const match = normalized.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/);
    if (!match) return null;

    let hour = parseInt(match[1], 10);
    const minute = parseInt(match[2] || '0', 10);
    const meridiem = match[3];

    if (hour === 12) hour = 0;
    if (meridiem === 'PM') hour += 12;

    return hour * 60 + minute;
  }

  function formatMinutesToSlotLabel(minutes) {
    const h24 = Math.floor(minutes / 60) % 24;
    const mm = Math.floor(minutes % 60);
    const suffix = h24 >= 12 ? 'PM' : 'AM';
    const h12 = h24 % 12 || 12;
    return `${h12}:${String(mm).padStart(2, '0')} ${suffix}`;
  }

  function formatMinutesTo12h(minutes) {
    const wholeMinutes = Math.floor(minutes);
    const h24 = Math.floor(wholeMinutes / 60);
    const mm = wholeMinutes % 60;
    const seconds = Math.floor((minutes - wholeMinutes) * 60);
    const suffix = h24 >= 12 ? 'PM' : 'AM';
    const h12 = h24 % 12 || 12;
    return `${h12}:${String(mm).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${suffix}`;
  }

  function minuteToOptionValue(minutes) {
    return String(minutes).padStart(4, '0');
  }

  function optionValueToMinute(value) {
    const parsed = Number(value);
    if (!Number.isFinite(parsed)) return 0;
    return Math.max(0, Math.min(1439, parsed));
  }

  function buildTimeSelectOptions() {
    const startSelect = document.getElementById('time-start-select');
    const endSelect = document.getElementById('time-end-select');
    if (!startSelect || !endSelect) return;

    const optionsHtml = [];
    for (let minutes = 0; minutes < 24 * 60; minutes += 15) {
      optionsHtml.push(`<option value="${minuteToOptionValue(minutes)}">${formatMinutesToSlotLabel(minutes)}</option>`);
    }

    startSelect.innerHTML = optionsHtml.join('');
    endSelect.innerHTML = optionsHtml.join('');
  }

  function normalizeTimeSettings(raw = {}) {
    const intervalMinutes = [15, 30, 60].includes(Number(raw.intervalMinutes))
      ? Number(raw.intervalMinutes)
      : DEFAULT_TIME_SETTINGS.intervalMinutes;

    const fullDay = raw.fullDay === true;

    if (fullDay) {
      return {
        intervalMinutes,
        startMinute: 0,
        endMinute: (24 * 60) - intervalMinutes,
        fullDay: true
      };
    }

    let startMinute = Number.isFinite(Number(raw.startMinute)) ? Number(raw.startMinute) : DEFAULT_TIME_SETTINGS.startMinute;
    let endMinute = Number.isFinite(Number(raw.endMinute)) ? Number(raw.endMinute) : DEFAULT_TIME_SETTINGS.endMinute;

    startMinute = Math.max(0, Math.min(1439, Math.floor(startMinute / 15) * 15));
    endMinute = Math.max(0, Math.min(1439, Math.floor(endMinute / 15) * 15));

    if (endMinute < startMinute) {
      endMinute = startMinute;
    }

    const stepCount = Math.max(0, Math.floor((endMinute - startMinute) / intervalMinutes));
    endMinute = startMinute + (stepCount * intervalMinutes);

    return {
      intervalMinutes,
      startMinute,
      endMinute,
      fullDay: false
    };
  }

  function setTimeSettingsUIState() {
    const intervalSelect = document.getElementById('time-interval-select');
    const modeSelect = document.getElementById('time-range-mode');
    const startSelect = document.getElementById('time-start-select');
    const endSelect = document.getElementById('time-end-select');
    if (!intervalSelect || !modeSelect || !startSelect || !endSelect) return;

    intervalSelect.value = String(timeSettings.intervalMinutes);
    modeSelect.value = timeSettings.fullDay ? 'full' : 'custom';
    startSelect.value = minuteToOptionValue(timeSettings.startMinute);
    endSelect.value = minuteToOptionValue(timeSettings.endMinute);

    const disableRange = timeSettings.fullDay;
    startSelect.disabled = disableRange;
    endSelect.disabled = disableRange;

    updateTimePresetActiveState();
  }

  function getMatchingTimePresetName(settings = timeSettings) {
    const normalized = normalizeTimeSettings(settings);

    if (normalized.fullDay) {
      return 'full';
    }

    if (normalized.startMinute === (1 * 60) && normalized.endMinute === (4 * 60)) {
      return 'early';
    }

    if (normalized.startMinute === (9 * 60) && normalized.endMinute === (17 * 60)) {
      return 'workday';
    }

    return null;
  }

  function updateTimePresetActiveState() {
    const earlyBtn = document.getElementById('time-preset-early');
    const workdayBtn = document.getElementById('time-preset-workday');
    const fullBtn = document.getElementById('time-preset-full');
    if (!earlyBtn || !workdayBtn || !fullBtn) return;

    const activePreset = getMatchingTimePresetName(timeSettings);

    earlyBtn.classList.toggle('time-preset-active', activePreset === 'early');
    workdayBtn.classList.toggle('time-preset-active', activePreset === 'workday');
    fullBtn.classList.toggle('time-preset-active', activePreset === 'full');
  }

  function getCurrentRowsData() {
    return Array.from(document.querySelectorAll('#tbody tr')).map(row => {
      const cells = Array.from(row.querySelectorAll('td input, td textarea'));
      return cells.map(cell => cell.value);
    });
  }

  function getTimeSlots(settings = timeSettings) {
    const normalized = normalizeTimeSettings(settings);
    const slots = [];
    for (let minutes = normalized.startMinute; minutes <= normalized.endMinute; minutes += normalized.intervalMinutes) {
      slots.push(minutes);
    }
    return slots;
  }

  function getTimedEventMinuteRange(eventItem) {
    const startMinutes = timeInputToMinutes(eventItem?.startTime || '');
    const endMinutes = timeInputToMinutes(eventItem?.endTime || '');
    if (startMinutes === null || endMinutes === null || endMinutes <= startMinutes) {
      return null;
    }
    return { startMinutes, endMinutes };
  }

  function getDisplayedWeekIsoKeys() {
    const monday = getDisplayedMonday();
    const isoKeys = [];
    for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
      const dayDate = new Date(monday);
      dayDate.setDate(monday.getDate() + dayOffset);
      isoKeys.push(getIsoDateKey(dayDate));
    }
    return isoKeys;
  }

  function refreshTimedEventsOnTimetable() {
    const tbody = document.getElementById('tbody');
    if (!tbody) return;

    document.querySelectorAll('.timed-event-overlay').forEach((overlay) => overlay.remove());
    document.querySelectorAll('#tbody td.timed-event-cell, #tbody td.timed-event-overlap').forEach((cell) => {
      cell.classList.remove('timed-event-cell', 'timed-event-overlap');
    });

    const rows = Array.from(tbody.querySelectorAll('tr'));
    if (!rows.length) return;

    const slotStarts = rows.map((row) => {
      const timeCellInput = row.children[0]?.querySelector('input, textarea');
      return parseTimeToMinutes(timeCellInput?.value || '');
    });

    if (slotStarts.some((minutes) => minutes === null)) return;

    const weekIsoKeys = getDisplayedWeekIsoKeys();

    rows.forEach((row, rowIndex) => {
      const slotStart = slotStarts[rowIndex];
      const nextStart = slotStarts[rowIndex + 1];
      const slotEnd = Number.isFinite(nextStart)
        ? nextStart
        : Math.min((24 * 60), slotStart + (timeSettings.intervalMinutes || 30));

      for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
        const td = row.children[dayOffset + 1];
        if (!td) continue;

        const isoKey = weekIsoKeys[dayOffset];
        const dayEvents = Array.isArray(userCalendarEvents[isoKey]) ? userCalendarEvents[isoKey] : [];
        const matches = dayEvents.filter((eventItem) => {
          const range = getTimedEventMinuteRange(eventItem);
          if (!range) return false;
          return range.startMinutes < slotEnd && range.endMinutes > slotStart;
        });

        if (!matches.length) continue;

        td.classList.add('timed-event-cell');
        if (matches.length > 1) {
          td.classList.add('timed-event-overlap');
        }

        const overlay = document.createElement('div');
        overlay.className = 'timed-event-overlay';

        const sortedMatches = [...matches].sort((firstEvent, secondEvent) => {
          const firstRange = getTimedEventMinuteRange(firstEvent);
          const secondRange = getTimedEventMinuteRange(secondEvent);

          const firstStart = firstRange?.startMinutes ?? 0;
          const secondStart = secondRange?.startMinutes ?? 0;
          if (firstStart !== secondStart) {
            return firstStart - secondStart;
          }

          return String(firstEvent.title || '').localeCompare(String(secondEvent.title || ''));
        });

        sortedMatches.forEach((eventItem) => {
          const badge = document.createElement('div');
          const typeClass = eventItem.type === 'birthday'
            ? 'timed-event-badge-birthday'
            : 'timed-event-badge-event';
          badge.className = `timed-event-badge ${typeClass}`;
          if (sortedMatches.length > 1) {
            badge.classList.add('timed-event-badge-overlap');
          }

          const startLabel = formatTimeInputLabel(eventItem.startTime || '');
          const endLabel = formatTimeInputLabel(eventItem.endTime || '');
          const title = eventItem.title || 'Event';
          badge.textContent = `${startLabel} - ${endLabel} • ${title}`;
          overlay.appendChild(badge);
        });

        td.appendChild(overlay);
      }
    });
  }

  function countTimedEventOverlapsForDate(isoKey) {
    const dayEvents = Array.isArray(userCalendarEvents[isoKey]) ? userCalendarEvents[isoKey] : [];
    const timedEvents = dayEvents
      .map((eventItem) => ({ eventItem, range: getTimedEventMinuteRange(eventItem) }))
      .filter((entry) => !!entry.range)
      .sort((a, b) => a.range.startMinutes - b.range.startMinutes);

    let overlapCount = 0;
    for (let i = 0; i < timedEvents.length; i++) {
      const current = timedEvents[i];
      for (let j = i + 1; j < timedEvents.length; j++) {
        const next = timedEvents[j];
        if (next.range.startMinutes >= current.range.endMinutes) {
          break;
        }
        overlapCount += 1;
      }
    }

    return overlapCount;
  }

  function rebuildRowsForTimeSettings(existingRowsData = []) {
    const tbody = document.getElementById('tbody');
    const dayColumnCount = Math.max(0, getColCount() - 1);
    const slots = getTimeSlots(timeSettings);

    tbody.innerHTML = '';

    slots.forEach((slotMinute, rowIndex) => {
      const rowData = [];
      rowData[0] = formatMinutesToSlotLabel(slotMinute);
      for (let col = 1; col <= dayColumnCount; col++) {
        rowData[col] = existingRowsData[rowIndex]?.[col] || '';
      }
      addRow(rowData);
    });

    clearCellSelection();
    clearRowSelection();
    clearColumnSelection();
    bindHeaderSelection();
    applyTimetableColumnVisibility();
    updateTodayHighlight();
    updateNowLine();
    refreshTimedEventsOnTimetable();
  }

  function applyTimeSettings(nextSettings, options = {}) {
    const { pushHistory = false, existingRowsData = null } = options;
    if (pushHistory) {
      pushHistorySnapshot();
    }

    const rowsData = Array.isArray(existingRowsData) ? existingRowsData : getCurrentRowsData();
    timeSettings = normalizeTimeSettings(nextSettings);
    setTimeSettingsUIState();
    rebuildRowsForTimeSettings(rowsData);
  }

  function inferTimeSettingsFromRows(rows) {
    if (!Array.isArray(rows) || rows.length < 2) {
      return { ...DEFAULT_TIME_SETTINGS };
    }

    const first = parseTimeToMinutes(rows[0]?.[0]);
    const second = parseTimeToMinutes(rows[1]?.[0]);
    if (first === null || second === null) {
      return { ...DEFAULT_TIME_SETTINGS };
    }

    const intervalMinutes = second - first;
    if (![15, 30, 60].includes(intervalMinutes)) {
      return { ...DEFAULT_TIME_SETTINGS };
    }

    const startMinute = first;
    const endMinute = startMinute + (intervalMinutes * (rows.length - 1));
    const fullDay = startMinute === 0 && endMinute === (24 * 60) - intervalMinutes;

    return normalizeTimeSettings({
      intervalMinutes,
      startMinute,
      endMinute,
      fullDay
    });
  }

  function onTimeSettingsChange() {
    const intervalSelect = document.getElementById('time-interval-select');
    const modeSelect = document.getElementById('time-range-mode');
    const startSelect = document.getElementById('time-start-select');
    const endSelect = document.getElementById('time-end-select');
    if (!intervalSelect || !modeSelect || !startSelect || !endSelect) return;

    const next = normalizeTimeSettings({
      intervalMinutes: Number(intervalSelect.value),
      fullDay: modeSelect.value === 'full',
      startMinute: optionValueToMinute(startSelect.value),
      endMinute: optionValueToMinute(endSelect.value)
    });

    applyTimeSettings(next, { pushHistory: true });
  }

  function applyTimePreset(presetName) {
    let next = null;

    if (presetName === 'early') {
      next = normalizeTimeSettings({
        intervalMinutes: 60,
        startMinute: 1 * 60,
        endMinute: 4 * 60,
        fullDay: false
      });
    } else if (presetName === 'workday') {
      next = normalizeTimeSettings({
        intervalMinutes: 60,
        startMinute: 9 * 60,
        endMinute: 17 * 60,
        fullDay: false
      });
    } else if (presetName === 'full') {
      next = normalizeTimeSettings({
        intervalMinutes: timeSettings.intervalMinutes,
        fullDay: true
      });
    }

    if (!next) return;
    applyTimeSettings(next, { pushHistory: true });
  }

  function applyEventChip(el) {
    const value = (el.value || '').trim().toLowerCase();
    el.classList.remove('event-chip', 'event-deep', 'event-meeting', 'event-lunch', 'event-break', 'event-project');

    if (!value) return;
    el.classList.add('event-chip');

    if (value.includes('deep')) el.classList.add('event-deep');
    else if (value.includes('meeting') || value.includes('standup') || value.includes('1:1')) el.classList.add('event-meeting');
    else if (value.includes('lunch')) el.classList.add('event-lunch');
    else if (value.includes('break')) el.classList.add('event-break');
    else if (value.includes('project') || value.includes('workshop')) el.classList.add('event-project');
  }

  function selectEditableCell(el) {
    clearRowSelection();
    clearColumnSelection();
    if (selectedEditableCell && selectedEditableCell !== el) {
      selectedEditableCell.classList.remove('selected-cell');
    }
    selectedEditableCell = el;
    selectedEditableCell.classList.add('selected-cell');
    updateThemePresetActiveState();
  }

  function getColorActionTargets() {
    const getCellColumnIndex = (el) => {
      const td = el?.closest('td');
      if (!td || !td.parentElement) return -1;
      return Array.from(td.parentElement.children).indexOf(td);
    };

    if (selectedEditableCell) {
      const colIndex = getCellColumnIndex(selectedEditableCell);
      if (colIndex <= 0) {
        return [];
      }
      return [selectedEditableCell];
    }

    const activeEl = document.activeElement;
    if (activeEl && activeEl.matches('#tbody input, #tbody textarea')) {
      const colIndex = getCellColumnIndex(activeEl);
      if (colIndex > 0) {
        selectEditableCell(activeEl);
        return [activeEl];
      }
    }

    if (selectedColumnIndex !== null) {
      if (selectedColumnIndex <= 0) {
        return [];
      }

      return Array.from(document.querySelectorAll('#tbody tr'))
        .map((row) => row.children[selectedColumnIndex]?.querySelector('input, textarea'))
        .filter(Boolean);
    }

    if (selectedRowIndex !== null) {
      const row = document.querySelectorAll('#tbody tr')[selectedRowIndex];
      if (!row) return [];

      return Array.from(row.querySelectorAll('td input, td textarea'))
        .filter((el) => getCellColumnIndex(el) > 0);
    }

    return Array.from(document.querySelectorAll('#tbody tr'))
      .flatMap((row) => Array.from(row.querySelectorAll('td input, td textarea')))
      .filter((el) => getCellColumnIndex(el) > 0);
  }

  function applyCustomColorToSelected() {
    if (!isAdmin) return;

    const targets = getColorActionTargets();
    if (!targets.length) {
      showToast('Select a day cell, row, or column first');
      return;
    }

    const color = document.getElementById('cell-color-picker').value;
    pushHistorySnapshot();
    targets.forEach((el) => {
      el.classList.add('custom-cell-color');
      el.style.setProperty('--custom-cell-color', color);
    });
    showToast('Color applied');
  }

  function getSelectedRowIndexForColoring() {
    if (selectedRowIndex !== null) {
      return selectedRowIndex;
    }

    if (selectedEditableCell) {
      const row = selectedEditableCell.closest('tr');
      const rows = Array.from(document.querySelectorAll('#tbody tr'));
      const rowIndex = rows.indexOf(row);
      return rowIndex >= 0 ? rowIndex : null;
    }

    return null;
  }

  function getSelectedColumnIndexForColoring() {
    if (selectedColumnIndex !== null) {
      return selectedColumnIndex;
    }

    if (selectedEditableCell) {
      const td = selectedEditableCell.closest('td');
      if (td && td.parentElement) {
        const index = Array.from(td.parentElement.children).indexOf(td);
        if (index >= 0) {
          return index;
        }
      }
    }

    return null;
  }

  function applyCustomColorToSelectedRow() {
    if (!isAdmin) return;

    const rowIndex = getSelectedRowIndexForColoring();
    if (rowIndex === null) {
      showToast('Select a row or a cell in that row first');
      return;
    }

    const row = document.querySelectorAll('#tbody tr')[rowIndex];
    if (!row) return;

    const color = document.getElementById('cell-color-picker').value;
    const targets = Array.from(row.querySelectorAll('td input, td textarea')).filter((el) => {
      const td = el.closest('td');
      if (!td || !td.parentElement) return false;
      const columnIndex = Array.from(td.parentElement.children).indexOf(td);
      return columnIndex > 0;
    });

    if (!targets.length) return;

    pushHistorySnapshot();
    targets.forEach((el) => {
      el.classList.add('custom-cell-color');
      el.style.setProperty('--custom-cell-color', color);
    });
  }

  function applyCustomColorToSelectedColumn() {
    if (!isAdmin) return;

    const columnIndex = getSelectedColumnIndexForColoring();
    if (columnIndex === null || columnIndex <= 0) {
      showToast('Select a day column or a cell in that column first');
      return;
    }

    const color = document.getElementById('cell-color-picker').value;
    const targets = Array.from(document.querySelectorAll('#tbody tr'))
      .map((row) => row.children[columnIndex]?.querySelector('input, textarea'))
      .filter(Boolean);

    if (!targets.length) return;

    pushHistorySnapshot();
    targets.forEach((el) => {
      el.classList.add('custom-cell-color');
      el.style.setProperty('--custom-cell-color', color);
    });
  }

  function normalizeColorPresets(rawPresets) {
    if (!Array.isArray(rawPresets)) {
      return [...DEFAULT_COLOR_PRESETS];
    }

    const normalized = rawPresets
      .slice(0, DEFAULT_COLOR_PRESETS.length)
      .map((value, index) => {
        const candidate = String(value || '').trim();
        if (/^#[0-9a-fA-F]{6}$/.test(candidate)) {
          return candidate;
        }
        return DEFAULT_COLOR_PRESETS[index];
      });

    while (normalized.length < DEFAULT_COLOR_PRESETS.length) {
      normalized.push(DEFAULT_COLOR_PRESETS[normalized.length]);
    }

    return normalized;
  }

  function renderColorPresets() {
    const presetButtons = document.querySelectorAll('.color-preset-btn[data-preset-index]');
    presetButtons.forEach((button) => {
      const index = Number(button.dataset.presetIndex);
      const presetColor = colorPresets[index] || DEFAULT_COLOR_PRESETS[index] || '#dbeafe';
      button.style.setProperty('--preset-color', presetColor);
      button.title = `Preset color ${index + 1}: ${presetColor}`;
    });
  }

  function applyColorPreset(presetOrColor) {
    if (!isAdmin) return;

    let selectedColor = null;
    if (typeof presetOrColor === 'number') {
      selectedColor = colorPresets[presetOrColor] || null;
    } else if (typeof presetOrColor === 'string') {
      selectedColor = presetOrColor;
    }

    if (!selectedColor) return;

    const picker = document.getElementById('cell-color-picker');
    if (picker) {
      picker.value = selectedColor;
    }
    applyCustomColorToSelected();
  }

  function applyCellsPatternPresetFromPicker() {
    if (!isAdmin) return;

    const presetSelect = document.getElementById('color-preset-select');
    if (!presetSelect) return;

    const presetIndex = Number(presetSelect.value);
    applyThemePresetToAllCells(presetIndex);
  }

  function setColorPresetFromPicker() {
    applyCellsPatternPresetFromPicker();
  }

  function applyPageThemeFromPicker() {
    setColorPresetFromPicker();
  }

  function resetColorPresets() {
    if (!isAdmin) return;
    pushHistorySnapshot();
    colorPresets = [...DEFAULT_COLOR_PRESETS];
    activeCellsPresetIndex = 0;
    columnThemePresetIndices = {};
    renderColorPresets();
    renderColumnThemePresets();
    applyThemePreset(0, { pushHistory: false });
    clearAllCustomColorsInternal();

    const picker = document.getElementById('cell-color-picker');
    if (picker) {
      picker.value = colorPresets[0];
    }

    saveStateForCurrentUser();
  }

  function clearSelectedColor() {
    if (!isAdmin) return;

    const targets = getColorActionTargets();
    if (!targets.length) {
      showToast('Select a day cell, row, or column first');
      return;
    }

    pushHistorySnapshot();
    targets.forEach((el) => {
      el.classList.remove('custom-cell-color');
      el.style.removeProperty('--custom-cell-color');
    });
  }

  function clearAllCustomColors() {
    if (!isAdmin) return;
    pushHistorySnapshot();
    document.querySelectorAll('#tbody input, #tbody textarea').forEach(el => {
      el.classList.remove('custom-cell-color');
      el.style.removeProperty('--custom-cell-color');
    });
  }

  function getCustomColorEntries() {
    const rows = Array.from(document.querySelectorAll('#tbody tr'));
    const colors = [];

    rows.forEach((row, rowIndex) => {
      const cells = Array.from(row.querySelectorAll('td input, td textarea'));
      cells.forEach((el, colIndex) => {
        const color = el.style.getPropertyValue('--custom-cell-color');
        if (color) {
          colors.push({ row: rowIndex, col: colIndex, color });
        }
      });
    });

    return colors;
  }

  function cloneUserCalendarEvents(events = {}) {
    return JSON.parse(JSON.stringify(events));
  }

  function captureState() {
    const headerInputs = Array.from(document.querySelectorAll('#header-row th input'));
    const rowElements = Array.from(document.querySelectorAll('#tbody tr'));
    const rows = rowElements.map(row => {
      const cells = Array.from(row.querySelectorAll('td input, td textarea'));
      return cells.map(cell => cell.value);
    });

    return {
      title: document.getElementById('main-title').value,
      subtitle: document.querySelector('.subtitle-input').value,
      weekOffset,
      headerLabels: headerInputs.map(h => h.value),
      rows,
      timeSettings: { ...timeSettings },
      colorPresets: [...colorPresets],
      themePresetIndex: activeThemePresetIndex,
      cellsPresetIndex: activeCellsPresetIndex,
      selectedCountryCode,
      columnThemePresetIndices: { ...columnThemePresetIndices },
      customColors: getCustomColorEntries(),
      userCalendarEvents: cloneUserCalendarEvents(userCalendarEvents),
      nowLineTheme,
      autoJumpToNowOnOpen
    };
  }

  function applyCustomColors(customColors = []) {
    clearAllCustomColorsInternal();

    customColors.forEach(entry => {
      const row = document.querySelectorAll('#tbody tr')[entry.row];
      if (!row) return;
      const el = row.querySelectorAll('td input, td textarea')[entry.col];
      if (!el) return;
      el.classList.add('custom-cell-color');
      el.style.setProperty('--custom-cell-color', entry.color);
    });
  }

  function clearAllCustomColorsInternal() {
    document.querySelectorAll('#tbody input, #tbody textarea').forEach(el => {
      el.classList.remove('custom-cell-color');
      el.style.removeProperty('--custom-cell-color');
    });
  }

  function restoreState(state) {
    if (!state) return;

    document.getElementById('main-title').value = state.title || '';
    document.querySelector('.subtitle-input').value = state.subtitle || '';
    weekOffset = Number.isFinite(state.weekOffset) ? state.weekOffset : 0;
    selectedCountryCode = countryOptions.includes(state.selectedCountryCode)
      ? state.selectedCountryCode
      : (countryOptions.includes(selectedCountryCode) ? selectedCountryCode : 'ZA');

    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    const rows = Array.isArray(state.rows) && state.rows.length ? state.rows : defaultRows;
    const restoredTimeSettings = state.timeSettings
      ? normalizeTimeSettings(state.timeSettings)
      : inferTimeSettingsFromRows(rows);
    timeSettings = restoredTimeSettings;
    colorPresets = normalizeColorPresets(state.colorPresets);
    renderColorPresets();
    activeThemePresetIndex = normalizeThemePresetIndex(state.themePresetIndex);
    columnThemePresetIndices = normalizeColumnThemePresetIndices(state.columnThemePresetIndices);
    if (Number.isInteger(Number(state.cellsPresetIndex))) {
      activeCellsPresetIndex = normalizeThemePresetIndex(state.cellsPresetIndex);
    } else {
      const dataColumnEntry = Object.entries(columnThemePresetIndices).find(([columnKey]) => Number(columnKey) > 0);
      activeCellsPresetIndex = dataColumnEntry
        ? normalizeThemePresetIndex(dataColumnEntry[1])
        : 0;
    }
    applyThemePreset(activeThemePresetIndex, { pushHistory: false });
    setTimeSettingsUIState();
    rebuildRowsForTimeSettings(rows);
    renderColumnThemePresets();

    clearCellSelection();
    clearRowSelection();
    clearColumnSelection();
    bindHeaderSelection();

    renderWeekLabel();

    const countrySelect = document.getElementById('country-select');
    if (countrySelect) {
      countrySelect.value = selectedCountryCode;
    }

    const headerInputs = Array.from(document.querySelectorAll('#header-row th input'));
    if (Array.isArray(state.headerLabels) && state.headerLabels.length === headerInputs.length) {
      headerInputs.forEach((input, i) => {
        input.value = state.headerLabels[i];
      });
    }

    refreshFocusDaySelect();
    applyTimetableColumnVisibility();

    applyCustomColors(Array.isArray(state.customColors) ? state.customColors : []);
    userCalendarEvents = cloneUserCalendarEvents(state.userCalendarEvents || {});
    setNowLineTheme(state.nowLineTheme || 'cyan');
    setAutoJumpToNowOnOpen(state.autoJumpToNowOnOpen === true, { save: false });
    loadPublicHolidays(calendarMonthDate.getFullYear());
    renderCalendar();
    updateTodayHighlight();
    updateNowLine();
    syncEditModeWithCustomizePanel();
  }

  function setNowLineTheme(theme) {
    nowLineTheme = theme === 'violet' ? 'violet' : 'cyan';
    const nowLine = document.getElementById('now-line');
    if (!nowLine) return;

    nowLine.classList.toggle('theme-violet', nowLineTheme === 'violet');
    nowLine.classList.toggle('theme-cyan', nowLineTheme === 'cyan');

    const themeSelect = document.getElementById('now-line-theme');
    if (themeSelect && themeSelect.value !== nowLineTheme) {
      themeSelect.value = nowLineTheme;
    }
  }

  function setAutoJumpToNowOnOpen(enabled, options = {}) {
    const { save = true } = options;
    autoJumpToNowOnOpen = Boolean(enabled);

    document.querySelectorAll('[data-auto-jump-control]').forEach((control) => {
      control.value = autoJumpToNowOnOpen ? 'on' : 'off';
    });

    if (save) {
      saveStateForCurrentUser();
    }
  }

  function onAutoJumpNowChange(value) {
    setAutoJumpToNowOnOpen(value === 'on');
  }

  function pushHistorySnapshot() {
    changeHistory.push(captureState());
    if (changeHistory.length > MAX_HISTORY) {
      changeHistory.shift();
    }
    saveStateForCurrentUser();
  }

  function undoPreviousChange() {
    if (!isAdmin) return;
    const previous = changeHistory.pop();
    if (!previous) return;
    restoreState(previous);
    showToast('Undo successful');
  }

  function clearDefaultPlaceholders() {
    if (!isAdmin) return;
    pushHistorySnapshot();

    document.getElementById('main-title').value = '';
    document.querySelector('.subtitle-input').value = '';

    const rows = Array.from(document.querySelectorAll('#tbody tr'));
    rows.forEach((row) => {
      const cells = Array.from(row.querySelectorAll('td input, td textarea'));
      cells.forEach((cell, colIndex) => {
        if (colIndex === 0) return;
        cell.value = '';
        applyEventChip(cell);
      });
    });

    clearAllCustomColorsInternal();
    updateNowLine();
  }

  async function clearAllChanges() {
    if (!isAdmin) return;
    const { confirmed } = await openActionDialog({
      title: 'Reset timetable',
      message: 'Clear all changes and reset to default timetable?',
      confirmText: 'Reset'
    });
    if (!confirmed) return;
    pushHistorySnapshot();
    changeHistory.length = 0;
    restoreState(INITIAL_STATE);
    showToast('Timetable reset');
  }

  function switchView(viewName) {
    activeView = viewName === 'calendar' ? 'calendar' : 'timetable';

    document.getElementById('timetable-panel').classList.toggle('active', activeView === 'timetable');
    document.getElementById('calendar-panel').classList.toggle('active', activeView === 'calendar');

    document.getElementById('timetable-view-btn').classList.toggle('active', activeView === 'timetable');
    document.getElementById('calendar-view-btn').classList.toggle('active', activeView === 'calendar');

    if (activeView === 'calendar') {
      setCalendarCollapsedForViewport();
      renderCalendar();
    } else {
      scrollDayColumnIntoView(getVisibleDayColumn());
    }

    updateNowLine();
  }

  function isSmallScreen() {
    return window.innerWidth <= 720;
  }

  function initSwipeNavigation() {
    const region = document.querySelector('.view-stack');
    if (!region) return;

    region.addEventListener('touchstart', (event) => {
      if (!isSmallScreen() || !event.touches || event.touches.length !== 1) return;
      const touch = event.touches[0];
      touchNavStartX = touch.clientX;
      touchNavStartY = touch.clientY;
      touchNavTracking = true;
    }, { passive: true });

    region.addEventListener('touchend', (event) => {
      if (!touchNavTracking || !isSmallScreen() || !event.changedTouches || event.changedTouches.length !== 1) {
        touchNavTracking = false;
        return;
      }

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - touchNavStartX;
      const deltaY = touch.clientY - touchNavStartY;
      touchNavTracking = false;

      if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
        return;
      }

      if (activeView === 'calendar') {
        changeMonth(deltaX < 0 ? 1 : -1);
        return;
      }

      if (timetableScope === 'day') {
        const dayColumns = getTimetableDataColumnIndices();
        const idx = dayColumns.indexOf(focusedDayColumn);
        if (idx === -1) return;
        const nextIndex = deltaX < 0 ? Math.min(dayColumns.length - 1, idx + 1) : Math.max(0, idx - 1);
        if (nextIndex !== idx) {
          onDayPillTap(dayColumns[nextIndex]);
        }
        return;
      }

      changeWeek(deltaX < 0 ? 1 : -1);
    }, { passive: true });
  }

  function scrollDayColumnIntoView(dayColumn) {
    if (!isSmallScreen() || !dayColumn) return;
    if (MOBILE_MANUAL_SCROLL_ONLY) return;

    const tableWrap = document.querySelector('.table-wrap');
    const headerCell = document.querySelector(`#header-row th:nth-child(${dayColumn})`);
    if (!tableWrap || !headerCell) return;

    const targetLeft = Math.max(0, headerCell.offsetLeft - ((tableWrap.clientWidth - headerCell.offsetWidth) / 2));
    tableWrap.scrollTo({ left: targetLeft, behavior: 'smooth' });
  }

  function getDetectedCountryCode() {
    try {
      const locale = navigator.language || 'en-US';
      const region = new Intl.Locale(locale).maximize().region;
      if (region) return region.toUpperCase();
    } catch (error) {
      // fallback below
    }
    return 'US';
  }

  function buildCountrySelect() {
    const select = document.getElementById('country-select');
    if (!select) return;

    const displayNames = typeof Intl.DisplayNames === 'function'
      ? new Intl.DisplayNames([navigator.language || 'en'], { type: 'region' })
      : null;

    select.innerHTML = '';
    countryOptions.forEach(code => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = `${displayNames ? displayNames.of(code) || code : code} (${code})`;
      select.appendChild(option);
    });

    selectedCountryCode = countryOptions.includes(selectedCountryCode)
      ? selectedCountryCode
      : 'ZA';
    select.value = selectedCountryCode;
  }

  function onCountryChange() {
    const select = document.getElementById('country-select');
    selectedCountryCode = select?.value || 'ZA';
    saveStateForCurrentUser();
    loadPublicHolidays(calendarMonthDate.getFullYear());
  }

  function setHolidayStatus(text, isError = false) {
    const status = document.getElementById('holiday-status');
    if (!status) return;
    status.textContent = text;
    status.style.color = isError ? '#b42318' : '#888';
  }

  function normalizeCalendarEventType(value) {
    const raw = (value || '').trim().toLowerCase();
    if (raw === 'birthday' || raw === 'bday') return 'birthday';
    return 'event';
  }

  function normalizeTimeInputValue(value) {
    const raw = String(value || '').trim();
    if (!raw) return '';
    const match = raw.match(/^([01]\d|2[0-3]):([0-5]\d)$/);
    if (!match) return '';
    return `${match[1]}:${match[2]}`;
  }

  function timeInputToMinutes(value) {
    const normalized = normalizeTimeInputValue(value);
    if (!normalized) return null;
    const [hour, minute] = normalized.split(':').map(Number);
    return (hour * 60) + minute;
  }

  function formatTimeInputLabel(value) {
    const normalized = normalizeTimeInputValue(value);
    if (!normalized) return '';

    const [hour24Raw, minuteRaw] = normalized.split(':');
    const hour24 = Number(hour24Raw);
    const suffix = hour24 >= 12 ? 'PM' : 'AM';
    const hour12 = hour24 % 12 || 12;
    return `${hour12}:${minuteRaw} ${suffix}`;
  }

  function canEditCalendarEvents() {
    return isAdmin && isCustomizePanelOpen();
  }

  function getUserEventsForDate(isoKey) {
    if (!Array.isArray(userCalendarEvents[isoKey])) {
      userCalendarEvents[isoKey] = [];
    }
    return userCalendarEvents[isoKey];
  }

  function isoDateKeyToDate(isoKey) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(String(isoKey || ''))) {
      return null;
    }

    const [year, month, day] = String(isoKey).split('-').map(Number);
    const date = new Date(year, month - 1, day);
    if (
      date.getFullYear() !== year
      || date.getMonth() !== (month - 1)
      || date.getDate() !== day
    ) {
      return null;
    }

    return date;
  }

  function normalizeIsoDateForScheduleYear(isoKey, fallbackIsoKey = null) {
    const parsedDate = isoDateKeyToDate(isoKey);
    if (parsedDate && parsedDate.getFullYear() === SCHEDULE_YEAR) {
      return getIsoDateKey(parsedDate);
    }

    const fallbackDate = isoDateKeyToDate(fallbackIsoKey);
    if (fallbackDate && fallbackDate.getFullYear() === SCHEDULE_YEAR) {
      return getIsoDateKey(fallbackDate);
    }

    return `${SCHEDULE_YEAR}-01-01`;
  }

  function getDateRangeKeys(startIsoKey, endIsoKey) {
    const startDate = isoDateKeyToDate(startIsoKey);
    const endDate = isoDateKeyToDate(endIsoKey);
    if (!startDate || !endDate) {
      return [];
    }

    let rangeStart = startDate;
    let rangeEnd = endDate;
    if (rangeEnd < rangeStart) {
      rangeStart = endDate;
      rangeEnd = startDate;
    }

    const keys = [];
    const cursor = new Date(rangeStart);
    while (cursor <= rangeEnd) {
      keys.push(getIsoDateKey(cursor));
      cursor.setDate(cursor.getDate() + 1);
    }
    return keys;
  }

  function findCalendarEventById(eventId) {
    if (!eventId) return null;

    for (const [isoKey, events] of Object.entries(userCalendarEvents)) {
      if (!Array.isArray(events)) continue;
      const index = events.findIndex(item => item.id === eventId);
      if (index !== -1) {
        return { isoKey, index, event: events[index] };
      }
    }

    return null;
  }

  function removeEventsByRangeId(rangeId) {
    if (!rangeId) return;

    Object.keys(userCalendarEvents).forEach((isoKey) => {
      const events = userCalendarEvents[isoKey];
      if (!Array.isArray(events)) return;

      const filtered = events.filter(item => item.rangeId !== rangeId);
      if (filtered.length) {
        userCalendarEvents[isoKey] = filtered;
      } else {
        delete userCalendarEvents[isoKey];
      }
    });
  }

  function openCalendarEventEditor(isoKey, eventId = null) {
    if (!canEditCalendarEvents()) return;

    const normalizedIsoKey = normalizeIsoDateForScheduleYear(isoKey, `${SCHEDULE_YEAR}-01-01`);

    if (eventId) {
      const existingEvent = getUserEventsForDate(normalizedIsoKey).find(item => item.id === eventId)
        || findCalendarEventById(eventId)?.event;
      if (!existingEvent) return;

      const rangeStart = normalizeIsoDateForScheduleYear(existingEvent.rangeStart || normalizedIsoKey, normalizedIsoKey);
      const rangeEnd = normalizeIsoDateForScheduleYear(existingEvent.rangeEnd || normalizedIsoKey, normalizedIsoKey);

      calendarEventEditorState = {
        isoKey: normalizedIsoKey,
        eventId,
        title: existingEvent.title || '',
        type: normalizeCalendarEventType(existingEvent.type || 'event'),
        startDate: rangeStart,
        endDate: rangeEnd,
        startTime: normalizeTimeInputValue(existingEvent.startTime || ''),
        endTime: normalizeTimeInputValue(existingEvent.endTime || ''),
        rangeId: existingEvent.rangeId || null
      };
    } else {
      calendarEventEditorState = {
        isoKey: normalizedIsoKey,
        eventId: null,
        title: '',
        type: 'event',
        startDate: normalizedIsoKey,
        endDate: normalizedIsoKey,
        startTime: '',
        endTime: '',
        rangeId: null
      };
    }

    renderCalendar();
  }

  function closeCalendarEventEditor() {
    calendarEventEditorState = null;
    renderCalendar();
  }

  function saveCalendarEventEditor() {
    if (!canEditCalendarEvents() || !calendarEventEditorState) return;

    const title = (calendarEventEditorState.title || '').trim();
    if (!title) {
      showToast('Enter an event title');
      return;
    }

    const type = normalizeCalendarEventType(calendarEventEditorState.type || 'event');
    const startDate = normalizeIsoDateForScheduleYear(
      calendarEventEditorState.startDate,
      calendarEventEditorState.isoKey
    );
    const endDate = normalizeIsoDateForScheduleYear(
      calendarEventEditorState.endDate,
      calendarEventEditorState.isoKey
    );
    const startTime = normalizeTimeInputValue(calendarEventEditorState.startTime);
    const endTime = normalizeTimeInputValue(calendarEventEditorState.endTime);

    if ((startTime && !endTime) || (!startTime && endTime)) {
      showToast('Choose both start and end time');
      return;
    }

    if (startTime && endTime) {
      const startMinutes = timeInputToMinutes(startTime);
      const endMinutes = timeInputToMinutes(endTime);
      if (startMinutes === null || endMinutes === null || endMinutes <= startMinutes) {
        showToast('End time must be after start time');
        return;
      }
    }

    const rangeKeys = getDateRangeKeys(startDate, endDate);
    if (!rangeKeys.length) {
      showToast('Choose a valid date range');
      return;
    }

    pushHistorySnapshot();

    if (calendarEventEditorState.eventId) {
      const existing = findCalendarEventById(calendarEventEditorState.eventId);
      if (existing?.event?.rangeId) {
        removeEventsByRangeId(existing.event.rangeId);
      } else if (existing) {
        const dayEvents = getUserEventsForDate(existing.isoKey);
        dayEvents.splice(existing.index, 1);
        if (!dayEvents.length) {
          delete userCalendarEvents[existing.isoKey];
        }
      }

      if (calendarEventEditorState.rangeId) {
        removeEventsByRangeId(calendarEventEditorState.rangeId);
      }
    }

    const rangeId = calendarEventEditorState.rangeId
      || `range-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    rangeKeys.forEach((isoKey, index) => {
      const events = getUserEventsForDate(isoKey);
      events.push({
        id: `${rangeId}-${index}`,
        rangeId,
        rangeStart: rangeKeys[0],
        rangeEnd: rangeKeys[rangeKeys.length - 1],
        title,
        type,
        allDay: !(startTime && endTime),
        startTime,
        endTime
      });
    });

    const overlapDays = rangeKeys.filter((isoKey) => countTimedEventOverlapsForDate(isoKey) > 0);
    if (overlapDays.length) {
      showToast(`Warning: overlapping timed events on ${overlapDays.length} day(s)`);
    }

    calendarEventEditorState = null;
    renderCalendar();
  }

  function addCalendarEvent(isoKey) {
    openCalendarEventEditor(isoKey);
  }

  function editCalendarEvent(isoKey, eventId) {
    openCalendarEventEditor(isoKey, eventId);
  }

  function removeCalendarEvent(isoKey, eventId) {
    if (!canEditCalendarEvents()) return;

    const normalizedIsoKey = normalizeIsoDateForScheduleYear(isoKey, `${SCHEDULE_YEAR}-01-01`);
    const events = getUserEventsForDate(normalizedIsoKey);
    let index = events.findIndex(item => item.id === eventId);
    let targetEvent = index !== -1 ? events[index] : null;

    if (!targetEvent) {
      const located = findCalendarEventById(eventId);
      if (!located) return;
      targetEvent = located.event;
      index = located.index;
      if (located.isoKey !== normalizedIsoKey) {
        const locatedEvents = getUserEventsForDate(located.isoKey);
        pushHistorySnapshot();
        if (targetEvent?.rangeId) {
          removeEventsByRangeId(targetEvent.rangeId);
          if (calendarEventEditorState && calendarEventEditorState.eventId === eventId) {
            calendarEventEditorState = null;
          }
          renderCalendar();
          return;
        }
        locatedEvents.splice(index, 1);
        if (!locatedEvents.length) {
          delete userCalendarEvents[located.isoKey];
        }
        if (calendarEventEditorState && calendarEventEditorState.eventId === eventId) {
          calendarEventEditorState = null;
        }
        renderCalendar();
        return;
      }
    }

    pushHistorySnapshot();

    if (targetEvent?.rangeId) {
      removeEventsByRangeId(targetEvent.rangeId);
    } else {
      events.splice(index, 1);
      if (!events.length) {
        delete userCalendarEvents[normalizedIsoKey];
      }
    }

    if (calendarEventEditorState
      && calendarEventEditorState.eventId === eventId) {
      calendarEventEditorState = null;
    }

    renderCalendar();
  }

  function getIsoDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  async function loadPublicHolidays(year) {
    setHolidayStatus(`Loading ${year} holidays...`);

    try {
      const response = await fetch(`https://date.nager.at/api/v3/PublicHolidays/${year}/${selectedCountryCode}`);
      if (!response.ok) throw new Error(`Holiday API returned ${response.status}`);

      const data = await response.json();
      holidayList = Array.isArray(data) ? data : [];
      holidayDates = new Map();

      holidayList.forEach(item => {
        if (!item?.date) return;
        if (!holidayDates.has(item.date)) {
          holidayDates.set(item.date, []);
        }
        holidayDates.get(item.date).push(item.localName || item.name || 'Holiday');
      });

      setHolidayStatus(`Loaded ${holidayList.length} public holidays for ${selectedCountryCode}`);
    } catch (error) {
      holidayList = [];
      holidayDates = new Map();
      setHolidayStatus('Could not load holidays right now', true);
    }

    renderCalendar();
  }

  function updateMonthButtons() {
    const prevBtn = document.getElementById('prev-month-btn');
    const nextBtn = document.getElementById('next-month-btn');
    if (!prevBtn || !nextBtn) return;

    prevBtn.disabled = calendarMonthDate.getMonth() === 0;
    nextBtn.disabled = calendarMonthDate.getMonth() === 11;
  }

  function changeMonth(delta) {
    const next = new Date(calendarMonthDate);
    next.setMonth(next.getMonth() + Number(delta));
    if (next.getFullYear() !== SCHEDULE_YEAR) return;

    calendarMonthDate = new Date(next.getFullYear(), next.getMonth(), 1);
    renderCalendar();
  }

  function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    if (!grid) return;

    const title = document.getElementById('calendar-title');
    const countryInfo = document.getElementById('country-info');
    const holidayCount = document.getElementById('holiday-count');

    title.textContent = calendarMonthDate.toLocaleDateString(undefined, { month: 'long', year: 'numeric' });
    countryInfo.textContent = `Country: ${selectedCountryCode}`;

    const monthStart = new Date(calendarMonthDate.getFullYear(), calendarMonthDate.getMonth(), 1);
    const monthEnd = new Date(calendarMonthDate.getFullYear(), calendarMonthDate.getMonth() + 1, 0);
    const startDay = (monthStart.getDay() + 6) % 7;

    const daysInMonth = monthEnd.getDate();
    const totalCells = Math.ceil((startDay + daysInMonth) / 7) * 7;
    const todayKey = getIsoDateKey(getNowInActiveTimeZone());

    const visibleHolidayCount = holidayList.filter(item => {
      if (!item?.date) return false;
      const date = new Date(item.date);
      return date.getFullYear() === calendarMonthDate.getFullYear() && date.getMonth() === calendarMonthDate.getMonth();
    }).length;

    holidayCount.textContent = `Public Holidays: ${visibleHolidayCount}`;

    const dayHeaders = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    grid.innerHTML = dayHeaders.map(day => `<div class="calendar-dayhead">${day}</div>`).join('');

    for (let cell = 0; cell < totalCells; cell++) {
      const date = new Date(monthStart);
      date.setDate(1 - startDay + cell);

      const inMonth = date.getMonth() === calendarMonthDate.getMonth();
      const isoKey = getIsoDateKey(date);
      const holidayNames = holidayDates.get(isoKey) || [];
      const userEvents = Array.isArray(userCalendarEvents[isoKey]) ? userCalendarEvents[isoKey] : [];
      const isEditable = canEditCalendarEvents();

      const dayCell = document.createElement('div');
      dayCell.className = 'calendar-cell';
      if (!inMonth) dayCell.classList.add('outside');
      if (isoKey === todayKey) dayCell.classList.add('today');
      if (holidayNames.length) dayCell.classList.add('holiday');
      if (userEvents.some(eventItem => eventItem.type === 'birthday')) {
        dayCell.classList.add('birthday-day');
      }

      const dateLabel = document.createElement('div');
      dateLabel.className = 'calendar-date';
      dateLabel.textContent = String(date.getDate());
      dayCell.appendChild(dateLabel);

      holidayNames.forEach((holidayName) => {
        const holidayTag = document.createElement('div');
        holidayTag.className = `holiday-tag${isEditable ? '' : ' locked'}`;
        holidayTag.textContent = holidayName;
        dayCell.appendChild(holidayTag);
      });

      userEvents.forEach((eventItem) => {
        const eventTag = document.createElement('div');
        eventTag.className = `user-event-tag${eventItem.type === 'birthday' ? ' birthday' : ''}`;

        const eventText = document.createElement('span');
        eventText.className = 'user-event-text';
        const eventTitle = eventItem.title || 'Event';
        const eventStartLabel = formatTimeInputLabel(eventItem.startTime || '');
        const eventEndLabel = formatTimeInputLabel(eventItem.endTime || '');
        const eventTimeLabel = eventStartLabel && eventEndLabel
          ? ` (${eventStartLabel} - ${eventEndLabel})`
          : '';
        eventText.textContent = `${eventTitle}${eventTimeLabel}`;
        eventTag.appendChild(eventText);

        if (isEditable) {
          const eventActions = document.createElement('span');
          eventActions.className = 'event-actions';

          const editBtn = document.createElement('button');
          editBtn.className = 'event-icon-btn';
          editBtn.type = 'button';
          editBtn.title = 'Edit event';
          editBtn.textContent = '✎';
          editBtn.onclick = (event) => {
            event.stopPropagation();
            editCalendarEvent(isoKey, eventItem.id);
          };

          const removeBtn = document.createElement('button');
          removeBtn.className = 'event-icon-btn';
          removeBtn.type = 'button';
          removeBtn.title = 'Remove event';
          removeBtn.textContent = '✕';
          removeBtn.onclick = (event) => {
            event.stopPropagation();
            removeCalendarEvent(isoKey, eventItem.id);
          };

          eventActions.appendChild(editBtn);
          eventActions.appendChild(removeBtn);
          eventTag.appendChild(eventActions);
        }

        dayCell.appendChild(eventTag);
      });

      if (inMonth && isEditable && calendarEventEditorState?.isoKey === isoKey) {
        const editorWrap = document.createElement('div');
        editorWrap.className = 'calendar-editor';

        const titleInput = document.createElement('input');
        titleInput.className = 'calendar-editor-input';
        titleInput.type = 'text';
        titleInput.placeholder = 'Event title';
        titleInput.value = calendarEventEditorState.title || '';
        titleInput.addEventListener('input', () => {
          if (!calendarEventEditorState) return;
          calendarEventEditorState.title = titleInput.value;
        });

        const typeSelect = document.createElement('select');
        typeSelect.className = 'calendar-editor-select';
        typeSelect.innerHTML = '<option value="event">Event</option><option value="birthday">Birthday</option>';
        typeSelect.value = normalizeCalendarEventType(calendarEventEditorState.type || 'event');
        typeSelect.addEventListener('change', () => {
          if (!calendarEventEditorState) return;
          calendarEventEditorState.type = normalizeCalendarEventType(typeSelect.value);
        });

        const startDateInput = document.createElement('input');
        startDateInput.className = 'calendar-editor-input';
        startDateInput.type = 'date';
        startDateInput.min = `${SCHEDULE_YEAR}-01-01`;
        startDateInput.max = `${SCHEDULE_YEAR}-12-31`;
        startDateInput.value = normalizeIsoDateForScheduleYear(
          calendarEventEditorState.startDate,
          isoKey
        );
        startDateInput.addEventListener('input', () => {
          if (!calendarEventEditorState) return;
          calendarEventEditorState.startDate = normalizeIsoDateForScheduleYear(
            startDateInput.value,
            isoKey
          );
        });

        const endDateInput = document.createElement('input');
        endDateInput.className = 'calendar-editor-input';
        endDateInput.type = 'date';
        endDateInput.min = `${SCHEDULE_YEAR}-01-01`;
        endDateInput.max = `${SCHEDULE_YEAR}-12-31`;
        endDateInput.value = normalizeIsoDateForScheduleYear(
          calendarEventEditorState.endDate,
          isoKey
        );
        endDateInput.addEventListener('input', () => {
          if (!calendarEventEditorState) return;
          calendarEventEditorState.endDate = normalizeIsoDateForScheduleYear(
            endDateInput.value,
            isoKey
          );
        });

        const startTimeInput = document.createElement('input');
        startTimeInput.className = 'calendar-editor-input';
        startTimeInput.type = 'time';
        startTimeInput.value = normalizeTimeInputValue(calendarEventEditorState.startTime || '');
        startTimeInput.title = 'Start time';
        startTimeInput.addEventListener('input', () => {
          if (!calendarEventEditorState) return;
          calendarEventEditorState.startTime = normalizeTimeInputValue(startTimeInput.value);
        });

        const endTimeInput = document.createElement('input');
        endTimeInput.className = 'calendar-editor-input';
        endTimeInput.type = 'time';
        endTimeInput.value = normalizeTimeInputValue(calendarEventEditorState.endTime || '');
        endTimeInput.title = 'End time';
        endTimeInput.addEventListener('input', () => {
          if (!calendarEventEditorState) return;
          calendarEventEditorState.endTime = normalizeTimeInputValue(endTimeInput.value);
        });

        const editorActions = document.createElement('div');
        editorActions.className = 'calendar-editor-actions';

        const saveBtn = document.createElement('button');
        saveBtn.className = 'calendar-editor-btn';
        saveBtn.type = 'button';
        saveBtn.textContent = calendarEventEditorState.eventId ? 'Save' : 'Add';
        saveBtn.onclick = (event) => {
          event.stopPropagation();
          saveCalendarEventEditor();
        };

        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'calendar-editor-btn secondary';
        cancelBtn.type = 'button';
        cancelBtn.textContent = 'Cancel';
        cancelBtn.onclick = (event) => {
          event.stopPropagation();
          closeCalendarEventEditor();
        };

        editorActions.appendChild(saveBtn);
        editorActions.appendChild(cancelBtn);

        editorWrap.appendChild(titleInput);
        editorWrap.appendChild(typeSelect);
        editorWrap.appendChild(startDateInput);
        editorWrap.appendChild(endDateInput);
        editorWrap.appendChild(startTimeInput);
        editorWrap.appendChild(endTimeInput);
        editorWrap.appendChild(editorActions);
        dayCell.appendChild(editorWrap);
      }

      if (inMonth && isEditable) {
        const tools = document.createElement('div');
        tools.className = 'calendar-tools';

        const addBtn = document.createElement('button');
        addBtn.className = 'calendar-add-btn';
        addBtn.type = 'button';
        addBtn.textContent = '+ Event';
        addBtn.onclick = (event) => {
          event.stopPropagation();
          addCalendarEvent(isoKey);
        };

        tools.appendChild(addBtn);
        dayCell.appendChild(tools);
      }

      grid.appendChild(dayCell);
    }

    updateMonthButtons();
    refreshTimedEventsOnTimetable();
  }

  function getMondayOfWeek(date) {
    const d = new Date(date);
    const day = d.getDay() || 7;
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - day + 1);
    return d;
  }

  function formatShortDate(date) {
    return date.toLocaleDateString(undefined, { day: '2-digit', month: 'short' });
  }

  function getYearRangeMondays(year) {
    const jan1 = new Date(year, 0, 1);
    const dec31 = new Date(year, 11, 31);

    const start = getMondayOfWeek(jan1);
    const end = getMondayOfWeek(dec31);

    return { start, end };
  }

  function isWeekInYear(monday, year) {
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    return monday.getFullYear() === year || sunday.getFullYear() === year;
  }

  function getDisplayedMonday() {
    const base = new Date();
    base.setDate(base.getDate() + (weekOffset * 7));
    return getMondayOfWeek(base);
  }

  function updateWeekButtons() {
    const { start, end } = getYearRangeMondays(SCHEDULE_YEAR);
    const monday = getDisplayedMonday();
    const prevBtn = document.getElementById('prev-week-btn');
    const nextBtn = document.getElementById('next-week-btn');

    if (!prevBtn || !nextBtn) return;

    prevBtn.disabled = monday <= start;
    nextBtn.disabled = monday >= end;
  }

  function updateWeekDayHeaders() {
    const monday = getDisplayedMonday();
    const headerInputs = document.querySelectorAll('#header-row th input');
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (headerInputs.length < 8) return;

    headerInputs[0].value = 'Time';

    for (let i = 0; i < 7; i++) {
      const dayDate = new Date(monday);
      dayDate.setDate(monday.getDate() + i);
      headerInputs[i + 1].value = `${dayNames[i]} ${formatShortDate(dayDate)}`;
    }

    refreshFocusDaySelect();
    applyTimetableColumnVisibility();
    refreshTimedEventsOnTimetable();
  }

  function clampWeekToYear() {
    const { start, end } = getYearRangeMondays(SCHEDULE_YEAR);
    let monday = getDisplayedMonday();

    if (monday < start) {
      while (monday < start) {
        weekOffset += 1;
        monday = getDisplayedMonday();
      }
    } else if (monday > end) {
      while (monday > end) {
        weekOffset -= 1;
        monday = getDisplayedMonday();
      }
    }
  }

  function renderWeekLabel() {
    const monday = getDisplayedMonday();
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const label = document.getElementById('week-label');
    label.textContent = `${formatShortDate(monday)} - ${formatShortDate(sunday)} (${SCHEDULE_YEAR})`;

    updateWeekDayHeaders();
    updateWeekButtons();
  }

  function changeWeek(delta) {
    weekOffset += Number(delta);
    clampWeekToYear();
    renderWeekLabel();
    updateTodayHighlight();
    scrollDayColumnIntoView(getVisibleDayColumn());
    updateNowLine();
  }

  function goToCurrentWeek() {
    weekOffset = 0;
    clampWeekToYear();
    renderWeekLabel();
    updateTodayHighlight();
    scrollDayColumnIntoView(getVisibleDayColumn());
    updateNowLine();
  }

  function getDayColumnForDisplayedWeek() {
    const now = getNowInActiveTimeZone();
    const viewDate = new Date(now);
    viewDate.setDate(now.getDate() + (weekOffset * 7));
    const weekMonday = getMondayOfWeek(viewDate);

    if (!isWeekInYear(weekMonday, SCHEDULE_YEAR)) return null;

    const day = viewDate.getDay();
    if (day === 0) return 8;
    return day + 1;
  }

  function updateTodayHighlight() {
    const dayColumn = getDayColumnForDisplayedWeek();

    document.querySelectorAll('#header-row th').forEach(th => th.classList.remove('today-header'));
    document.querySelectorAll('#tbody td').forEach(td => td.classList.remove('today-col'));

    if (!dayColumn) return;

    const headerCell = document.querySelector(`#header-row th:nth-child(${dayColumn})`);
    if (headerCell) headerCell.classList.add('today-header');

    document.querySelectorAll('#tbody tr').forEach(row => {
      const td = row.children[dayColumn - 1];
      if (td) td.classList.add('today-col');
    });

    scrollDayColumnIntoView(dayColumn);
  }

  function getVisibleDayColumn() {
    return getDayColumnForDisplayedWeek();
  }

  function getNowLineColumnSpan(tbody) {
    const firstRow = tbody?.querySelector('tr');
    if (!firstRow) return null;

    const firstDataColumnIndex = 1;
    const lastDataColumnIndex = Math.max(firstDataColumnIndex, getColCount() - 1);

    if (timetableScope === 'full') {
      const startCell = firstRow.children[firstDataColumnIndex];
      const endCell = firstRow.children[lastDataColumnIndex];
      if (!startCell || !endCell) return null;
      return { startCell, endCell };
    }

    const firstVisibleDataCell = () => {
      for (let index = firstDataColumnIndex; index <= lastDataColumnIndex; index += 1) {
        const cell = firstRow.children[index];
        if (!cell) continue;
        if (window.getComputedStyle(cell).display === 'none') continue;
        return cell;
      }
      return null;
    };

    const todayColumn = getDayColumnForDisplayedWeek();
    const todayCell = todayColumn ? firstRow.children[todayColumn - 1] : null;

    if (todayCell && window.getComputedStyle(todayCell).display !== 'none') {
      return { startCell: todayCell, endCell: todayCell };
    }

    const fallbackCell = firstVisibleDataCell();
    if (!fallbackCell) return null;
    return { startCell: fallbackCell, endCell: fallbackCell };
  }

  function updateNowLine() {
    const nowLine = document.getElementById('now-line');
    if (activeView !== 'timetable') {
      if (nowLine) nowLine.style.display = 'none';
      return;
    }

    const tableWrap = document.querySelector('.table-wrap');
    if (!nowLine) {
      return;
    }

    if (!tableWrap) {
      nowLine.style.display = 'none';
      return;
    }

    const now = getNowInActiveTimeZone();
    const currentMinutes = now.getHours() * 60 + now.getMinutes() + (now.getSeconds() / 60);
    const visibleStart = timeSettings.startMinute;
    const visibleEnd = timeSettings.fullDay ? (24 * 60) : timeSettings.endMinute;
    const visibleDuration = Math.max(1, visibleEnd - visibleStart);

    const tbody = document.getElementById('tbody');
    if (!tbody || !tbody.offsetHeight) {
      nowLine.style.display = 'none';
      return;
    }

    const span = getNowLineColumnSpan(tbody);
    if (!span) {
      nowLine.style.display = 'none';
      return;
    }

    const dayRatio = Math.max(0, Math.min(1, (currentMinutes - visibleStart) / visibleDuration));
    const top = tbody.offsetTop + (dayRatio * tbody.offsetHeight);
    const left = span.startCell.offsetLeft - tableWrap.scrollLeft;
    const right = (span.endCell.offsetLeft + span.endCell.offsetWidth) - tableWrap.scrollLeft;
    const width = Math.max(0, right - left);

    if (width <= 0) {
      nowLine.style.display = 'none';
      return;
    }

    nowLine.style.top = `${top}px`;
    nowLine.style.left = `${left}px`;
    nowLine.style.width = `${width}px`;
    nowLine.dataset.time = formatMinutesTo12h(currentMinutes);
    nowLine.style.display = 'block';
  }

  function scrollNowLineIntoView(behavior = 'smooth') {
    const nowLine = document.getElementById('now-line');
    const tableWrap = document.querySelector('.table-wrap');
    if (!nowLine || !tableWrap || nowLine.style.display !== 'block') return;

    const targetTop = Math.max(0, nowLine.offsetTop - (tableWrap.clientHeight * 0.35));
    tableWrap.scrollTo({ top: targetTop, behavior });
  }

  function jumpToCurrentTime() {
    updateNowLine();
    scrollNowLineIntoView('smooth');
  }

  function startNowLine() {
    if (nowLineTimer) clearInterval(nowLineTimer);
    updateNowLine();
    if (autoJumpToNowOnOpen) {
      setTimeout(() => scrollNowLineIntoView('smooth'), 120);
    }
    nowLineTimer = setInterval(updateNowLine, 60 * 1000);
    window.addEventListener('resize', updateNowLine);
    const tableWrap = document.querySelector('.table-wrap');
    if (tableWrap) {
      tableWrap.addEventListener('scroll', updateNowLine);
    }
  }

  function initMobileBottomNavAutoHide() {
    const mobileNav = document.querySelector('.mobile-week-nav');
    if (!mobileNav) return;

    let lastY = window.scrollY || 0;

    const applyVisibility = () => {
      if (!isSmallScreen()) {
        document.body.classList.remove('mobile-nav-hidden');
        return;
      }

      const currentY = window.scrollY || 0;
      const delta = currentY - lastY;
      const nearTop = currentY < 24;

      if (nearTop || delta < -6) {
        document.body.classList.remove('mobile-nav-hidden');
      } else if (delta > 8) {
        document.body.classList.add('mobile-nav-hidden');
      }

      lastY = currentY;
    };

    window.addEventListener('scroll', applyVisibility, { passive: true });
    window.addEventListener('resize', applyVisibility);
    applyVisibility();
  }

  function initPreviewShellState() {
    const appStatus = document.getElementById('app-login-status');
    if (appStatus) {
      appStatus.textContent = '';
      appStatus.style.color = '#888';
    }
    document.getElementById('app-shell').classList.remove('app-hidden');
    document.getElementById('app-lock').classList.remove('app-hidden');
  }

  // Init
  applyThemePreset(0, { pushHistory: false });
  colorPresets = normalizeColorPresets(DEFAULT_COLOR_PRESETS);
  activeCellsPresetIndex = normalizeThemePresetIndex(INITIAL_STATE.cellsPresetIndex);
  columnThemePresetIndices = normalizeColumnThemePresetIndices(INITIAL_STATE.columnThemePresetIndices);
  renderColorPresets();
  buildTimeSelectOptions();
  timeSettings = normalizeTimeSettings(DEFAULT_TIME_SETTINGS);
  setTimeSettingsUIState();
  rebuildRowsForTimeSettings(defaultRows);
  bindHeaderSelection();
  pushHistorySnapshot();
  setEditMode(true);
  buildCountrySelect();
  renderWeekLabel();
  initTimetableViewportControls();
  updateTodayHighlight();
  setTimeout(() => scrollDayColumnIntoView(getVisibleDayColumn()), 0);
  loadPublicHolidays(SCHEDULE_YEAR);
  renderCalendar();
  switchView('timetable');
  setNowLineTheme('cyan');
  setAutoJumpToNowOnOpen(false, { save: false });
  startNowLine();
  initMobileBottomNavAutoHide();
  initSwipeNavigation();
  setCalendarCollapsedForViewport();
  window.addEventListener('resize', setCalendarCollapsedForViewport);
  initHorizontalPanAssist();
  initTimetableSwipeHint();
  initHelpMenu();
  setAuthMode('signin');
  initPreviewShellState();
  window.addEventListener('beforeunload', saveStateForCurrentUser);
  const appEmailInput = document.getElementById('app-email');
  if (appEmailInput) {
    appEmailInput.addEventListener('keydown', handleAuthEnter);
  }
  const appPasswordInput = document.getElementById('app-password');
  if (appPasswordInput) {
    appPasswordInput.addEventListener('keydown', handleAuthEnter);
  }
  const appConfirmPasswordInput = document.getElementById('app-confirm-password');
  if (appConfirmPasswordInput) {
    appConfirmPasswordInput.addEventListener('keydown', handleAuthEnter);
  }
  initBuildBadge();
  ensureRuntimeLogoutButton();
  initSupabaseAuth();